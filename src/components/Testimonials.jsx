import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP of Engineering',
    company: 'TechCorp',
    avatar: 'https://i.pravatar.cc/80?img=5',
    content:
      'FlowBoard transformed how our team works. We reduced project delivery time by 40% in just three months. The automation features alone saved us 20 hours per week.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Product Manager',
    company: 'StartupXYZ',
    avatar: 'https://i.pravatar.cc/80?img=8',
    content:
      "The best project management tool we've ever used. The interface is intuitive, the integrations are solid, and the support team is incredibly responsive.",
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'CTO',
    company: 'DesignHub',
    avatar: 'https://i.pravatar.cc/80?img=9',
    content:
      "We switched from three different tools to FlowBoard and haven't looked back. It handles everything — tasks, docs, time tracking, and reporting — beautifully.",
    rating: 5,
  },
]

function Testimonials() {
  return (
    <section id="testimonials">
      <div>
        <div>
          <span>Testimonials</span>
          <h2>Loved by teams everywhere</h2>
          <p>
            See what our customers have to say about how FlowBoard has
            transformed their workflow.
          </p>
        </div>

        <div>
          {testimonials.map((testimonial) => (
            <div key={testimonial.name}>
              <Quote size={32} />
              <p>{testimonial.content}</p>
              <div>
                <div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div>
                  <p>{testimonial.name}</p>
                  <p>
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
