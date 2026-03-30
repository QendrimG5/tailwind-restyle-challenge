import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

function NavbarStyled() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-surface-200 dark:bg-surface-900/80 dark:border-surface-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
            <Zap size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold text-surface-900 dark:text-white">FlowBoard</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-surface-600 hover:text-surface-900 transition-colors dark:text-surface-200 dark:hover:text-white">Features</a>
          <a href="#testimonials" className="text-sm font-medium text-surface-600 hover:text-surface-900 transition-colors dark:text-surface-200 dark:hover:text-white">Testimonials</a>
          <a href="#pricing" className="text-sm font-medium text-surface-600 hover:text-surface-900 transition-colors dark:text-surface-200 dark:hover:text-white">Pricing</a>
          <a href="#contact" className="text-sm font-medium text-surface-600 hover:text-surface-900 transition-colors dark:text-surface-200 dark:hover:text-white">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-surface-700 hover:text-surface-900 transition-colors dark:text-surface-200 dark:hover:text-white">Log In</button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 rounded-button transition-colors shadow-sm">Get Started</button>
        </div>

        <button className="md:hidden p-2 rounded-lg text-surface-600 hover:bg-surface-100 transition-colors dark:text-surface-200" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-surface-200 px-4 py-4 flex flex-col gap-2 dark:bg-surface-900 dark:border-surface-800">
          <a href="#features" className="block px-3 py-2 rounded-lg text-surface-600 hover:bg-surface-50 transition-colors dark:text-surface-200 dark:hover:bg-surface-800">Features</a>
          <a href="#testimonials" className="block px-3 py-2 rounded-lg text-surface-600 hover:bg-surface-50 transition-colors dark:text-surface-200 dark:hover:bg-surface-800">Testimonials</a>
          <a href="#pricing" className="block px-3 py-2 rounded-lg text-surface-600 hover:bg-surface-50 transition-colors dark:text-surface-200 dark:hover:bg-surface-800">Pricing</a>
          <a href="#contact" className="block px-3 py-2 rounded-lg text-surface-600 hover:bg-surface-50 transition-colors dark:text-surface-200 dark:hover:bg-surface-800">Contact</a>
          <div className="mt-2 border-t border-surface-200 pt-4 flex flex-col gap-2 dark:border-surface-800">
            <button className="px-4 py-2 text-sm font-medium text-surface-700 border border-surface-300 rounded-button hover:bg-surface-50 transition-colors dark:text-surface-200 dark:border-surface-800">Log In</button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 rounded-button transition-colors">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavbarStyled
