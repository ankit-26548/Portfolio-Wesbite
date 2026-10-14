import { navLinks } from '../../data/siteData'
import GradientButton from '../ui/GradientButton'

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-neon-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl tracking-wide text-white">
          ALEX
        </a>
        <ul className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-white/70 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className="transition hover:text-white" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <GradientButton text="Contact Me" href="#contact" />
      </nav>
    </header>
  )
}

export default Navbar
