"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef(null);
  const [tab, setTab] = useState("academic");

  // === TIMELINE DATA (Academic + Experience) ===
  const academicData = [
    {
      period: "September 2023 - Present",
      place: "Universitas Singaperbangsa Karawang",
      title: "Bachelor of Informatics",
      desc: "Students who have a strong interest in Software Engineering and Data Mining.",
    },
    {
      period: "2020 - 2023",
      place: "SMA NEGERI 6 Bekasi",
      title: "Natural Sciences",
      desc: "Graduated from Natural Sciences with an interest in logic, mathematics, and informatics.",
    },
  ];

  const experienceData = [
    {
      period: "August 2025 - Present",
      place: "Bowo jok Bekasi",
      title: "Web Developer (Intern)",
      desc: "Built a responsive product catalog website with secure authentication, full product CRUD, image uploads, and an optimized admin dashboard, improving overall user browsing experience.",
    },
    {
      period: "2024 - Present",
      place: "Tarumanagara Foundation",
      title: "Marketing Team (Part-time)",
      desc: "Represented the university at school fairs, presentations, and promotional events.",
    },
  ];

  const timelineData = tab === "academic" ? academicData : experienceData;

  // === GSAP ANIMATIONS ===
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#experience",
            start: "top center",
            end: "bottom center",
            scrub: 1.2,
          },
        }
      );

      gsap.utils.toArray(".timeline-dot").forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "back.out(1.8)",
            scrollTrigger: { trigger: dot, start: "top 85%" },
          }
        );
      });

      gsap.utils.toArray(".exp-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { clipPath: "inset(0 0 100% 0)", opacity: 0, y: 40 },
          {
            clipPath: "inset(0 0 0% 0)",
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            delay: i * 0.2,
            scrollTrigger: { trigger: card, start: "top 85%" },
          }
        );
      });

      gsap.utils.toArray(".exp-card").forEach((card) => {
        gsap.to(card, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.utils.toArray(".fade-left").forEach((el) => {
        gsap.fromTo(
          el,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });

      gsap.utils.toArray(".fade-right").forEach((el) => {
        gsap.fromTo(
          el,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [tab]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-24 bg-gray-50 dark:bg-black text-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-black text-center mb-10 fade-up">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500">
            Journey Timeline
          </span>
        </h2>

        <div className="flex justify-center gap-3 mb-20">
          <button
            onClick={() => setTab("academic")}
            className={`px-6 py-2 rounded-full border transition-all ${
              tab === "academic"
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
            }`}
          >
            Academic
          </button>

          <button
            onClick={() => setTab("experience")}
            className={`px-6 py-2 rounded-full border transition-all ${
              tab === "experience"
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
            }`}
          >
            Experience
          </button>
        </div>

        <div className="relative max-w-5xl mx-auto flex flex-col gap-20">

          {/* ✅ FIXED RESPONSIVE TIMELINE LINE */}
          <div
            className="
              timeline-line
              absolute top-0
              w-1 h-full
              bg-gradient-to-b from-teal-400 via-teal-500/70 to-transparent
              rounded-full
              left-4 md:left-1/2
              md:-translate-x-1/2
            "
          />

          {timelineData.map((exp, i) => (
            <div key={i} className="relative w-full">

              {/* DESKTOP */}
              <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-12">
                <div className="fade-right text-right">
                  <span className="text-teal-400 font-semibold text-lg block">
                    {exp.period}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 text-lg">
                    {exp.place}
                  </span>
                </div>

                <div className="relative flex justify-center items-start">
                  <div className="
                    timeline-dot 
                    w-6 h-6 bg-teal-400 dark:bg-teal-500
                    rounded-full border-4 border-white dark:border-black
                    shadow-[0_0_20px_rgba(56,255,199,0.6)]
                  " />
                </div>

                <div className="fade-left">
                  <div className="
                    exp-card
                    p-8 rounded-2xl
                    bg-white/60 dark:bg-gray-900/60
                    backdrop-blur-xl shadow-xl
                    border border-gray-200/40 dark:border-gray-700/40
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
                  ">
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* MOBILE */}
              <div className="md:hidden pl-10 relative fade-up">
                <div className="
                  timeline-dot absolute -left-3 top-1.5
                  w-5 h-5 bg-teal-400 dark:bg-teal-500
                  rounded-full border-4 border-white dark:border-black
                  shadow-[0_0_20px_rgba(56,255,199,0.6)]
                "/>

                <div className="
                  exp-card
                  p-6 rounded-2xl
                  bg-white/60 dark:bg-gray-900/60
                  backdrop-blur-xl shadow-lg
                  border border-gray-200/40 dark:border-gray-700/40
                ">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="text-gray-600 dark:text-gray-400 text-sm block mb-1">
                    {exp.place}
                  </span>
                  <span className="text-teal-400 text-sm font-semibold block mb-3">
                    {exp.period}
                  </span>
                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
