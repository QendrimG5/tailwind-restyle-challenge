import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for individuals and small side projects.',
    features: [
      'Up to 5 projects',
      '1 team member',
      'Basic analytics',
      '1GB storage',
      'Email support',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing teams that need more power and flexibility.',
    features: [
      'Unlimited projects',
      'Up to 20 team members',
      'Advanced analytics',
      '50GB storage',
      'Priority support',
      'Custom workflows',
      'Time tracking',
      'API access',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'For large organizations with advanced needs.',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'Custom analytics',
      'Unlimited storage',
      '24/7 phone support',
      'SSO & SAML',
      'Audit logs',
      'Dedicated account manager',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

function Pricing() {
  return (
    <section id="pricing">
      <div>
        <div>
          <span>Pricing</span>
          <h2>Simple, transparent pricing</h2>
          <p>
            No hidden fees. No surprises. Choose the plan that fits your team.
          </p>
        </div>

        <div>
          {plans.map((plan) => (
            <div key={plan.name}>
              {plan.highlighted && <span>Most Popular</span>}
              <h3>{plan.name}</h3>
              <div>
                <span>{plan.price}</span>
                <span>{plan.period}</span>
              </div>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button>{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
