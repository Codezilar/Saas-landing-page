"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="theme-toggle-track">
        <span className={`theme-toggle-thumb ${isDark ? "theme-toggle-thumb-dark" : ""}`}>
          {isDark ? "🌙" : "☀️"}
        </span>
      </span>
    </button>
  );
}
