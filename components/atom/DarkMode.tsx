"use client";
import { LaptopMinimal, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function DarkMode() {
  const [theme, setTheme] = useState("system"); // default to system before mount

  // On mount, load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Whenever theme changes (or on mount), apply the correct class
  useEffect(() => {
    const applyTheme = (currentTheme: any) => {
      const isDark =
        currentTheme === "dark" ||
        (currentTheme === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    applyTheme(theme);

    // If we're on system theme, we should listen for OS-level theme changes
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => applyTheme("system");

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  const toggleTheme = () => {
    let nextTheme;
    if (theme === "light") nextTheme = "dark";
    else if (theme === "dark") nextTheme = "system";
    else nextTheme = "light";

    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const getIcon = () => {
    if (theme === "light") return <Sun className="w-4 h-4" />;
    if (theme === "dark") return <Moon className="w-4 h-4" />;
    return <LaptopMinimal className="w-4 h-4" />;
  };

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 py-2 px-2 border border-foreground/20 rounded-md text-gray-400 cursor-pointer hover:text-white hover:bg-foreground dark:bg-background capitalize"
      aria-label="Toggle Theme"
      title={`Current mode: ${theme}`}
    >
      {getIcon()}
      <span className="text-sm">
        {theme === "system" ? "System" : theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}
