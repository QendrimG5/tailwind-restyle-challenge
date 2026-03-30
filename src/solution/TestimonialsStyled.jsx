import { Quote } from 'lucide-react'

const testimonials = [
  { name: 'Sarah Chen', role: 'VP of Engineering', company: 'TechCorp', avatar: 'https://i.pravatar.cc/80?img=5', content: 'FlowBoard transformed how our team works. We reduced project delivery time by 40% in just three months. The automation features alone saved us 20 hours per week.', rating: 5 },
  { name: 'Marcus Johnson', role: 'Product Manager', company: 'StartupXYZ', avatar: 'https://i.pravatar.cc/80?img=8', content: "The best project management tool we've ever used. The interface is intuitive, the integrations are solid, and the support team is incredibly responsive.", rating: 5 },
  { name: 'Elena Rodriguez', role: 'CTO', company: 'DesignHub', avatar: 'https://i.pravatar.cc/80?img=9', content: "We switched from three different tools to FlowBoard and haven't looked back. It handles everything — tasks, docs, time tracking, and reporting — beautifully.", rating: 5 },
]

function TestimonialsStyled() {
  return (
    <section id="testimonials" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-surface-50 dark:bg-surface-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4 dark:bg-brand-900/30 dark:text-brand-300">Testimonials</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-900 mb-4 font-heading dark:text-white">Loved by teams everywhere</h2>
          <p className="max-w-2xl mx-auto text-base lg:text-lg text-surface-600 dark:text-surface-200">See what our customers have to say about how FlowBoard has transformed their workflow.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-card p-6 lg:p-8 shadow-card border border-surface-200 hover:shadow-card-hover transition-shadow duration-300 flex flex-col dark:bg-surface-800 dark:border-surface-800">
              <Quote size={32} className="text-brand-300 mb-4" />
              <p className="text-surface-600 leading-relaxed flex-1 mb-6 text-sm lg:text-base dark:text-surface-200">{t.content}</p>
              <div className="mb-4">
                <div className="flex text-yellow-400 text-sm gap-0.5">
                  {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
                </div>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-surface-100 dark:border-surface-800">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-surface-900 dark:text-white">{t.name}</p>
                  <p className="text-sm text-surface-500 dark:text-surface-200">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsStyled
