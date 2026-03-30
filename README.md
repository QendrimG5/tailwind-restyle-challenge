# Tailwind v4 Restyle Challenge

## The Challenge

You have a **fully functional but completely unstyled** React app. Your task is to restyle it end-to-end using **Tailwind CSS v4** utility classes.

Every component has `TODO` comments telling you exactly which classes to apply and where.

## Quick Start

```bash
npm install
npm run dev
```

## Reference Images (Target Design)

Open these in your browser to see what the final styled version should look like:

- **Desktop (1440px):** [http://localhost:5173/reference-desktop.html](http://localhost:5173/reference-desktop.html)
- **Mobile (390px):** [http://localhost:5173/reference-mobile.html](http://localhost:5173/reference-mobile.html)

## Solution

To see the fully styled solution, edit `src/main.jsx`:

```diff
- import App from './App.jsx'
+ import App from './solution/AppStyled.jsx'
```

## What You'll Practice

| Topic | Where |
|---|---|
| **Tailwind v4 theme config** (replaces tailwind.config.js) | `src/index.css` — `@theme { }` block |
| **CSS custom properties as design tokens** | `--color-brand-*`, `--color-surface-*` in @theme |
| **@apply for reusable classes** | `src/index.css` — `@layer components { }` |
| **Dark mode (class strategy)** | `@variant dark` + `dark:` prefix on every component |
| **Mobile-first responsive design** | Default = mobile, then `sm:`, `md:`, `lg:` breakpoints |
| **Fixed navbar + glassmorphism** | `Navbar.jsx` |
| **Gradient text + backgrounds** | `Hero.jsx` |
| **Responsive grid layouts** | `Features.jsx`, `Testimonials.jsx`, `Pricing.jsx` |
| **Card component pattern** | `Features.jsx`, `Testimonials.jsx` |
| **Group hover effects** | `Features.jsx` — `group` + `group-hover:` |
| **Conditional styling (ternary)** | `Pricing.jsx` — highlighted vs normal cards |
| **Form styling + focus states** | `Contact.jsx` |
| **Multi-column footer layout** | `Footer.jsx` |

## Tailwind v4 Key Differences (vs v3)

1. **No `tailwind.config.js`** — all config lives in CSS via `@theme { }`
2. **No PostCSS config needed** — uses Vite plugin directly
3. **`@import "tailwindcss"`** — single import replaces `@tailwind` directives
4. **`@theme { }`** — defines tokens as CSS custom properties
5. **`@variant dark`** — configures dark mode strategy in CSS
6. **Design tokens = CSS vars** — `--color-brand-500` becomes `bg-brand-500`

## Project Structure

```
src/
├── index.css              <- Tailwind v4 config (@theme, @variant, @layer)
├── App.jsx                <- Root (unstyled)
├── components/
│   ├── Navbar.jsx         <- Fixed nav, mobile menu, glassmorphism
│   ├── Hero.jsx           <- Gradients, avatar stack, mock dashboard
│   ├── Features.jsx       <- Grid, cards, group hover
│   ├── Testimonials.jsx   <- Cards, avatars, ratings
│   ├── Pricing.jsx        <- Conditional styles, highlighted card
│   ├── Contact.jsx        <- Form layout, inputs, focus states
│   └── Footer.jsx         <- Multi-column grid, links
└── solution/              <- Fully styled reference (don't peek!)
    ├── AppStyled.jsx
    ├── NavbarStyled.jsx
    ├── HeroStyled.jsx
    ├── FeaturesStyled.jsx
    ├── TestimonialsStyled.jsx
    ├── PricingStyled.jsx
    ├── ContactStyled.jsx
    └── FooterStyled.jsx
```

## Rules

1. **Only use Tailwind utility classes** — do not write custom CSS (except @apply in index.css)
2. **Mobile-first** — style for mobile first, then add `sm:`, `md:`, `lg:` for larger screens
3. **Follow the TODOs** — each comment tells you exactly what to apply
4. **Test dark mode** — add `class="dark"` to `<html>` in `index.html`
5. **Compare with reference images** — your result should match
