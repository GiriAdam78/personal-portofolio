"use client";

import { useEffect, useState } from "react";

type Heading = {
  level: number;
  text: string;
  id: string;
};

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: 0.1,
      },
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <nav className="space-y-1">
      {headings.length > 0 ? (
        headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();

              const el = document.getElementById(heading.id);
              if (!el) return;

              const yOffset = -100; // biar gak ketutup header
              const y =
                el.getBoundingClientRect().top + window.pageYOffset + yOffset;

              window.scrollTo({ top: y, behavior: "smooth" });
              window.history.pushState(null, "", `#${heading.id}`);
            }}
            className={`block text-sm py-1.5 transition-all duration-200 ${
              activeId === heading.id
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            } ${
              heading.level === 2 ? "pl-4" : heading.level === 3 ? "pl-6" : ""
            }`}
          >
            {heading.text}
          </a>
        ))
      ) : (
        <p className="text-sm text-muted-foreground italic">
          No sections found
        </p>
      )}
    </nav>
  );
}
