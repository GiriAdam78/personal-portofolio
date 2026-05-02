"use client";

import { useState, useMemo } from "react";
import type { Post } from "@/lib/posts";
import BlogSidebar from "./BlogSidebar";
import PostCard from "./PostCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

type BlogLayoutProps = {
  posts: Post[];
  allTags: string[];
  allAuthors: string[];
};

export default function BlogLayout({ posts, allTags, allAuthors }: BlogLayoutProps) {
  const [sort, setSort] = useState("newest");
  const [perPage, setPerPage] = useState(5);
  const [author, setAuthor] = useState("");
  const [tag, setTag] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when filters change
  const handleSortChange = (val: string) => { setSort(val); setCurrentPage(1); };
  const handlePerPageChange = (val: number) => { setPerPage(val); setCurrentPage(1); };
  const handleAuthorChange = (val: string) => { setAuthor(val); setCurrentPage(1); };
  const handleTagChange = (val: string) => { setTag(val); setCurrentPage(1); };

  // Filter & sort posts
  const filteredPosts = useMemo(() => {
    let result = [...posts];

    // Filter by author
    if (author) {
      result = result.filter((p) => p.author === author);
    }

    // Filter by tag
    if (tag) {
      result = result.filter((p) => p.tags.includes(tag));
    }

    // Sort
    switch (sort) {
      case "oldest":
        result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case "most-viewed":
        result.sort((a, b) => b.views - a.views);
        break;
      case "most-liked":
        result.sort((a, b) => b.likes - a.likes);
        break;
      case "newest":
      default:
        result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
    }

    return result;
  }, [posts, author, tag, sort]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / perPage));
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-8">
      {/* Sidebar */}
      <BlogSidebar
        allTags={allTags}
        allAuthors={allAuthors}
        selectedSort={sort}
        selectedPerPage={perPage}
        selectedAuthor={author}
        selectedTag={tag}
        onSortChange={handleSortChange}
        onPerPageChange={handlePerPageChange}
        onAuthorChange={handleAuthorChange}
        onTagChange={handleTagChange}
      />

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Results info */}
        <div className="flex items-center justify-between mb-4 px-1">
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-medium text-foreground">
              {paginatedPosts.length}
            </span>{" "}
            of{" "}
            <span className="font-medium text-foreground">
              {filteredPosts.length}
            </span>{" "}
            posts
          </p>
          {(author || tag) && (
            <button
              onClick={() => { setAuthor(""); setTag(""); setCurrentPage(1); }}
              className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 decoration-dotted transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Post list */}
        {paginatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {paginatedPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-muted-foreground text-sm">No posts found.</p>
            <button
              onClick={() => { setAuthor(""); setTag(""); setCurrentPage(1); }}
              className="mt-2 text-xs underline underline-offset-2 decoration-dotted text-muted-foreground hover:text-foreground transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded border border-dotted border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded text-sm font-mono transition-colors ${
                  currentPage === page
                    ? "bg-foreground text-background font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-dotted border-border"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded border border-dotted border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}