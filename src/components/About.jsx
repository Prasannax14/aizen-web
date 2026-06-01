import { Code, Brain, Palette, Cpu, MapPin, Mail, BookOpen, Target } from 'lucide-react'

export default function About() {
  const interests = [
    { name: 'Coding', icon: Code, desc: 'Translating ideas into logical, clean systems.' },
    { name: 'Psychology', icon: Brain, desc: 'Understanding human behavior and cognitive patterns.' },
    { name: 'Design', icon: Palette, desc: 'Crafting minimalist, intuitive user interfaces.' },
    { name: 'Technology', icon: Cpu, desc: 'Exploring emerging systems and future tools.' },
  ]

  return (
    <section id="about" className="py-24 bg-cream-50 dark:bg-maroon-900 border-y border-cream-200 dark:border-maroon-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-maroon-500 dark:text-cream-400 mb-2">01 / Profile</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-maroon-900 dark:text-cream-50 transition-colors duration-300">About Me</h2>
          <div className="w-12 h-0.5 bg-maroon-700 dark:bg-maroon-500 mt-4"></div>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Story & Interests */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-maroon-900/90 dark:text-cream-100 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-maroon-500 dark:text-cream-450" />
                <span>My Journey & Learning Mindset</span>
              </h3>
              <p className="text-maroon-900/70 dark:text-cream-300 leading-relaxed font-light transition-colors duration-300">
                I am a self-driven learner who believes that building is the best way to understand. Rather than sticking to a single niche, I thrive at the intersections of logic and creativity, exploring how technology adapts to human needs.
              </p>
              <p className="text-maroon-900/70 dark:text-cream-300 leading-relaxed font-light transition-colors duration-300">
                My learning philosophy is centered on relentless curiosity. I view coding not just as writing syntax, but as a medium for structured problem-solving and creative design. Every project is an opportunity to master new principles and improve user experience.
              </p>
            </div>

            {/* Interests Grid */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-maroon-900/90 dark:text-cream-100">Key Interests</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interests.map((item) => {
                  const Icon = item.icon
                  return (
                    <div 
                      key={item.name} 
                      className="p-5 border border-cream-300 dark:border-maroon-900/50 rounded-xl bg-cream-100 dark:bg-maroon-950 hover:border-maroon-500 dark:hover:border-maroon-700 transition-all duration-205 shadow-soft-sm group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-cream-50 dark:bg-maroon-900 rounded-lg border border-cream-300 dark:border-maroon-800 text-maroon-800 dark:text-cream-300 group-hover:text-maroon-950 dark:group-hover:text-cream-50 transition-colors duration-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-semibold text-maroon-800 dark:text-cream-100">{item.name}</h4>
                      </div>
                      <p className="text-xs text-cream-600 dark:text-cream-400 leading-relaxed">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Future Ambitions */}
            <div className="p-6 border border-dashed border-cream-300 dark:border-maroon-900/80 rounded-xl bg-cream-100/50 dark:bg-maroon-950/10 space-y-3">
              <h3 className="text-sm font-bold text-maroon-800 dark:text-cream-300 flex items-center gap-2 uppercase tracking-wider font-mono">
                <Target className="w-4 h-4 text-maroon-500 dark:text-cream-450" />
                <span>Future Ambitions</span>
              </h3>
              <p className="text-sm text-maroon-900/70 dark:text-cream-300 leading-relaxed font-light">
                I aim to build tools that empower individuals, bridge technology and design, and leverage AI to build accessible workflows. My long-term goal is to lead product design and software development initiatives that combine deep engineering with beautiful human experiences.
              </p>
            </div>
          </div>

          {/* Right Column: Minimal Profile Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 w-full max-w-md mx-auto lg:max-w-none">
            <div className="bg-cream-100 dark:bg-maroon-950 border border-cream-300 dark:border-maroon-900/80 rounded-2xl p-6 shadow-soft space-y-6 transition-colors duration-300">
              
              {/* Profile Image Frame */}
              <div className="aspect-square w-full relative rounded-xl overflow-hidden bg-cream-50 dark:bg-maroon-900 border border-cream-300/40 dark:border-maroon-900/40">
                <img 
                  src="/profile_avatar.png" 
                  alt="Profile Avatar" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Card Meta details */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-maroon-900 dark:text-cream-50">PRASANNA</h4>
                  <p className="text-xs font-mono text-cream-600 dark:text-cream-450 mt-0.5">Learner & Creative Coder</p>
                </div>

                <hr className="border-cream-300/50 dark:border-maroon-900/50" />

                <div className="space-y-2.5 text-sm text-maroon-900/80 dark:text-cream-200">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-maroon-500 dark:text-cream-400 flex-shrink-0" />
                    <span>San Francisco, CA (Open to Remote)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-maroon-500 dark:text-cream-400 flex-shrink-0" />
                    <span className="font-mono text-xs">madaraxuchihax14@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4 text-maroon-500 dark:text-cream-400 flex-shrink-0" />
                    <span>Learning React, Node.js & UI Architecture</span>
                  </div>
                </div>
              </div>

              {/* Brief Quote */}
              <div className="bg-cream-50 dark:bg-maroon-900 p-4 rounded-xl border border-cream-300 dark:border-maroon-800 shadow-soft-sm transition-colors duration-300">
                <p className="text-xs italic text-cream-600 dark:text-cream-400 leading-relaxed">
                  "The beautiful thing about learning is nobody can take it away from you."
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
