import { Zap } from 'lucide-react'

const linkGroups = [
  { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'] },
  { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press', 'Partners'] },
  { title: 'Resources', links: ['Documentation', 'Help Center', 'API Reference', 'Community', 'Status'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'] },
]

function FooterStyled() {
  return (
    <footer className="bg-surface-900 text-surface-200 pt-16 lg:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <Zap size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">FlowBoard</span>
            </div>
            <p className="text-surface-200 text-sm leading-relaxed max-w-xs">The modern project management platform that helps teams deliver their best work, faster.</p>
          </div>
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{group.title}</h4>
              <ul className="space-y-3 list-none p-0">
                {group.links.map((link) => (
                  <li key={link}><a href="#" className="text-surface-200 hover:text-white transition-colors text-sm">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-surface-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-surface-200">&copy; 2026 FlowBoard. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Twitter', 'GitHub', 'LinkedIn', 'YouTube'].map((s) => (
              <a key={s} href="#" className="text-surface-200 hover:text-white transition-colors text-sm">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterStyled
