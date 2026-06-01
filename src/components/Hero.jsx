import { ArrowUpRight } from 'lucide-react'

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault()
    const el = document.querySelector(targetId)
    if (el) {
      const offsetTop = el.offsetTop - 80 // navbar height offset
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="relative min-h-[85vh] flex items-center justify-start bg-cream-100 dark:bg-maroon-950 py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl flex flex-col items-start space-y-8">
          
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cream-200 dark:bg-maroon-900/40 rounded-full border border-cream-300 dark:border-maroon-800/60 transition-colors duration-300">
            <span className="w-1.5 h-1.5 rounded-full bg-maroon-700 dark:bg-maroon-500 animate-pulse"></span>
            <span className="text-xs font-mono tracking-wider uppercase text-maroon-800 dark:text-cream-300 font-medium">Future Developer & Creative Thinker</span>
          </div>

          {/* Large Editorial Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-maroon-900 dark:text-cream-50 leading-[1.1] text-balance transition-colors duration-300">
            Building ideas into reality through <span className="font-serif italic font-normal text-maroon-500 dark:text-cream-400">learning</span>, creativity, and curiosity.
          </h1>

          {/* Personal Mission Statement / Introduction */}
          <p className="text-lg md:text-xl text-maroon-900/80 dark:text-cream-300 leading-relaxed max-w-2xl font-light transition-colors duration-300">
            I am a young learner and future developer passionate about coding, design, and understanding human psychology. I focus on creating clean, intuitive interfaces that solve real-world problems.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="inline-flex items-center justify-center bg-maroon-700 dark:bg-cream-100 text-white dark:text-maroon-950 hover:bg-maroon-800 dark:hover:bg-cream-200 px-6 py-3.5 rounded-lg text-sm font-medium transition-all shadow-soft duration-250 group gap-1"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4 text-maroon-300 dark:text-maroon-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center justify-center bg-cream-50 dark:bg-transparent border border-cream-300 dark:border-maroon-900 text-maroon-800 dark:text-cream-200 hover:bg-cream-200 dark:hover:bg-maroon-900/30 px-6 py-3.5 rounded-lg text-sm font-medium transition-all duration-250 shadow-soft-sm"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Decorative vertical line (minimalist layout) */}
      <div className="absolute right-10 bottom-10 hidden lg:flex flex-col items-center gap-4">
        <span className="text-[10px] font-mono uppercase tracking-widest text-cream-600 dark:text-maroon-700 rotate-90 my-8">Scroll Down</span>
        <span className="w-px h-16 bg-cream-300 dark:bg-maroon-900"></span>
      </div>
    </section>
  )
}
