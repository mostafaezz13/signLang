import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header({ activePage }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <header className="bg-surface sticky top-0 z-50 border-b border-outline-variant/10">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto text-on-surface">
        <Link
          to="/"
          className="text-2xl font-bold text-primary tracking-tight font-headline"
        >
          Hear-Me
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          <Link
            to="/"
            className={`font-medium transition-colors ${
              activePage === "translator"
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            المترجم
          </Link>
          <Link
            to="/about"
            className={`font-medium transition-colors ${
              activePage === "about"
                ? "text-primary font-bold border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            من نحن؟
          </Link>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-primary/5 transition-colors relative"
            aria-label="Toggle Theme"
          >
            <span className="material-symbols-outlined text-primary text-[24px]">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>
          <button
            className="p-2 rounded-full hover:bg-primary/5 transition-colors"
            aria-label="Account"
          >
            <span className="material-symbols-outlined text-primary text-[28px]">
              account_circle
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
