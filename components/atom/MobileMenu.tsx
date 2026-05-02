"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#project" },
    { name: "Blogs", href: "/blog" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle mobile menu"
        className="inline-flex items-center py-2 px-2 border border-foreground/20 rounded-md text-gray-400 cursor-pointer hover:text-foreground hover:bg-foreground/10 transition-colors z-50"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Content (Slide-down effect) */}
      <div
        className={`fixed top-16 left-0 right-0 z-50 flex flex-col bg-background border-b border-border shadow-lg p-6 gap-4 md:hidden transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link, i) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="group relative text-base font-semibold text-foreground/80 hover:text-foreground hover:bg-foreground/5 cursor-pointer p-3 rounded-md transition-colors flex items-start"
          >
            <sup className="mr-2 mt-0.5 text-[10px] font-normal text-foreground/50">
              0{i + 1}
            </sup>
            <span className="relative">
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full group-focus:w-full"></span>
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
