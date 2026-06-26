"use client";

import { useTheme } from "@/components/ThemeProvider";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={styles.toggle}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className={styles.track}>
        <span className={`${styles.thumb} ${isDark ? styles.thumbDark : ""}`}>
          {isDark ? "🌙" : "☀️"}
        </span>
      </span>
    </button>
  );
}
