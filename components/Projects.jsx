"use client";

import { Code, ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "GitHub Analyzer",
      desc: "Modern GitHub profile analyzer with charts, animations, and real-time data.",
      tech: ["Next.js", "TanStack Query", "Tailwind"],
      gradient: "from-blue-600 to-pink-600",
      features: ["Charts & Visualizations", "Responsive UI", "Smooth Animations"],
      url: "https://github-analyzer-fih.vercel.app/",
    },
    {
      title: "CineSearch",
      desc: "Movie discovery with TMDB API, filters, watchlist, and trailers.",
      tech: ["Next.js", "TanStack Query", "Tailwind"],
      gradient: "from-purple-600 to-blue-600",
      features: ["Search Movies", "Trending List", "Details Page"],
      url: "https://petirrozora.my.id/projects/movie_search_app/",
    },
    {
      title: "Smart Lyrics Finder",
      desc: "Find song lyrics using API with clean UI.",
      tech: ["JavaScript", "REST API", "CSS"],
      gradient: "from-green-600 to-teal-600",
      features: ["Find Lyrics", "Clean UI", "Responsive Design"],
      url: "https://petirrozora.my.id/projects/lyrics_finder/",
    },
    {
      title: "Anime Finder",
      desc: "Search anime using Jikan API with smooth async UI.",
      tech: ["JavaScript", "REST API", "CSS"],
      gradient: "from-orange-600 to-pink-600",
      features: ["Anime Search", "Responsive", "Async UI"],
      url: "https://petirrozora.my.id/projects/anime_finder/",
    },
    {
      title: "Weather & Clock Widget",
      desc: "Widget combining weather & time API with modern UI.",
      tech: ["JavaScript", "REST API", "CSS"],
      gradient: "from-green-600 to-blue-600",
      features: ["Weather Display", "Clock", "Responsive Design"],
      url: "https://petirrozora.my.id/projects/weather-widget/",
    },
    {
      title: "AI Quote Generator",
      desc: "Random anime quotes using KataAnime API.",
      tech: ["JavaScript", "REST API", "CSS"],
      gradient: "from-yellow-600 to-green-600",
      features: ["Random Quotes", "Elegant UI", "Responsive Design"],
      url: "https://petirrozora.my.id/projects/ai_quote_generator/",
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* TITLE */}
        <div className="fade-left">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-10 sm:mb-14">
            FEATURED{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
              PROJECTS
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="fade-up"
              style={{ transitionDelay: `${idx * 0.12}s` }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer hover:scale-[1.03] transition-all">
                  
                  {/* GRADIENT LAYER */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90 group-hover:opacity-100 transition-opacity`} />

                  {/* CARD CONTENT */}
                  <div className="relative p-6 sm:p-8 h-80 sm:h-96 flex flex-col justify-between text-white">

                    <div>
                      {/* ICON */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all">
                        <Code className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>

                      {/* TITLE + DESC */}
                      <h3 className="text-xl sm:text-2xl font-bold mb-1.5">{project.title}</h3>
                      <p className="text-white/80 text-sm sm:text-base mb-3">{project.desc}</p>

                      {/* FEATURES */}
                      <ul className="space-y-1.5 sm:space-y-2 mb-4">
                        {project.features.map((feature, i) => (
                          <li key={i} className="text-xs sm:text-sm text-white/70 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* TECH + VIEW BUTTON */}
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-xs sm:text-sm font-bold group-hover:gap-4 transition-all">
                        View Project
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>

                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
