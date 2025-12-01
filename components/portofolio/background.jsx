"use client";

import { useEffect } from "react";

export default function Background() {
  useEffect(() => {
    const handleParallax = () => {
      const scrolled = window.scrollY;
      const items = document.querySelectorAll(".parallax-item");

      items.forEach((el, i) => {
        const speed = (i + 1) * 0.05;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* BLUE GLOW */}
      <div
        className="
          parallax-item absolute 
          w-64 h-64
          sm:w-80 sm:h-80
          md:w-[380px] md:h-[380px]
          lg:w-[450px] lg:h-[450px]
          bg-blue-500/20
          rounded-full 
          blur-[100px] sm:blur-[140px]
          -top-28 sm:-top-36 md:-top-40
          -left-24 sm:-left-32 md:-left-40
        "
      />

      {/* PURPLE GLOW */}
      <div
        className="
          parallax-item absolute 
          w-64 h-64
          sm:w-80 sm:h-80
          md:w-[380px] md:h-[380px]
          lg:w-[450px] lg:h-[450px]
          bg-purple-500/20
          rounded-full 
          blur-[110px] sm:blur-[160px]
          top-[45%] sm:top-[40%]
          -right-20 sm:-right-32 md:-right-40
        "
        style={{ animationDelay: "1s" }}
      />

      {/* PINK GLOW */}
      <div
        className="
          parallax-item absolute 
          w-64 h-64
          sm:w-80 sm:h-80
          md:w-[380px] md:h-[380px]
          lg:w-[450px] lg:h-[450px]
          bg-pink-500/20
          rounded-full 
          blur-[100px] sm:blur-[150px]
          -bottom-24 sm:-bottom-32 md:-bottom-40
          left-[20%] sm:left-[30%]
        "
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
}
