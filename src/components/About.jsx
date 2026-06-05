import { Code, Brain, Palette, Cpu, MapPin, Mail, BookOpen, Target } from 'lucide-react'

export default function About() {
  const interests = [
    { name: 'Coding', icon: Code, desc: 'Translating ideas into logical, clean systems.' },
    { name: 'Psychology', icon: Brain, desc: 'Understanding human behavior and cognitive patterns.' },
    { name: 'Design', icon: Palette, desc: 'Crafting minimalist, intuitive user interfaces.' },
    { name: 'Technology', icon: Cpu, desc: 'Exploring emerging systems and future tools.' },
  ]

  return (
    <section id="about" className="relative py-24 bg-darkBg border-y border-white/5 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-neonPink/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-8 md:px-12">

        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-neonPink mb-2 font-bold">01 / Profile</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white transition-colors duration-300">About Me</h2>
          <div className="w-12 h-1 bg-neonPink mt-4 rounded-full"></div>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Story */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-neonPink" />
                <span>My Journey & Learning Mindset</span>
              </h3>
              <p className="text-[15px] text-textSec leading-relaxed font-normal">
                I am a self-driven learner who believes that building is the best way to understand. Rather than sticking to a single niche, I thrive at the intersections of logic and creativity, exploring how technology adapts to human needs.
              </p>
              <p className="text-[15px] text-textSec leading-relaxed font-normal">
                My learning philosophy is centered on relentless curiosity. I view coding not just as writing syntax, but as a medium for structured problem-solving and creative design. Every project is an opportunity to master new principles and improve user experience.
              </p>
            </div>

            {/* Interests Grid */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight">Key Interests</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interests.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.name}
                      className="glass-card glass-card-hover p-5 rounded-2xl group flex flex-col items-start"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 text-neonPink group-hover:bg-neonPink/10 group-hover:border-neonPink/20 transition-all duration-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-bold text-white text-sm">{item.name}</h4>
                      </div>
                      <p className="text-xs text-textMuted leading-relaxed pl-1">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Future Ambitions */}
            <div className="p-6 border border-dashed border-white/10 rounded-2xl bg-white/[0.01] space-y-3">
              <h3 className="text-xs font-bold text-white flex items-center gap-2 uppercase tracking-wider font-mono">
                <Target className="w-4 h-4 text-neonPink" />
                <span>Future Ambitions</span>
              </h3>
              <p className="text-xs text-textSec leading-relaxed">
                I aim to build tools that empower individuals, bridge technology and design, and leverage AI to build accessible workflows. My long-term goal is to lead product design and software development initiatives that combine deep engineering with beautiful human experiences.
              </p>
            </div>
          </div>

          {/* Right Column: Profile Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 w-full max-w-md mx-auto lg:max-w-none">
            <div className="relative group/profile">
              {/* Profile Card Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neonPink to-purple-600 rounded-2xl blur opacity-10 group-hover/profile:opacity-30 transition duration-500"></div>

              <div className="relative bg-[#0f121c]/70 border border-white/8 rounded-2xl p-6 shadow-glass space-y-6 backdrop-blur-xl">

                {/* Profile Image */}
                <div className="aspect-square w-full relative rounded-xl overflow-hidden bg-darkBg border border-white/5">
                  <img
                    src="/profile_avatar.png"
                    alt="Profile Avatar"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/profile:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neonPink/5 to-transparent pointer-events-none opacity-0 group-hover/profile:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Card details */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-black text-white tracking-tight">PRASANNA</h4>
                    <p className="text-xs font-mono text-neonPink tracking-wider mt-0.5 font-bold uppercase">Learner & Creative Coder</p>
                  </div>

                  <hr className="border-white/5" />

                  <div className="space-y-3.5 text-xs text-textSec">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-neonPink flex-shrink-0" />
                      <span>San Francisco, CA (Open to Remote)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-neonPink flex-shrink-0" />
                      <span className="font-mono text-white hover:text-neonPink transition-colors">madaraxuchihax14@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-4 h-4 text-neonPink flex-shrink-0" />
                      <span>Learning React, Node.js & UI Architecture</span>
                    </div>
                  </div>
                </div>

                {/* Quote Bubble */}
                <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl shadow-inner">
                  <p className="text-xs italic text-textSec leading-relaxed">
                    "The beautiful thing about learning is nobody can take it away from you."
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
