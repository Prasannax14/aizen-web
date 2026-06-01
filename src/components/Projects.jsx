import { ExternalLink, Folder } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Personal Timeline Website',
      desc: 'A beautiful, responsive timeline tracking development milestones, educational accomplishments, and future career objectives. Crafted with semantic markup and structured content.',
      tags: ['React', 'Tailwind CSS', 'Responsive'],
      btnText: 'View Repository',
      link: '#'
    },
    {
      title: 'Learning Dashboard',
      desc: 'An interactive study tracker helping learners monitor courses, log study hours, and manage notes. Integrates browser local storage for seamless data persistence.',
      tags: ['JavaScript', 'HTML5', 'UI Design'],
      btnText: 'Launch Dashboard',
      link: '#'
    },
    {
      title: 'Future AI Project',
      desc: 'A conceptual interface exploring integration with language model APIs to summarize lecture notes, automate outlines, and assist in creative thinking workflows.',
      tags: ['React', 'API Integration', 'Concept'],
      btnText: 'Read Design Study',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="py-24 bg-cream-50 dark:bg-maroon-900 border-y border-cream-200 dark:border-maroon-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-maroon-500 dark:text-cream-400 mb-2">03 / Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-maroon-900 dark:text-cream-50 transition-colors duration-300">Featured Projects</h2>
          <div className="w-12 h-0.5 bg-maroon-700 dark:bg-maroon-500 mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="group bg-cream-100 dark:bg-maroon-950 border border-cream-300 dark:border-maroon-900/60 rounded-2xl p-6 hover:bg-cream-50 dark:hover:bg-maroon-900/10 hover:border-maroon-700 dark:hover:border-maroon-500 hover:shadow-soft transition-all duration-305 flex flex-col justify-between h-[360px]"
            >
              <div>
                {/* Header Icon & Tags */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 bg-cream-50 dark:bg-maroon-900 rounded-xl border border-cream-300 dark:border-maroon-800 text-maroon-500 dark:text-cream-400 group-hover:text-maroon-900 dark:group-hover:text-cream-50 group-hover:border-maroon-500 dark:group-hover:border-maroon-700 transition-colors duration-300">
                    <Folder className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex gap-1.5">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] font-mono bg-cream-50 dark:bg-maroon-900 px-2 py-0.5 rounded border border-cream-300 dark:border-maroon-800 text-maroon-800 dark:text-cream-350 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="text-lg font-bold text-maroon-900 dark:text-cream-100 mb-3 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs text-cream-600 dark:text-cream-400 leading-relaxed font-light line-clamp-4 transition-colors">
                  {project.desc}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <a
                  href={project.link}
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-cream-50 dark:bg-maroon-900 border border-cream-300 dark:border-maroon-800 hover:border-maroon-700 dark:hover:border-maroon-550 text-maroon-800 dark:text-cream-200 hover:text-maroon-950 dark:hover:text-cream-50 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 group-hover:bg-cream-100 dark:group-hover:bg-maroon-950 gap-1.5"
                >
                  <span>{project.btnText}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
