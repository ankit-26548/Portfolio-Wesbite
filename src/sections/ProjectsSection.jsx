import { projects } from '../data/siteData'
import ProjectGrid from '../components/projects/ProjectGrid'

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="stack-card mx-auto w-full max-w-6xl px-6 py-16 md:py-24"
    >
      <div className="overflow-hidden rounded-[2rem] bg-ochi-cream p-6 shadow-soft md:p-10">
        <div className="mb-8 flex items-end justify-between border-b border-black/10 pb-6">
          <h2 className="font-mono text-4xl uppercase tracking-tight text-black sm:text-5xl">
            Projects
          </h2>
          <a
            href="https://ochi-ankit.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="hidden font-mono text-xs uppercase tracking-[0.2em] text-black/60 transition hover:text-crimson-laser md:inline-block"
          >
            View Live Reference
          </a>
        </div>

        <ProjectGrid projects={projects} />
      </div>
    </section>
  )
}

export default ProjectsSection
