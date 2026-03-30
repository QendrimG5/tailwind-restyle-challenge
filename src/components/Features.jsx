import {
  BarChart3,
  Users,
  Zap,
  Shield,
  Globe,
  Clock,
} from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description:
      'Get real-time insights into your project performance with customizable dashboards and detailed reports.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Work together seamlessly with real-time updates, comments, file sharing, and built-in video calls.',
  },
  {
    icon: Zap,
    title: 'Automation',
    description:
      'Automate repetitive tasks with powerful workflow rules. Set triggers, conditions, and actions with no code.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Bank-grade encryption, SSO, 2FA, and granular permissions keep your data safe and compliant.',
  },
  {
    icon: Globe,
    title: 'Global Access',
    description:
      'Access your projects from anywhere. Our CDN ensures fast loading times across 40+ regions worldwide.',
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    description:
      'Built-in time tracking with automatic timers, timesheets, and billable hours reporting.',
  },
]

function Features() {
  return (
    <section id="features">
      <div>
        <div>
          <span>Features</span>
          <h2>Everything you need to ship faster</h2>
          <p>
            Powerful features designed to help your team collaborate, track
            progress, and deliver projects on time.
          </p>
        </div>

        <div>
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title}>
                <div>
                  <Icon size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
