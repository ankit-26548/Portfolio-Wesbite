import { ArrowUpRight, ExternalLink } from 'lucide-react'
import LaserFrame from './LaserFrame'

const borderClasses = [
  'border-b border-black md:border-r',
  'border-b border-black',
  'border-b border-black md:border-b-0 md:border-r',
  '',
]

function ProjectGrid({ projects }) {
  return (
    <div className="grid w-full grid-cols-1 border border-black bg-ochi-cream md:grid-cols-2">
      {projects.map((project, index) => (
        <a
          key={project.id}
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className={`group relative flex min-h-[320px] cursor-pointer flex-col justify-between overflow-hidden p-8 transition-all duration-500 ease-out md:min-h-[380px] md:p-10 ${borderClasses[index] ?? ''}`}
        >
          <div className="pointer-events-none absolute inset-0 z-0 bg-ochi-cream transition-opacity duration-500 group-hover:opacity-20" />

          <div className="pointer-events-none absolute inset-4 z-20 translate-y-6 scale-95 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 md:inset-6">
            <div className="relative h-full overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
              <div className="flex items-center gap-2 border-b border-black/10 bg-[#ececea] px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                <span className="ml-2 truncate font-mono text-[10px] uppercase tracking-wider text-black/50">
                  {project.link.replace(/^https?:\/\//, '')}
                </span>
              </div>
              <img
                src={project.previewImage || project.image}
                alt={`${project.title} project preview`}
                className="h-[180px] w-full object-cover object-top md:h-[220px]"
              />
              <LaserFrame />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 z-10 border-2 border-transparent transition-colors duration-300 group-hover:border-crimson-laser/40" />
          <LaserFrame />

          <div className="relative z-10 mb-12 flex items-center justify-between transition-opacity duration-300 group-hover:opacity-30 md:mb-16">
            <span className="font-mono text-sm tracking-widest text-black/70 transition-colors duration-300 group-hover:text-crimson-laser">
              {project.id}
            </span>
            <span className="rounded-full bg-black p-2 text-white opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-crimson-laser group-hover:opacity-100">
              <ArrowUpRight size={18} />
            </span>
          </div>

          <div className="relative z-10 space-y-5 transition-all duration-300 group-hover:translate-y-1 group-hover:opacity-30 md:space-y-6">
            <h3 className="font-mono text-2xl font-normal tracking-tight text-black transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
              {project.title}
            </h3>

            <p className="max-w-md font-mono text-sm leading-relaxed text-black/70">
              {project.description}
            </p>

            <div className="flex items-center gap-2 pt-2 font-mono text-xs font-bold uppercase tracking-wider text-crimson-laser opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span>View Project UI</span>
              <ExternalLink size={14} />
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default ProjectGrid
