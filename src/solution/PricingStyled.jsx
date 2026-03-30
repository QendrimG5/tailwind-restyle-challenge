import { Check } from 'lucide-react'

const plans = [
  { name: 'Starter', price: '$0', period: '/month', description: 'Perfect for individuals and small side projects.', features: ['Up to 5 projects', '1 team member', 'Basic analytics', '1GB storage', 'Email support'], cta: 'Get Started Free', highlighted: false },
  { name: 'Pro', price: '$29', period: '/month', description: 'For growing teams that need more power and flexibility.', features: ['Unlimited projects', 'Up to 20 team members', 'Advanced analytics', '50GB storage', 'Priority support', 'Custom workflows', 'Time tracking', 'API access'], cta: 'Start Free Trial', highlighted: true },
  { name: 'Enterprise', price: '$99', period: '/month', description: 'For large organizations with advanced needs.', features: ['Everything in Pro', 'Unlimited team members', 'Custom analytics', 'Unlimited storage', '24/7 phone support', 'SSO & SAML', 'Audit logs', 'Dedicated account manager', 'Custom integrations'], cta: 'Contact Sales', highlighted: false },
]

function PricingStyled() {
  return (
    <section id="pricing" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-surface-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4 dark:bg-brand-900/30 dark:text-brand-300">Pricing</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-900 mb-4 font-heading dark:text-white">Simple, transparent pricing</h2>
          <p className="max-w-2xl mx-auto text-base lg:text-lg text-surface-600 dark:text-surface-200">No hidden fees. No surprises. Choose the plan that fits your team.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-card p-6 lg:p-8 transition-all duration-300 ${plan.highlighted ? 'bg-gradient-to-b from-brand-600 to-indigo-700 text-white shadow-2xl md:scale-105' : 'bg-white border border-surface-200 hover:shadow-card-hover dark:bg-surface-800 dark:border-surface-800'}`}>
              {plan.highlighted && <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-yellow-900 text-sm font-semibold rounded-full whitespace-nowrap">Most Popular</span>}
              <h3 className={`text-xl font-semibold mb-2 ${plan.highlighted ? 'text-white' : 'text-surface-900 dark:text-white'}`}>{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className={`text-4xl lg:text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-surface-900 dark:text-white'}`}>{plan.price}</span>
                <span className={plan.highlighted ? 'text-brand-200' : 'text-surface-500 dark:text-surface-200'}>{plan.period}</span>
              </div>
              <p className={`mb-8 text-sm lg:text-base ${plan.highlighted ? 'text-brand-200' : 'text-surface-600 dark:text-surface-200'}`}>{plan.description}</p>
              <ul className="space-y-3 mb-8 list-none p-0">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <Check size={16} className={`shrink-0 ${plan.highlighted ? 'text-brand-200' : 'text-brand-600 dark:text-brand-400'}`} />
                    <span className={`text-sm ${plan.highlighted ? 'text-brand-100' : 'text-surface-600 dark:text-surface-200'}`}>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-button font-semibold transition-colors text-sm lg:text-base ${plan.highlighted ? 'bg-white text-brand-700 hover:bg-surface-100' : 'bg-brand-600 text-white hover:bg-brand-700'}`}>{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingStyled
