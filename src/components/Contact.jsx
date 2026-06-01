import { useState } from 'react'
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Perform standard client-side validation
    if (!formData.name || !formData.email || !formData.details) {
      alert('Please fill in all required fields.')
      return
    }
    // Simulate successful form submit
    setIsSubmitted(true)
    // Clear form
    setFormData({
      name: '',
      email: '',
      details: ''
    })
    // Reset submission notification after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const contactInfo = [
    { 
      label: 'Mail ID', 
      value: 'madaraxuchihax14@gmail.com', 
      href: 'mailto:madaraxuchihax14@gmail.com', 
      icon: Mail 
    },
    { 
      label: 'Personal Mobile', 
      value: '+91 9344167326', 
      href: 'tel:+919344167326', 
      icon: Phone 
    },
    { 
      label: 'GitHub ID', 
      value: 'github.com/Prasannax14', 
      href: 'https://github.com/Prasannax14', 
      icon: Github 
    },
  ]

  return (
    <section id="contact" className="py-24 bg-cream-50 dark:bg-maroon-900 border-t border-cream-200 dark:border-maroon-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-maroon-500 dark:text-cream-400 mb-2">05 / Contact</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-maroon-900 dark:text-cream-50 transition-colors duration-300">Get In Touch</h2>
          <div className="w-12 h-0.5 bg-maroon-700 dark:bg-maroon-500 mt-4"></div>
        </div>

        {/* Form and Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact List */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-maroon-900 dark:text-cream-100">Connection Points</h3>
              <p className="text-sm text-maroon-900/70 dark:text-cream-400 leading-relaxed font-light">
                Feel free to reach out via the form, directly by phone, or explore my code repositories. Let's build something creative.
              </p>
            </div>

            {/* List details */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.label === 'GitHub ID' ? '_blank' : undefined}
                    rel={info.label === 'GitHub ID' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 border border-cream-300 dark:border-maroon-900/60 rounded-xl bg-cream-100 dark:bg-maroon-950 hover:bg-cream-50 dark:hover:bg-maroon-900/10 hover:border-maroon-700 dark:hover:border-maroon-500 transition-all duration-200 shadow-soft-sm group"
                  >
                    <div className="p-2.5 bg-cream-50 dark:bg-maroon-900 rounded-lg border border-cream-300 dark:border-maroon-800 text-maroon-500 dark:text-cream-450 group-hover:text-maroon-900 dark:group-hover:text-cream-50 transition-colors">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-cream-700 dark:text-cream-500 font-semibold">{info.label}</p>
                      <p className="text-sm font-semibold text-maroon-800 dark:text-cream-100 group-hover:text-maroon-950 dark:group-hover:text-cream-50">{info.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Resume / Linkedin Extra footer */}
            <div className="p-5 border border-dashed border-cream-300 dark:border-maroon-900 rounded-xl flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-maroon-850 dark:text-cream-200 uppercase tracking-wider font-mono">Professional Network</h4>
                <p className="text-[11px] text-cream-600 dark:text-cream-500 mt-1">Access resume or view full LinkedIn profile.</p>
              </div>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-maroon-700 dark:bg-cream-100 text-white dark:text-maroon-950 rounded-lg hover:bg-maroon-800 dark:hover:bg-cream-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Submission Form */}
          <div className="lg:col-span-7">
            <div className="bg-cream-100 dark:bg-maroon-950 border border-cream-300 dark:border-maroon-900/80 rounded-2xl p-6 md:p-8 shadow-soft transition-colors duration-300">
              
              <h3 className="text-lg font-bold text-maroon-900 dark:text-cream-100 mb-6">Send a Message</h3>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-maroon-700 dark:bg-cream-100 text-white dark:text-maroon-950 rounded-xl flex items-center gap-3 animate-fade-in shadow-soft">
                  <CheckCircle2 className="w-5 h-5 text-maroon-300 dark:text-maroon-600 flex-shrink-0" />
                  <div className="text-xs font-medium">
                    Thank you! Your inquiry has been successfully received. We will respond shortly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono font-semibold text-maroon-800 dark:text-cream-350 uppercase tracking-wider">
                    Full Name <span className="text-maroon-500 dark:text-maroon-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-cream-50 dark:bg-maroon-900 border border-cream-300 dark:border-maroon-800 rounded-lg px-4 py-3 text-xs focus:border-maroon-700 dark:focus:border-maroon-500 focus:outline-none dark:text-white transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono font-semibold text-maroon-800 dark:text-cream-350 uppercase tracking-wider">
                    Email Address <span className="text-maroon-500 dark:text-maroon-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-cream-50 dark:bg-maroon-900 border border-cream-300 dark:border-maroon-800 rounded-lg px-4 py-3 text-xs focus:border-maroon-700 dark:focus:border-maroon-500 focus:outline-none dark:text-white transition-colors"
                  />
                </div>

                {/* Details / Description */}
                <div className="space-y-1.5">
                  <label htmlFor="details" className="text-xs font-mono font-semibold text-maroon-800 dark:text-cream-350 uppercase tracking-wider">
                    Message Details <span className="text-maroon-500 dark:text-maroon-400">*</span>
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    rows="4"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Provide details about your project, idea, or questions..."
                    className="w-full bg-cream-50 dark:bg-maroon-900 border border-cream-300 dark:border-maroon-800 rounded-lg px-4 py-3 text-xs focus:border-maroon-700 dark:focus:border-maroon-500 focus:outline-none dark:text-white transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-maroon-700 dark:bg-cream-100 text-white dark:text-maroon-950 hover:bg-maroon-800 dark:hover:bg-cream-200 px-6 py-3 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 shadow-soft-sm gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-cream-200 dark:text-maroon-500" />
                  <span>Send Message</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
