/*
 * =============================================
 *  SOLUTION — Fully styled App
 *
 *  To see the solution, in main.jsx change:
 *    import App from './App.jsx'
 *  to:
 *    import App from './solution/AppStyled.jsx'
 * =============================================
 */

import NavbarStyled from './NavbarStyled'
import HeroStyled from './HeroStyled'
import FeaturesStyled from './FeaturesStyled'
import TestimonialsStyled from './TestimonialsStyled'
import PricingStyled from './PricingStyled'
import ContactStyled from './ContactStyled'
import FooterStyled from './FooterStyled'

function AppStyled() {
  return (
    <div className="min-h-screen bg-white dark:bg-surface-900 font-body antialiased">
      <NavbarStyled />
      <main>
        <HeroStyled />
        <FeaturesStyled />
        <TestimonialsStyled />
        <PricingStyled />
        <ContactStyled />
      </main>
      <FooterStyled />
    </div>
  )
}

export default AppStyled
