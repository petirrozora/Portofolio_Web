"use client";

import { MapPin, GraduationCap, Mail, Sparkles } from "lucide-react";
import Image from "next/image";

export default function About() {
  const info = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "LOCATION",
      value: "Karawang",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      label: "EDUCATION",
      value: "Informatics",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "EMAIL",
      value: "fathir.ilham2405@gmail.com",
    },
  ];

  const interests = [
    "Artificial Intelligence",
    "Software Engineer",
    "Computational Math",
    "Data Mining",
    "Networking",
    "Web Development",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20"
    >
      <div className="max-w-6xl w-full">
        <div className="fade-up">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-mono text-xs sm:text-sm tracking-wider">
              GET TO KNOW ME
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 sm:mb-12">
            Hello There!
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left Side - Image */}
          <div
            className="fade-right order-1 lg:order-1"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl sm:rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-700 aspect-[3/4]">
                <Image
                  src="/about.jpg"
                  alt="FIH"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Info */}
          <div
            className="fade-left order-2 lg:order-2"
            style={{ transitionDelay: "0.4s" }}
          >
            {/* Description */}
            <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I’m an Informatics undergraduate student at Universitas
                Singaperbangsa Karawang, with a strong interest in web
                development and front-end engineering.
              </p>

              <p>
                I’m currently focused on building a solid foundation in{" "}
                <span className="text-cyan-400 font-semibold">
                  Software Engineering
                </span>{" "}
                and{" "}
                <span className="text-cyan-400 font-semibold">Data Mining</span>
                . I believe that the best technologies come from a deep
                understanding of core concepts, not just following trends.
              </p>

              <p>
                Outside of coding, I explore photography and visual design.
                These interests help me think more critically about composition,
                color, and storytelling — all of which play a big role in how I
                approach user interface and experience design.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {info.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="p-2 sm:p-3 bg-gray-900 dark:bg-gray-800 rounded-lg sm:rounded-xl text-cyan-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-mono uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="font-bold text-sm sm:text-base text-gray-900 dark:text-white truncate">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interests & Focus */}
            <div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-gray-900 dark:text-white">
                Interests & Focus
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:text-white transition-all cursor-default hover:scale-105"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
