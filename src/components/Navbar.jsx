import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  // Initialize theme based on DOM element state set by head script
  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.contains('dark')
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setDarkMode(true)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // offset for navbar height

      // Check if we are at the bottom of the page
      const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 10

      // Check which section is in view
      const sections = navLinks.map(link => {
        const el = document.querySelector(link.href)
        if (el) {
          const rect = el.getBoundingClientRect()
          const top = rect.top + window.scrollY
          return {
            id: link.href.substring(1),
            offsetTop: top,
            offsetBottom: top + rect.height,
          }
        }
        return null
      }).filter(Boolean)

      if (isAtBottom && sections.length > 0) {
        setActiveSection(sections[sections.length - 1].id)
        return
      }

      const currentSection = sections.find(
        section => scrollPosition >= section.offsetTop && scrollPosition < section.offsetBottom
      )

      if (currentSection) {
        setActiveSection(currentSection.id)
      } else if (window.scrollY < 100) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Run once on load
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      return
    }
    const el = document.querySelector(href)
    if (el) {
      const rect = el.getBoundingClientRect()
      const offsetTop = rect.top + window.scrollY - 80 // navbar height offset
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-cream-100/90 dark:bg-maroon-950/90 backdrop-blur-sm border-b border-cream-300/40 dark:border-maroon-900/40 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '#')}
          className="font-sans font-extrabold tracking-tight text-lg text-maroon-900 dark:text-cream-100 group flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-maroon-700 dark:bg-maroon-500 group-hover:scale-125 transition-transform"></span>
          <span>PRASANNA</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isLinkActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-all duration-200 relative py-1 ${
                  isLinkActive 
                    ? 'text-maroon-950 dark:text-cream-50 font-bold' 
                    : 'text-cream-700 dark:text-cream-400 hover:text-maroon-700 dark:hover:text-cream-200'
                }`}
              >
                {link.name}
                {isLinkActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-maroon-700 dark:bg-maroon-500 rounded-full" />
                )}
              </a>
            )
          })}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-cream-200 dark:bg-maroon-900/60 border border-cream-300 dark:border-maroon-900/70 text-maroon-700 dark:text-cream-300 hover:text-maroon-950 dark:hover:text-cream-50 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Menu Trigger & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-cream-200 dark:bg-maroon-900/60 border border-cream-300 dark:border-maroon-900/70 text-maroon-700 dark:text-cream-300 hover:text-maroon-950 dark:hover:text-cream-50 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-maroon-800 dark:text-cream-300 hover:text-maroon-950 dark:hover:text-cream-50 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`md:hidden absolute top-16 left-0 w-full bg-cream-100 dark:bg-maroon-950 border-b border-cream-300/60 dark:border-maroon-900/60 shadow-soft transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isLinkActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-base font-medium py-2 border-b border-cream-200 dark:border-maroon-900/50 last:border-0 transition-colors ${
                  isLinkActive 
                    ? 'text-maroon-950 dark:text-cream-50 font-bold pl-3 border-l-2 border-l-maroon-700 dark:border-l-maroon-500' 
                    : 'text-cream-700 dark:text-cream-400 hover:text-maroon-700 dark:hover:text-cream-250 pl-1'
                }`}
              >
                {link.name}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
