"use client";

import { useEffect, useState, useRef } from "react";
import { Moon, Sun } from "lucide-react";

// Hover magnet function
function useMagnet(ref, strength = 20) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      el.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
    };

    const reset = () => {
      el.style.transform = "translate(0,0)";
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, [ref, strength]);
}

// ---------------------------------------- //

export default function FloatingSocial() {
  const [isDark, setIsDark] = useState(null);

  // INIT THEME
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const theme = saved ? saved === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", theme);
    requestAnimationFrame(() => setIsDark(theme));
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    setIsDark(newTheme);
  };

  if (isDark === null) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[9999] mx-auto mb-4 flex h-14 origin-bottom">
      {/* Blur bawah */}
      <div
        className="fixed bottom-0 inset-x-0 h-16 w-full bg-background backdrop-blur-md 
        [-webkit-mask-image:linear-gradient(to_top,black,transparent)] pointer-events-none"
      />

      {/* Floating Bar */}
      <div
        className="
          w-max p-2 rounded-full border pointer-events-auto mx-auto flex h-full items-center px-2
          bg-white dark:bg-neutral-900 
          shadow-[0_0_0_1px_rgba(0,0,0,.03),0_4px_8px_rgba(0,0,0,.08)]
          dark:border-white/10
          dark:shadow-[0_-20px_80px_-20px_#ffffff1f_inset]
        "
      >
        <Icon href="#hero">
          <HomeSVG />
        </Icon>
        <Icon href="https://instagram.com/fathirr.hndri">
          <InstagramSVG />
        </Icon>

        <Divider />

        <Icon href="https://github.com/petirrozora">
          <GithubSVG />
        </Icon>
        <Icon href="https://linkedin.com/in/petirrozora">
          <LinkedInSVG />
        </Icon>

        <Divider />

        <ThemeButton isDark={isDark} toggle={toggleTheme} />
      </div>
    </div>
  );
}

// ---------------------------------------- //
// Components
// ---------------------------------------- //

function Icon({ href, children }) {
  const ref = useRef(null);
  useMagnet(ref);

  const isHash = href.startsWith("#");

  return (
    <div
      ref={ref}
      className="relative w-10 h-10 flex items-center justify-center"
    >
      <a
        href={href}
        {...(!isHash && { target: "_blank" })} // ⬅ FIX: hash tidak buka tab baru
        className="flex items-center justify-center w-10 h-10 rounded-full
                   hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
      >
        {children}
      </a>
    </div>
  );
}

function Divider() {
  return (
    <div className="w-[1px] h-10 bg-neutral-300 dark:bg-neutral-700 mx-2" />
  );
}

function ThemeButton({ isDark, toggle }) {
  const ref = useRef(null);
  useMagnet(ref);

  return (
    <button
      ref={ref}
      onClick={toggle}
      className="flex items-center justify-center w-10 h-10 rounded-full 
                 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-purple-500" />
      )}
    </button>
  );
}

// ---------------------------------------- //
// SVG SET - from your latest version
// ---------------------------------------- //

function HomeSVG() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 9.75L12 3L21 9.75V20.25C21 20.66 20.84 21.06 20.54 21.36C20.25 21.65 19.85 21.81 19.44 21.81H4.56C4.15 21.81 3.75 21.65 3.46 21.36C3.16 21.06 3 20.66 3 20.25V9.75Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function InstagramSVG() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
  );
}

function GithubSVG() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.26C2 16.73 4.87 20.47 8.83 21.82C9.33 21.91 9.52 21.62 9.52 21.36V19.75C7 20.3 6.48 18.57 6.48 18.57C6.03 17.42 5.37 17.11 5.37 17.11C4.44 16.48 5.44 16.49 5.44 16.49C6.47 16.57 7 17.62 7 17.62C7.93 19.32 9.45 18.83 10.05 18.57C10.14 17.91 10.41 17.46 10.71 17.2C8.43 16.93 6.05 15.98 6.05 12.47C6.05 11.39 6.41 10.52 7.03 9.82C6.93 9.56 6.6 8.59 7.13 7.21C7.13 7.21 7.99 6.93 9.51 8.17C10.32 7.94 11.19 7.82 12.06 7.82C12.93 7.82 13.8 7.94 14.61 8.17C16.13 6.93 17 7.21 17 7.21C17.53 8.59 17.2 9.56 17.1 9.82C17.72 10.52 18.08 11.39 18.08 12.47C18.08 15.99 15.69 16.92 13.41 17.19C13.79 17.53 14.09 18.16 14.09 19.17V21.36C14.09 21.62 14.25 21.92 14.78 21.82C18.75 20.47 21.63 16.73 21.63 12.26C21.63 6.58 17.13 2 12 2Z" />
    </svg>
  );
}

function LinkedInSVG() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.98 2.12 4.98 3.5ZM0.5 8H4.5V24H0.5V8ZM8.5 8H12.2V10.08H12.26C12.76 9.14 14.02 8.14 15.88 8.14C20.05 8.14 21 10.85 21 15.01V24H17V15.91C17 13.53 16.46 12.24 14.93 12.24C13.24 12.24 12.5 13.5 12.5 15.91V24H8.5V8Z" />
    </svg>
  );
}
