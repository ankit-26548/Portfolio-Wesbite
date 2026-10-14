function FloatingShape({ className = '' }) {
  return (
    <div
      className={`absolute rounded-full bg-gradient-to-br from-neon-violet/70 to-neon-pink/70 blur-[1px] animate-antiGravity ${className}`}
    />
  )
}

export default FloatingShape
