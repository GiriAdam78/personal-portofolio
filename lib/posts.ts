import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";
const postsDirectory = path.join(process.cwd(), "content/posts");

// 🧠 schema validasi frontmatter
const PostSchema = z.object({
  title: z.string(),
  date: z.string(),
  description: z.string(),
  author: z.string(),
  authorAvatar: z.string().optional(),
  tags: z.array(z.string()).default([]),
  views: z.number().default(0),
  likes: z.number().default(0),
  coverImage: z.string().optional(),
});

// 🧠 infer type dari schema (auto sync 👍)
export type Post = z.infer<typeof PostSchema> & {
  slug: string;
};

export function getPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const filePath = path.join(postsDirectory, file);
      const source = fs.readFileSync(filePath, "utf8");

      const { data } = matter(source);

      // 🔥 validasi di sini
      const parsed = PostSchema.parse(data);

      return {
        slug,
        ...parsed,
      };
    });
}

// 🏷️ ambil semua tags unik
export function getAllTags(): string[] {
  const posts = getPosts();
  const tagSet = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

// 👤 ambil semua author unik
export function getAllAuthors(): string[] {
  const posts = getPosts();
  const authorSet = new Set<string>();
  posts.forEach((post) => authorSet.add(post.author));
  return Array.from(authorSet).sort();
}

