import { BarChart3, Users, Zap, Shield, Globe, Clock } from 'lucide-react'

const features = [
  { icon: BarChart3, title: 'Advanced Analytics', description: 'Get real-time insights into your project performance with customizable dashboards and detailed reports.' },
  { icon: Users, title: 'Team Collaboration', description: 'Work together seamlessly with real-time updates, comments, file sharing, and built-in video calls.' },
  { icon: Zap, title: 'Automation', description: 'Automate repetitive tasks with powerful workflow rules. Set triggers, conditions, and actions with no code.' },
  { icon: Shield, title: 'Enterprise Security', description: 'Bank-grade encryption, SSO, 2FA, and granular permissions keep your data safe and compliant.' },
  { icon: Globe, title: 'Global Access', description: 'Access your projects from anywhere. Our CDN ensures fast loading times across 40+ regions worldwide.' },
  { icon: Clock, title: 'Time Tracking', description: 'Built-in time tracking with automatic timers, timesheets, and billable hours reporting.' },
]

function FeaturesStyled() {
  return (
    <section id="features" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-surface-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4 dark:bg-brand-900/30 dark:text-brand-300">Features</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-900 mb-4 font-heading dark:text-white">Everything you need to ship faster</h2>
          <p className="max-w-2xl mx-auto text-base lg:text-lg text-surface-600 dark:text-surface-200">Powerful features designed to help your team collaborate, track progress, and deliver projects on time.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="group p-6 lg:p-8 rounded-card border border-surface-200 bg-white hover:border-brand-200 hover:shadow-card-hover transition-all duration-300 dark:bg-surface-800 dark:border-surface-800 dark:hover:border-brand-800">
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 dark:bg-brand-900/30 dark:text-brand-400">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-surface-900 mb-3 dark:text-white">{feature.title}</h3>
                <p className="text-surface-600 leading-relaxed text-sm lg:text-base dark:text-surface-200">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesStyled
