import { getPosts, getAllTags, getAllAuthors } from "@/lib/posts";

import BlogLayout from "@/components/blog/BlogLayout";
import BlogPageClient
  from "@/components/blog/BlogPageClient";
export default function BlogPage() {
  const posts = getPosts();
  const allTags = getAllTags();
  const allAuthors = getAllAuthors();

  return (
    <div className="blog-container min-h-screen mt-30 mb-20 lg:mt-20">
      <h1 className="text-3xl font-bold text-center mt-3">Blog</h1>
      <p className="text-base text-muted-foreground text-center mt-3 mb-6">
        Some articles I wrote on various topics
      </p>

      

      <BlogPageClient posts={posts} allTags={allTags} allAuthors={allAuthors} />
    </div>
  );
}
