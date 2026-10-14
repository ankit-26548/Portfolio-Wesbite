function GradientButton({ text, href = '#', className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full border border-white/30 bg-gradient-to-r from-neon-blue to-neon-pink px-6 py-2 text-sm font-semibold uppercase tracking-wider text-white shadow-neon transition hover:scale-105 ${className}`}
    >
      {text}
    </a>
  )
}

export default GradientButton
