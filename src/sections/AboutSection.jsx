import GradientButton from '../components/ui/GradientButton'

function AboutSection() {
  return (
    <section id="about" className="stack-card mx-auto w-full max-w-6xl px-6 py-24">
      <div className="rounded-[2.5rem] border border-white/10 bg-white/5 px-8 py-14 shadow-soft backdrop-blur-sm md:px-16">
        <h2 className="font-display text-center text-5xl uppercase text-white sm:text-6xl">
          About Me
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-center text-xl leading-relaxed text-white/80">
          With over five years of experience in design, I specialize in
          branding, web design, and immersive user experiences. I collaborate
          with ambitious teams to transform ideas into polished digital stories
          that stand out.
        </p>
        <div className="mt-10 text-center">
          <GradientButton text="Contact Me" href="#contact" />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
