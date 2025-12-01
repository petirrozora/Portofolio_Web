'use client';

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="w-full px-4 sm:px-6 py-16 sm:py-20"  // <-- min-h-screen & center dihapus
    >
      <div className="max-w-4xl w-full mx-auto text-center">
        <div className="fade-up opacity-0 transition-all duration-1000">

          {/* TITLE */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 sm:mb-8">
            LET’S{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              WORK
            </span>
            <br />
            TOGETHER
          </h2>
          
          {/* SUBTEXT WITH LINKEDIN LINK ONLY */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Want to collaborate, discuss web development, or just say hi?  
            Feel free to{" "}
            <a
              href="https://linkedin.com/in/petirrozora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-semibold"
            >
            connect with me on LinkedIn
            </a>
            {" "}and I’ll get back to you when I can.
          </p>

        </div>
      </div>
    </section>
  );
}
