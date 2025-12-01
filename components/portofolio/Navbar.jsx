"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const navWrapRef = useRef(null);

  // 🔥 SCROLL SPY
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.35 }
    );

    ["hero", ...navItems.map((i) => i.id)].forEach((id) => {
      const sec = document.getElementById(id);
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  // 🔥 GSAP ANIMATION
  useEffect(() => {
    const wrap = navWrapRef.current;

    gsap.from(wrap, {
      opacity: 0,
      y: -25,
      filter: "blur(10px)",
      duration: 0.8,
      ease: "power3.out",
    });

    ScrollTrigger.create({
      start: "top top",
      onUpdate: (self) =>
        gsap.to(wrap, {
          backgroundColor:
            self.progress > 0.05 ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.35)",
          backdropFilter: self.progress > 0.05 ? "blur(14px)" : "blur(6px)",
          scale: self.progress > 0.05 ? 0.96 : 1,
          duration: 0.25,
          ease: "power2.out",
        }),
    });
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-[1000] w-full md:w-auto px-4">
      {/* NAV WRAPPER */}
      <nav
        ref={navWrapRef}
        className="
          w-full md:w-max
          flex items-center 
          justify-between md:justify-start
          box-border
          px-4 md:px-0
          custom-nav
          rounded-full
          border border-white/10
          shadow-[0_8px_32px_rgba(0,0,0,0.25)]
          backdrop-blur-xl
          transition-all duration-300
        "
        aria-label="Primary"
        style={{
          "--base": "#000000ff",
          "--pill-bg": "#0A4F6B",
          "--hover-text": "#3EE08F",
          "--pill-text": "#FFFFFF",
          "--nav-h": "42px",
          "--logo": "36px",
          "--pill-pad-x": "18px",
          "--pill-gap": "3px",
        }}
      >
        {/* LOGO BUTTON */}
        <a
          href="#hero"
          aria-label="Home"
          className="rounded-full p-2 inline-flex items-center justify-center overflow-hidden"
          style={{
            width: "var(--nav-h)",
            height: "var(--nav-h)",
            background: "var(--base)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/favicon.ico"
            alt="Logo"
            className="w-full h-full object-cover block"
            style={{
              transform: "rotate(360deg)",
            }}
          />
        </a>

        {/* DESKTOP NAV */}
        <div
          className="relative items-center rounded-full hidden md:flex ml-2"
          style={{
            height: "var(--nav-h)",
            background: "var(--base)",
            overflow: "hidden",
          }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-[3px] h-full"
            style={{ gap: "var(--pill-gap)" }}
          >
            {navItems.map((item) => (
              <li key={item.id} className="flex h-full">
                <a
                  href={`#${item.id}`}
                  role="menuitem"
                  aria-label={item.label}
                  className="
                    relative overflow-hidden inline-flex items-center justify-center
                    h-full no-underline rounded-full box-border font-semibold
                    text-[16px] leading-[0] uppercase tracking-[0.2px]
                    whitespace-nowrap cursor-pointer
                  "
                  style={{
                    background: "var(--pill-bg)",
                    color: "var(--pill-text)",
                    paddingLeft: "var(--pill-pad-x)",
                    paddingRight: "var(--pill-pad-x)",
                  }}
                >
                  {/* Hover Bg Circle */}
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                    aria-hidden="true"
                    style={{
                      background: "var(--base)",
                      width: "130px",
                      height: "130px",
                      bottom: "-37px",
                      transform: "translate(-50%,0%) scale(0)",
                      transformOrigin: "50% 90px",
                      transition: "transform .3s",
                    }}
                  />

                  {/* Label Layer */}
                  <span className="label-stack relative inline-block leading-[1] z-[2]">
                    <span className="pill-label relative z-[2] inline-block leading-[1]">
                      {item.label}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-0 z-[3] inline-block opacity-0"
                      aria-hidden="true"
                      style={{
                        color: "var(--hover-text)",
                        transform: "translate(0,100px)",
                        transition: "all .35s",
                      }}
                    >
                      {item.label}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE BUTTON */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-full border-0 flex flex-col items-center justify-center gap-1 cursor-pointer p-0 relative"
          style={{
            width: "var(--nav-h)",
            height: "var(--nav-h)",
            background: "var(--base)",
          }}
        >
          <span
            className="hamburger-line w-4 h-0.5 rounded origin-center transition-all"
            style={{
              background: "var(--pill-bg)",
              transform: open
                ? "translateY(3px) rotate(45deg)"
                : "translateY(0) rotate(0)",
            }}
          />
          <span
            className="hamburger-line w-4 h-0.5 rounded origin-center transition-all"
            style={{
              background: "var(--pill-bg)",
              transform: open
                ? "translateY(-3px) rotate(-45deg)"
                : "translateY(0) rotate(0)",
            }}
          />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden absolute left-4 right-4 top-[5.2rem]
          rounded-[27px]
          bg-black/90 backdrop-blur-xl
          border border-white/10
          shadow-xl p-[3px]
          transition-all duration-300 origin-top
          ${
            open
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-95 invisible"
          }
        `}
      >
        <ul className="list-none m-0 p-[3px] flex flex-col gap-[3px]">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block py-3 px-4 text-[16px] font-medium rounded-[50px]
             transition-all text-white"
                style={{
                  background: "var(--pill-bg)",
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
