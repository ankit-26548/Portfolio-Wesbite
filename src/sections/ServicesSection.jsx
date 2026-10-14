import { services } from '../data/siteData'

function ServicesSection() {
  return (
    <section id="services" className="stack-card mx-auto w-full max-w-6xl px-6 py-24">
      <div className="rounded-[2.5rem] bg-white px-6 py-12 text-neon-slate shadow-soft md:px-12">
        <h2 className="font-display text-center text-5xl uppercase sm:text-6xl">
          Services
        </h2>
        <div className="mt-12 space-y-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="grid gap-4 border-b border-slate-200 pb-6 last:border-b-0 md:grid-cols-[80px_1fr]"
            >
              <p className="font-display text-4xl leading-none text-slate-900/85">
                {service.id}
              </p>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-3xl text-slate-600">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
