import { useEffect, useState } from 'react'
import architecturalDrawing from '../assets/Firefly (1).png'
import BrandLogo from '../components/ui/BrandLogo'
import InteractiveEyes from '../components/ui/InteractiveEyes'

const Arrow = ({ direction }) => <svg aria-hidden="true" viewBox="0 0 24 24"><path d={direction === 'left' ? 'M14.8 4.8 7.6 12l7.2 7.2' : 'm9.2 4.8 7.2 7.2-7.2 7.2'} /></svg>

function HeroSection({ onNavigate }) {
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    let frame
    const updateHeroState = () => {
      frame = undefined
      // The transition begins early in the hero, then reverses when returning upward.
      setCollapsed(window.scrollY > Math.min(window.innerHeight * 0.13, 150))
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateHeroState)
    }
    updateHeroState()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])
  return (
    <section id="top" className={`architecture-hero hero-stage ${collapsed ? 'is-collapsed' : ''}`} aria-label="Ankit Pundhir portfolio">
      <header className="hero-header">
        <a className="brand" href="/" onClick={(event) => { event.preventDefault(); onNavigate('/') }} aria-label="Ankit Pundhir home"><span className="brand-full"><BrandLogo />ANKIT PUNDHIR <small>FULL STACK DEVELOPER</small></span><span className="brand-mark">AP</span></a>
        <div className="header-actions"><button className="work-link" onClick={() => onNavigate('/work')}>Selected work</button><a className="contact-link" href="#contact">Contact <b>↗</b></a></div>
      </header>
      <div className="content-panel"><div className="event-row"><InteractiveEyes /><div><p>Available for global teams</p><span>Product · Web · Platforms</span></div></div><div className="copy-block"><h1>Full Stack<br />Developer for<br />Digital Products</h1><p>I design and build thoughtful web experiences,<br />from polished interfaces to scalable systems<br />that support ambitious businesses.</p></div><nav className="hero-pagination" aria-label="Featured work controls"><button aria-label="Previous slide"><Arrow direction="left" /></button><button aria-label="Next slide"><Arrow direction="right" /></button></nav></div>
      <div className="art-panel"><img src={architecturalDrawing} alt="Monochrome illustration of a contemporary building" /></div>
      <button className="magic-badge" onClick={() => setCollapsed((value) => !value)} aria-label={collapsed ? 'Show project details' : 'Focus on architectural image'} aria-pressed={collapsed}><span>✦</span><span>✦</span><span>✦</span><em>╲</em></button><span className="corner-diamond" aria-hidden="true" />
    </section>
  )
}
export default HeroSection
