import { Sparkles, GraduationCap, Code2, ArrowRight } from 'lucide-react'

export default function Timeline() {
  const milestones = [
    {
      title: 'Early Curiosity',
      period: '2018 - 2020',
      desc: 'Developing an obsession with understanding how digital tools work. Dismantling software settings, exploring web structures, and studying interface designs.',
      icon: Sparkles,
    },
    {
      title: 'Education Journey',
      period: '2020 - 2023',
      desc: 'Pursuing core education while undertaking self-directed study in human behavior, design layouts, and technical logic structures.',
      icon: GraduationCap,
    },
    {
      title: 'Started Coding',
      period: '2024 - Present',
      desc: 'Wrote first lines of logic. Built custom static projects, designed web elements, and learned modern technologies like JavaScript, React, and Tailwind CSS.',
      icon: Code2,
    },
    {
      title: 'Future Goals',
      period: '2026 & Beyond',
      desc: 'Targeting collaborations on open-source projects, mastering architectural frameworks, and building tools that merge creative UI with powerful logic.',
      icon: ArrowRight,
    },
  ]

  return (
    <section id="timeline" className="py-24 bg-cream-100 dark:bg-maroon-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <p className="text-xs font-mono uppercase tracking-widest text-maroon-500 dark:text-cream-400 mb-2">04 / Evolution</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-maroon-900 dark:text-cream-50 transition-colors duration-300">Life Journey</h2>
          <div className="w-12 h-0.5 bg-maroon-700 dark:bg-maroon-500 mt-4"></div>
        </div>

        {/* Timeline container */}
        <div className="relative">
          
          {/* Vertical Line: Centered on desktop, left-aligned on mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cream-300 dark:bg-maroon-900 -translate-x-1/2 transition-colors duration-300"></div>

          {/* Milestones list */}
          <div className="space-y-12">
            {milestones.map((milestone, idx) => {
              const Icon = milestone.icon
              const isEven = idx % 2 === 0
              
              return (
                <div 
                  key={milestone.title}
                  className="relative flex flex-col md:flex-row items-start md:items-center w-full"
                >
                  
                  {/* Circle Indicator: Left on mobile, center on desktop */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-cream-50 dark:bg-maroon-900 border border-cream-300 dark:border-maroon-850 flex items-center justify-center text-maroon-700 dark:text-cream-200 shadow-soft-sm transition-colors duration-300">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Content Box: Takes full width on mobile, half width on desktop */}
                  <div 
                    className={`w-full md:w-1/2 pl-12 md:pl-0 pr-0 md:px-16 ${
                      isEven 
                        ? 'md:text-right md:ml-0 md:mr-auto' 
                        : 'md:text-left md:ml-auto md:mr-0'
                    }`}
                  >
                    <div className="space-y-1.5 py-2">
                      <span className="inline-block text-xs font-mono tracking-wider font-semibold text-maroon-500 dark:text-cream-400">
                        {milestone.period}
                      </span>
                      <h3 className="text-lg font-bold text-maroon-900 dark:text-cream-50 transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-xs text-cream-650 dark:text-cream-450 leading-relaxed font-light max-w-lg md:inline-block transition-colors">
                        {milestone.desc}
                      </p>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
