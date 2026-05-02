"use client";

import { useState, useEffect } from "react";
import { Eye, Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

type PostInteractionProps = {
  slug: string;
  initialViews: number;
  initialLikes: number;
  date: string;
};

export default function PostInteraction({ slug, initialViews, initialLikes, date }: PostInteractionProps) {
  const [views, setViews] = useState(initialViews);
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // 🧠 Simulate "Real" Views
    // In a real app, you would fetch this from an API like /api/posts/[slug]/views
    const viewedKey = `viewed_${slug}`;
    const hasViewed = localStorage.getItem(viewedKey);
    
    if (!hasViewed) {
      // Increment local state to show it's working
      setViews(prev => prev + 1);
      localStorage.setItem(viewedKey, "true");
      
      // 🔥 Here you would call your API:
      // fetch(`/api/posts/${slug}/views`, { method: "POST" });
    }

    // Load like status
    const likeKey = `liked_${slug}`;
    setIsLiked(localStorage.getItem(likeKey) === "true");
  }, [slug]);

  const handleLike = () => {
    const likeKey = `liked_${slug}`;
    if (isLiked) {
      setLikes(prev => prev - 1);
      setIsLiked(false);
      localStorage.removeItem(likeKey);
      // fetch(`/api/posts/${slug}/likes`, { method: "DELETE" });
    } else {
      setLikes(prev => prev + 1);
      setIsLiked(true);
      localStorage.setItem(likeKey, "true");
      // fetch(`/api/posts/${slug}/likes`, { method: "POST" });
    }
  };

  return (
    <div className="border-t border-border/40 pt-4 flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Eye size={16} />
        <span>{views.toLocaleString()} views</span>
      </div>
      <div className="flex items-center gap-2">
        <Calendar size={16} />
        <span>4 min read</span>
      </div>
      <button 
        onClick={handleLike}
        className={`flex items-center gap-2 transition-colors duration-300 ${isLiked ? "text-pink-500" : "hover:text-pink-500"}`}
      >
        <Heart size={16} className={isLiked ? "fill-current" : ""} />
        <span>{likes} likes</span>
      </button>
    </div>
  );
}
