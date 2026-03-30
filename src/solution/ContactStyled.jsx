import { Mail, MapPin, Phone } from 'lucide-react'

function ContactStyled() {
  const inputClasses = "w-full px-4 py-3 rounded-button border border-surface-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-surface-900 placeholder-surface-200 dark:bg-surface-900 dark:border-surface-800 dark:text-white dark:placeholder-surface-200"

  return (
    <section id="contact" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-surface-50 dark:bg-surface-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4 dark:bg-brand-900/30 dark:text-brand-300">Contact</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-900 mb-4 font-heading dark:text-white">Get in touch</h2>
          <p className="max-w-2xl mx-auto text-base lg:text-lg text-surface-600 dark:text-surface-200">Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {[
              { icon: Mail, title: 'Email', text: 'hello@flowboard.io' },
              { icon: Phone, title: 'Phone', text: '+1 (555) 123-4567' },
              { icon: MapPin, title: 'Office', text: '123 Innovation Drive, San Francisco, CA 94107' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 dark:bg-brand-900/30 dark:text-brand-400">
                  <item.icon size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-surface-900 mb-1 dark:text-white">{item.title}</h4>
                  <p className="text-surface-600 dark:text-surface-200">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-3 bg-white rounded-card p-6 lg:p-8 shadow-card border border-surface-200 dark:bg-surface-800 dark:border-surface-800">
            <div className="space-y-5 lg:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-surface-700 mb-2 dark:text-surface-200">First Name</label>
                  <input id="firstName" type="text" placeholder="John" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-surface-700 mb-2 dark:text-surface-200">Last Name</label>
                  <input id="lastName" type="text" placeholder="Doe" className={inputClasses} />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-surface-700 mb-2 dark:text-surface-200">Email</label>
                <input id="email" type="email" placeholder="john@example.com" className={inputClasses} />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-surface-700 mb-2 dark:text-surface-200">Subject</label>
                <select id="subject" className={inputClasses}>
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="enterprise">Enterprise Sales</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-surface-700 mb-2 dark:text-surface-200">Message</label>
                <textarea id="message" rows={5} placeholder="Tell us how we can help..." className={`${inputClasses} resize-none`}></textarea>
              </div>
              <button type="submit" className="w-full py-3.5 px-6 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-button transition-colors shadow-sm">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactStyled
