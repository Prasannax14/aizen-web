export default function Footer() {
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
    <footer className="bg-cream-100 dark:bg-maroon-950 border-t border-cream-300 dark:border-maroon-900 py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-xs text-cream-700 dark:text-cream-500">
            &copy; {new Date().getFullYear()} PRASANNA. All rights reserved.
          </p>
          <p className="text-[10px] font-mono text-cream-550 dark:text-maroon-700">
            Designed for learning & creative coding.
          </p>
        </div>

        {/* Right Side: Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-cream-700 dark:text-cream-550 font-medium">
          {['#about', '#skills', '#projects', '#contact'].map((href) => {
            const name = href.substring(1).charAt(0).toUpperCase() + href.substring(2)
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleScrollTo(e, href)}
                className="hover:text-maroon-900 dark:hover:text-cream-100 transition-colors"
              >
                {name}
              </a>
            )
          })}
        </div>

      </div>
    </footer>
  )
}
