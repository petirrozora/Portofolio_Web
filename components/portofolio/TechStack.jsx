'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const icons = [
  { label: "HTML5", icon: <i className="fa-brands fa-html5 text-orange-500 text-4xl"></i> },
  { label: "CSS3", icon: <i className="fa-brands fa-css3-alt text-blue-500 text-4xl"></i> },
  { label: "JavaScript", icon: <i className="fa-brands fa-js text-yellow-400 text-4xl"></i> },
  
  { label: "React", icon: <i className="fa-brands fa-react text-blue-400 text-4xl"></i> },
  { label: "Next.js", icon: <i className="devicon-nextjs-original text-white text-4xl"></i> },

  { label: "Node.js", icon: <i className="fa-brands fa-node-js text-green-500 text-4xl"></i> },
  { label: "Tailwind CSS", icon: <i className="devicon-tailwindcss-plain text-cyan-400 text-4xl"></i> },

  { label: "Git", icon: <i className="fa-brands fa-git-alt text-orange-600 text-4xl"></i> },
  { label: "GitHub", icon: <i className="fa-brands fa-github text-gray-300 text-4xl"></i> },

  { label: "REST API", icon: <i className="fa-solid fa-network-wired text-purple-400 text-4xl"></i> },

  { label: "PostgreSQL", icon: <i className="devicon-postgresql-plain colored text-4xl"></i> },

  { label: "TypeScript", icon: <i className="devicon-typescript-plain text-blue-500 text-4xl"></i> },

  { label: "Python", icon: <i className="fa-brands fa-python text-blue-600 text-4xl"></i> },
  { label: "PHP", icon: <i className="fa-brands fa-php text-indigo-300 text-4xl"></i> },
];


export default function TechStack() {
  const iconRef = useRef([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    // ======== GSAP STAGGER POP-IN ========
    gsap.from(iconRef.current, {
      opacity: 0,
      scale: 0.3,
      y: 30,
      stagger: 0.08,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: "#tools",
        start: "top 80%",
      },
    });

    // ======== AUTO SCROLL + REVERSE ON HOVER ========
    const el = scrollRef.current;

    let tween = gsap.to(el, {
      xPercent: -50,
      duration: 18,
      ease: "none",
      repeat: -1,
    });

    el.addEventListener("mouseenter", () => tween.timeScale(-1)); // reverse
    el.addEventListener("mouseleave", () => tween.timeScale(1)); // normal
  }, []);

  return (
    <section id="tools" className="py-20 bg-white dark:bg-black overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3EE08F] mb-16">
        Tech Stack
      </h2>

      <div className="w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex w-max gap-10 items-center select-none"
        >
          {icons.concat(icons).map((item, i) => (
            <div
              key={i}
              ref={(el) => (iconRef.current[i] = el)}
              className="flex-shrink-0 w-[110px]"
            >
              <div className="
                  flex flex-col items-center gap-2 text-center
                  transition-transform duration-300 hover:scale-110
                ">
                <div
                  className="
                    w-16 h-16 flex items-center justify-center rounded-xl
                    bg-gray-100 dark:bg-neutral-900 shadow-lg
                    animate-pulseGlow
                  "
                >
                  {item.icon}
                </div>
                <span className="text-gray-700 dark:text-gray-200 text-sm mt-1">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
