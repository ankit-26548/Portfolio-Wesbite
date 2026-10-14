import BrandLogo from '../components/ui/BrandLogo'
import ProjectGrid from '../components/projects/ProjectGrid'
import ExperienceSection from './ExperienceSection'
import ContactForm from './ContactForm'
import { projects } from '../data/siteData'

function StudioPage({ onNavigate }) {
  return (
    <section id="work" className="studio-page">
      <header className="studio-nav">
        <button className="studio-wordmark" onClick={() => onNavigate('/')}>
          <BrandLogo />
          ANKIT PUNDHIR <small>FULL STACK DEVELOPER</small>
        </button>
        <button className="back-link" onClick={() => onNavigate('/')}>
          ← Back to home
        </button>
      </header>

      <section className="studio-intro">
        <p className="eyebrow">Independent developer · Available worldwide</p>
        <h1>Digital products with a clear point of view.</h1>
        <p className="intro-copy">
          I partner with ambitious teams and founders to design, build, and ship
          fast, reliable web products that people enjoy using.
        </p>
      </section>

      <ExperienceSection />

      <section className="studio-projects" aria-label="Development capabilities">
        <ProjectGrid projects={projects} />
      </section>

      <ContactForm />

      <footer>
        © {new Date().getFullYear()} Ankit Pundhir{' '}
        <span>Full Stack Developer · Available worldwide</span>
      </footer>
    </section>
  )
}

export default StudioPage
