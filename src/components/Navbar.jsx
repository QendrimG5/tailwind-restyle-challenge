import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
      <div>
        <div>
          <div>
            <Zap size={18} />
          </div>
          <span>FlowBoard</span>
        </div>

        <div>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <button>Log In</button>
          <button>Get Started</button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <div>
            <button>Log In</button>
            <button>Get Started</button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
