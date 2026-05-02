import Link from "next/link";
import { Calendar, Eye, Heart, ArrowRight } from "lucide-react";
import type { Post } from "@/lib/posts";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  // Format the date nicely
  const formattedDate = new Date(post.date).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // Fallback avatar URL using ui-avatars
  const avatarUrl =
    post.authorAvatar && post.authorAvatar.startsWith("http")
      ? post.authorAvatar
      : `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=random&color=fff&size=64`;

  return (
    <article className="group relative p-4 border border-dotted border-border rounded-md hover:border-foreground/30 transition-all duration-300 hover:shadow-sm">
      {/* Tags row */}
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] font-medium rounded-full border border-dotted border-border text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <Link href={`/blog/${post.slug}`}>
        <h2 className="text-xl lg:text-2xl font-sans font-semibold dark:text-foreground mb-2 leading-relaxed group-hover:underline underline-offset-4 decoration-dotted transition-all">
          {post.title}
        </h2>
      </Link>

      {/* Description */}
      <p className="text-sm lg:text-base font-sans font-normal text-muted-foreground leading-relaxed line-clamp-2 mb-4">
        {post.description}
      </p>

      {/* Author row */}
      <div className="flex items-center gap-2 mb-3">
        <img
          src={avatarUrl}
          alt={post.author}
          className="w-7 h-7 rounded-full object-cover ring-1 ring-border"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=random&color=fff&size=64`;
          }}
        />
        <p className="text-sm text-muted-foreground font-medium">
          {post.author}
        </p>
      </div>

      {/* Bottom meta row */}
      <div className="flex justify-between items-center pt-3 border-t border-dotted border-border">
        <div className="flex items-center gap-4">
          {/* Date */}
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{formattedDate}</span>
          </div>
          {/* Views */}
          <div className="flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {post.views.toLocaleString()}
            </span>
          </div>
          {/* Likes */}
          <div className="flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {post.likes.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Read More */}
        <Link
          href={`/blog/${post.slug}`}
          className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors group/link"
        >
          Read More
          <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
