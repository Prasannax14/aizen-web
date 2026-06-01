import { Check } from 'lucide-react'

export default function Skills() {
  const technicalSkills = [
    { name: 'HTML', desc: 'Semantic layouts, SEO foundations, and accessibility standards.' },
    { name: 'CSS', desc: 'Tailwind CSS, responsive grid layouts, and custom transitions.' },
    { name: 'JavaScript', desc: 'Modern ES6+ syntax, asynchronous programming, and DOM APIs.' },
    { name: 'React', desc: 'Component lifecycle, state management, hooks, and responsive design.' },
    { name: 'C++', desc: 'Object-oriented programming, data structures, and algorithms.' },
  ]

  const coreCompetencies = [
    { name: 'Problem Solving', desc: 'Analyzing complex problems, debugging, and building logic flows.' },
    { name: 'UI Design', desc: 'Creating minimalist design systems, prioritizing readable typography.' },
    { name: 'Creative Thinking', desc: 'Ideating novel concepts, prototyping interfaces, and creative coding.' },
  ]

  return (
    <section id="skills" className="py-24 bg-cream-100 dark:bg-maroon-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-maroon-500 dark:text-cream-400 mb-2">02 / Skills</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-maroon-900 dark:text-cream-50 transition-colors duration-300">My Expertise</h2>
          <div className="w-12 h-0.5 bg-maroon-700 dark:bg-maroon-500 mt-4"></div>
        </div>

        {/* Skills Sub-layouts */}
        <div className="space-y-16">
          
          {/* Technical Skills */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-maroon-500 dark:text-cream-450 font-mono mb-6">Technical Toolkit</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skill) => (
                <div 
                  key={skill.name}
                  className="bg-cream-50 dark:bg-maroon-900 border border-cream-300 dark:border-maroon-900/60 rounded-xl p-5 hover:border-maroon-700 dark:hover:border-maroon-500 hover:shadow-soft-sm transition-all duration-200 group flex items-start gap-4"
                >
                  <div className="p-1.5 bg-cream-100 dark:bg-maroon-950 rounded-lg border border-cream-300 dark:border-maroon-900 text-maroon-700 dark:text-cream-200 flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-maroon-900 dark:text-cream-100 text-base mb-1">{skill.name}</h4>
                    <p className="text-xs text-cream-600 dark:text-cream-400 leading-relaxed font-light">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies / Soft Skills */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-maroon-500 dark:text-cream-450 font-mono mb-6">Conceptual & Creative</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreCompetencies.map((skill) => (
                <div 
                  key={skill.name}
                  className="bg-cream-50 dark:bg-maroon-900 border border-cream-300 dark:border-maroon-900/60 rounded-xl p-5 hover:border-maroon-700 dark:hover:border-maroon-500 hover:shadow-soft-sm transition-all duration-200 group flex items-start gap-4"
                >
                  <div className="p-1.5 bg-cream-100 dark:bg-maroon-950 rounded-lg border border-cream-300 dark:border-maroon-900 text-maroon-700 dark:text-cream-200 flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-maroon-900 dark:text-cream-100 text-base mb-1">{skill.name}</h4>
                    <p className="text-xs text-cream-600 dark:text-cream-400 leading-relaxed font-light">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Simple Minimal pill badges at the bottom */}
          <div className="pt-6 border-t border-cream-300/45 dark:border-maroon-900/50">
            <span className="text-xs font-mono text-cream-700 dark:text-cream-500 mr-4">Other tools:</span>
            <div className="inline-flex flex-wrap gap-2 mt-2 sm:mt-0">
              {['Vite', 'Git & GitHub', 'PostCSS', 'Figma', 'Markdown', 'VS Code'].map((tool) => (
                <span 
                  key={tool} 
                  className="px-2.5 py-1 text-[11px] font-mono bg-cream-50 dark:bg-maroon-900 border border-cream-300 dark:border-maroon-800 text-maroon-800 dark:text-cream-300 rounded-full transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
