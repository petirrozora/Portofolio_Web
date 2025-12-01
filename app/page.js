"use client";

import { useState, useRef, useEffect } from "react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/portofolio/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import Cursor from "@/components/portofolio/Cursor";
import FloatingSocial from "@/components/portofolio/FloatingSocial";
import ScrollProgress from "@/components/portofolio/ScrollProgress";
import Background from "@/components/portofolio/background";
import Navbar from "@/components/portofolio/Navbar";

import "@/components/portofolio/animation.css";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const prevPosRef = useRef({ x: 0, y: 0 });

  // =====================
  //  CURSOR DESKTOP ONLY
  // =====================
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const move = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      setVelocity({
        x: e.clientX - prevPosRef.current.x,
        y: e.clientY - prevPosRef.current.y,
      });

      prevPosRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // ===========================
  //  SCROLL ANIMATIONS OBSERVER
  // ===========================
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in");
        }),
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const animated = document.querySelectorAll(
      ".fade-up, .fade-left, .fade-right, .scale-in"
    );

    animated.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ===========================
  //  FIX HASH ROUTING (REFRESH)
  // ===========================
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    }
  }, []);

  return (
    <main className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white relative overflow-x-hidden transition-colors duration-500">
      
      {/* Background Effects */}
      <Background />

      {/* Navbar */}
      <Navbar />

      {/* Cursor - Desktop Only */}
      <div className="hidden md:block">
        <Cursor pos={cursorPos} velocity={velocity} hovering={isHovering} />
      </div>

      {/* Progress Bar */}
      <ScrollProgress />

      {/* Floating Social */}
      <FloatingSocial />

      {/* Sections */}
      <section id="hero">
        <Hero setIsHovering={setIsHovering} />
      </section>

      <section id="about">
        <About setIsHovering={setIsHovering} />
      </section>

      <section id="experience">
        <Experience setIsHovering={setIsHovering} />
      </section>

      <section id="tools">
        <TechStack />
      </section>

      <section id="projects">
        <Projects setIsHovering={setIsHovering} />
      </section>

      <section id="contact">
        <Contact setIsHovering={setIsHovering} />
      </section>

    </main>
  );
}
