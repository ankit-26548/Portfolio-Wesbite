import GradientButton from '../components/ui/GradientButton'

function ContactSection() {
  return (
    <section id="contact" className="stack-card mx-auto w-full max-w-6xl px-6 pb-28 pt-24">
      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-neon-slate to-neon-ink p-8 md:p-12">
        <h2 className="font-display text-4xl uppercase text-white sm:text-5xl">
          Let&apos;s Create Something Amazing
        </h2>
        <p className="mt-4 max-w-2xl text-white/75">
          Need a standout portfolio, 3D-rich landing page, or art-direction for
          your product visuals? Let&apos;s build your next unforgettable digital
          experience.
        </p>
        <div className="mt-8">
          <GradientButton text="Book A Call" href="mailto:rajputankit26548@gmail.com" />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
