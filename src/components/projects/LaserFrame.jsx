function LaserFrame() {
  return (
    <div className="pointer-events-none absolute inset-0 z-30">
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-crimson-laser shadow-[0_0_8px_#FF4B00] group-hover:animate-laserTop" />
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-crimson-laser shadow-[0_0_8px_#FF4B00] group-hover:animate-laserRight" />
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-crimson-laser shadow-[0_0_8px_#FF4B00] group-hover:animate-laserBottom" />
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-crimson-laser shadow-[0_0_8px_#FF4B00] group-hover:animate-laserLeft" />
    </div>
  )
}

export default LaserFrame
