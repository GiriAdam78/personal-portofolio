import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import Image from "next/image";
import Link from "next/link";
import { Eye, Heart, Calendar, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TableOfContents from "@/components/blog/TableOfContents";
import PostInteraction from "@/components/blog/PostInteraction";
import slugify from "@/lib/slugify";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";

// 🧠 type params dari dynamic route
type Params = {
  slug: string;
};

type Props = {
  params: Promise<Params>;
};

type Heading = {
  level: number;
  text: string;
  id: string;
};


export function extractHeadings(content: string): Heading[] {
  const tree = unified().use(remarkParse).parse(content);

  const headings: Heading[] = [];

  visit(tree, "heading", (node: any) => {
    if (node.depth >= 1 && node.depth <= 3) {
      const text = node.children
        .map((child: any) => child.value || "")
        .join("");

      headings.push({
        level: node.depth,
        text,
        id: slugify(text),
      });
    }
  });

  return headings;
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content/posts", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold">Post tidak ditemukan</h1>
        <Link href="/blog" className="mt-4 text-primary hover:underline">
          Kembali ke Blog
        </Link>
      </div>
    );
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  const headings = extractHeadings(content);

  return (
    <article className="min-h-screen pt-32 pb-20 bg-background text-foreground">
      {/* 🖼️ Featured Image Section at the TOP */}
      {data.coverImage && (
        <div className="container mx-auto px-4 mb-16 max-w-6xl">
          <div className="relative w-full h-[350px] md:h-[600px] overflow-hidden rounded-[2.5rem] shadow-2xl border border-border/50">
            <Image
              src={data.coverImage}
              alt={data.title}
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover transition-transform duration-1000 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent" />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 max-w-6xl">
        {/* 🏷️ Header Section */}
        <header className="mb-8">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
            {data.title}
          </h1>

          {data.description && (
            <p className="text-base text-muted-foreground mb-8 max-w-3xl">
              {data.description}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-4">
              {data.authorAvatar && (
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border/50">
                  <Image
                    src={data.authorAvatar}
                    alt={data.author}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-base font-semibold">{data.author}</span>
                <span className="text-sm text-muted-foreground">
                  {data.date}
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              className="rounded-xl border-pink-500/50 text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              <Heart size={16} className="mr-2" />
              Sponsor this project
            </Button>
          </div>

          <PostInteraction
            slug={slug}
            initialViews={data.views || 0}
            initialLikes={data.likes || 0}
            date={data.date}
          />
        </header>

        <div className="flex flex-col lg:flex-row gap-16 mt-12">
          {/* 📝 Main Content */}
          <div className="flex-1 min-w-0">
            <div
              className="prose prose-lg dark:prose-invert max-w-none 
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:mb-6
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-li:text-muted-foreground
              prose-code:bg-secondary/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-border/50 prose-pre:rounded-xl"
            >
              <MDXRemote
                source={content}
                options={{
                  mdxOptions: {
                    rehypePlugins: [rehypeSlug],
                  },
                }}
              />
            </div>
          </div>

          {/* 📋 Table of Contents Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-28 pl-6 border-l border-border/50">
              <h3 className="text-xs font-semibold tracking-widest text-muted-foreground mb-4 uppercase">
                On This Page
              </h3>
              <TableOfContents headings={headings} />
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
