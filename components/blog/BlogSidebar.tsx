"use client";

import { useState } from "react";
import { ChevronDown, SlidersHorizontal, Tags, User, ArrowUpDown, Rows3 } from "lucide-react";

type BlogSidebarProps = {
  allTags: string[];
  allAuthors: string[];
  selectedSort: string;
  selectedPerPage: number;
  selectedAuthor: string;
  selectedTag: string;
  onSortChange: (sort: string) => void;
  onPerPageChange: (perPage: number) => void;
  onAuthorChange: (author: string) => void;
  onTagChange: (tag: string) => void;
};

const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "most-viewed", label: "Most Viewed" },
  { value: "most-liked", label: "Most Liked" },
];

const perPageOptions = [5, 10, 15, 20];

export default function BlogSidebar({
  allTags,
  allAuthors,
  selectedSort,
  selectedPerPage,
  selectedAuthor,
  selectedTag,
  onSortChange,
  onPerPageChange,
  onAuthorChange,
  onTagChange,
}: BlogSidebarProps) {
  const [openSections, setOpenSections] = useState({
    sort: true,
    perPage: true,
    author: true,
    tags: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <aside className="w-full lg:w-[260px] shrink-0">
      <div className="lg:sticky lg:top-24 space-y-1">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4 px-1">
          <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Filters
          </h3>
        </div>

        {/* Sort By */}
        <div className="border border-dotted border-border rounded-md overflow-hidden">
          <button
            onClick={() => toggleSection("sort")}
            className="w-full flex items-center justify-between px-3 py-2.5 hover:bg-muted/50 transition-colors"
          >
            <span className="flex items-center gap-2 text-sm font-medium">
              <ArrowUpDown className="w-3.5 h-3.5" />
              Sort By
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${
                openSections.sort ? "rotate-180" : ""
              }`}
            />
          </button>
          {openSections.sort && (
            <div className="px-2 pb-2 space-y-0.5">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => onSortChange(option.value)}
                  className={`w-full text-left px-2.5 py-1.5 rounded text-sm transition-colors ${
                    selectedSort === option.value
                      ? "bg-foreground text-background font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Posts Per Page */}
        <div className="border border-dotted border-border rounded-md overflow-hidden">
          <button
            onClick={() => toggleSection("perPage")}
            className="w-full flex items-center justify-between px-3 py-2.5 hover:bg-muted/50 transition-colors"
          >
            <span className="flex items-center gap-2 text-sm font-medium">
              <Rows3 className="w-3.5 h-3.5" />
              Posts Per Page
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${
                openSections.perPage ? "rotate-180" : ""
              }`}
            />
          </button>
          {openSections.perPage && (
            <div className="px-2 pb-2 flex flex-wrap gap-1.5">
              {perPageOptions.map((num) => (
                <button
                  key={num}
                  onClick={() => onPerPageChange(num)}
                  className={`px-3 py-1 rounded text-sm font-mono transition-colors ${
                    selectedPerPage === num
                      ? "bg-foreground text-background font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/80 border border-dotted border-border"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Filter by Author */}
        <div className="border border-dotted border-border rounded-md overflow-hidden">
          <button
            onClick={() => toggleSection("author")}
            className="w-full flex items-center justify-between px-3 py-2.5 hover:bg-muted/50 transition-colors"
          >
            <span className="flex items-center gap-2 text-sm font-medium">
              <User className="w-3.5 h-3.5" />
              Authors
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${
                openSections.author ? "rotate-180" : ""
              }`}
            />
          </button>
          {openSections.author && (
            <div className="px-2 pb-2 space-y-0.5">
              <button
                onClick={() => onAuthorChange("")}
                className={`w-full text-left px-2.5 py-1.5 rounded text-sm transition-colors ${
                  selectedAuthor === ""
                    ? "bg-foreground text-background font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                All Authors
              </button>
              {allAuthors.map((author) => (
                <button
                  key={author}
                  onClick={() => onAuthorChange(author)}
                  className={`w-full text-left px-2.5 py-1.5 rounded text-sm transition-colors ${
                    selectedAuthor === author
                      ? "bg-foreground text-background font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                  }`}
                >
                  {author}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="border border-dotted border-border rounded-md overflow-hidden">
          <button
            onClick={() => toggleSection("tags")}
            className="w-full flex items-center justify-between px-3 py-2.5 hover:bg-muted/50 transition-colors"
          >
            <span className="flex items-center gap-2 text-sm font-medium">
              <Tags className="w-3.5 h-3.5" />
              Tags
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${
                openSections.tags ? "rotate-180" : ""
              }`}
            />
          </button>
          {openSections.tags && (
            <div className="px-2 pb-2 flex flex-wrap gap-1.5">
              <button
                onClick={() => onTagChange("")}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedTag === ""
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground border border-dotted border-border hover:bg-muted/80"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => onTagChange(tag)}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedTag === tag
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground border border-dotted border-border hover:bg-muted/80"
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
