"use client";

import { useState } from "react";
import BlogLayout from "./BlogLayout";
import type { Post } from "@/lib/posts";
import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";
export default function BlogPageClient({
  posts,
  allTags,
  allAuthors,
}: {
  posts: Post[];
  allTags: string[];
  allAuthors: string[];
}) {
  const [search, setSearch] = useState("");
  const filteredPosts = posts.filter((post) => {
    const keyword = search.toLowerCase();

    return (
      post.title.toLowerCase().includes(keyword) ||
      post.description.toLowerCase().includes(keyword) ||
      post.author.toLowerCase().includes(keyword) ||
      post.tags.some((tag) => tag.toLowerCase().includes(keyword))
    );
  });
  return (
    <>
      <div className="flex items-center justify-center mb-2">
        <InputGroup className="max-w-sm">
          <InputGroupInput
            placeholder="Search ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <InputGroupAddon>
            <SearchIcon className="text-muted-foreground" />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>Ctrl+K</Kbd>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <BlogLayout
        posts={filteredPosts}
        allTags={allTags}
        allAuthors={allAuthors}
      />
    </>
  );
}
