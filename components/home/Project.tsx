import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Star, Link as LinkIcon, Code2, Globe } from "lucide-react";
import Link from "next/link";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  homepage: string;
}

const TARGET_REPOS = [
  "express-gudang",
  "kodepos",
  "gudang-app",
  "giri-portofolio",
];

export default async function ProjectSection() {
  const res = await fetch("https://api.github.com/users/GiriAdam78/repos", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    console.error("Failed to fetch repositories");
    return null;
  }

  const repos: Repo[] = await res.json();

  const filteredRepos = repos.filter((repo) =>
    TARGET_REPOS.includes(repo.name),
  );

  return (
    <section
      id="project"
      className="project-container lg:h-[60vh] min-h-screen w-full z-10 mt-30 mb-20 lg:mt-20 scroll-smooth"
    >
      <p className="text-base font-semibold font-sans lg:text-1xl mb-4">
        Projects
      </p>
      <h1 className="mt-3 lg:text-4xl text-2xl font-bold">
        Selected Projects{" "}
      </h1>

      <p className="text-base font-normal font-sans lg:text-1xl mb-4 mt-3">
        A curated list of projects I’ve worked on independently.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredRepos.map((repo) => (
          <Card
            key={repo.id}
            className="flex flex-col bg-background/50 backdrop-blur border-border/50"
          >
            <CardHeader>
              <CardTitle className="text-lg font-bold">{repo.name}</CardTitle>
              <CardDescription className="line-clamp-2 min-h-[3rem]">
                {repo.description || "No description provided."}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {repo.language && (
                  <div className="flex items-center gap-1">
                    <Code2 className="w-4 h-4" />
                    <span>{repo.language}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>{repo.stargazers_count}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="gap-2 ">
              <Button variant="default" asChild>
                <a href={repo.html_url} className="font-sans">
                  <LinkIcon className="w-4 h-4" />
                 View Repository</a>
              </Button>
              {repo.homepage && (
                <Button variant="outline" asChild>
                  <a href={repo.homepage} className="font-sans">
                    <Globe className="h-3 w-3" /> Visit
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
