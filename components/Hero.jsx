'use client';

import { Sparkles, ArrowRight, Mouse, ChevronDown, Code2, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 });
  const [prevPos, setPrevPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const velocity = {
        x: e.clientX - prevPos.x,
        y: e.clientY - prevPos.y,
      };
      setMouseVelocity(velocity);
      setPrevPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prevPos]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="
        min-h-screen flex items-center justify-center 
        relative px-4 sm:px-6 
        pt-14 sm:pt-16 md:pt-20 lg:pt-24 
        pb-10 sm:pb-12 md:pb-16 lg:pb-20
      "
    >
      <div className="max-w-5xl w-full">
        <div className="fade-up opacity-0 transition-all duration-1000">

          {/* BADGE (warna ORIGINAL, tidak diubah) */}
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-mono text-xs md:text-sm tracking-wider uppercase">
              Frontend Developer & UI/UX Enthusiast
            </span>
          </div>

          {/* Greeting */}
          <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300">
            Hi, I’m
          </span>

          {/* Name */}
          <h1 className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
            font-black leading-[0.85] my-3
          ">
            <span
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 
              text-transparent bg-clip-text inline-block animate-gradient"
              style={{
                transform: `translateX(${mouseVelocity.x * 0.05}px) translateY(${mouseVelocity.y * 0.05}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              FATHIR
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              HENDRI
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              text-sm sm:text-base md:text-lg xl:text-xl 
              text-gray-600 dark:text-gray-400 max-w-3xl mb-6 leading-relaxed
            "
          >
            I craft{' '}
            <span className="text-gray-900 dark:text-white font-bold">modern</span>,{' '}
            <span className="text-gray-900 dark:text-white font-bold">interactive</span>, and{' '}
            <span className="text-gray-900 dark:text-white font-bold">user-focused</span>{' '}
            web experiences using React, Next.js, and cutting-edge technologies.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Highlight icon={Code2} label="Clean Code" color="cyan" />
            <Highlight icon={Zap} label="Fast Performance" color="purple" />
            <Highlight icon={Sparkles} label="Pixel Perfect" color="green" />
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <button
              onClick={() => scrollToSection('projects')}
              className="
                px-6 py-3 md:px-8 md:py-4 
                bg-gradient-to-r from-cyan-500 to-blue-600 
                text-white rounded-full font-bold 
                hover:shadow-lg hover:shadow-cyan-500/40 
                transition-all hover:scale-105 
                flex items-center justify-center gap-2 text-sm md:text-base
              "
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="
                px-6 py-3 md:px-8 md:py-4 
                border-2 border-gray-300 dark:border-gray-700 
                rounded-full font-bold 
                hover:bg-black/10 dark:hover:bg-white/10 
                hover:scale-105 transition-all 
                text-sm md:text-base
              "
            >
              Get In Touch
            </button>
          </div>

{/* Stats */}
<div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 max-w-md mt-6">
  <div className="text-center">
    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black 
      bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
      12+
    </p>
    <p className="text-[9px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">
      Projects
    </p>
  </div>

  <div className="text-center">
    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black 
      bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
      3+
    </p>
    <p className="text-[9px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">
      Years Exp
    </p>
  </div>

  <div className="text-center">
    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black 
      bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
      100%
    </p>
    <p className="text-[9px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 font-medium mt-1">
      Passion
    </p>
  </div>
</div>


        {/* Scroll Indicator */}
        <div
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 transition"
        >
          <Mouse className="w-6 h-6 text-gray-400" />
          <ChevronDown className="w-5 h-5 text-gray-400 animate-bounce" />
        </div>
      </div>
    </div>
    </section>
  );
}

function Highlight({ icon: Icon, label, color }) {
  const colors = {
    cyan: {
      bg: "from-cyan-500/10 to-cyan-600/10",
      border: "border-cyan-500/30",
      text: "text-cyan-400",
    },
    purple: {
      bg: "from-purple-500/10 to-pink-600/10",
      border: "border-purple-500/30",
      text: "text-purple-400",
    },
    green: {
      bg: "from-green-500/10 to-emerald-600/10",
      border: "border-green-500/30",
      text: "text-green-400",
    },
  };

  const theme = colors[color];

  return (
    <div
      className={`
        flex items-center gap-2 px-3 py-1.5 rounded-full 
        border text-sm font-semibold
        bg-gradient-to-r ${theme.bg} ${theme.border}
      `}
    >
      <Icon className={`w-4 h-4 ${theme.text}`} />
      {label}
    </div>
  );
}

