import { useEffect, useRef, useState } from 'react'

function InteractiveEyes() {
  const [gaze, setGaze] = useState({ x: 0, y: 0 })
  const eyeRef = useRef(null)

  useEffect(() => {
    let animationFrame
    let pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const updateGaze = () => {
      animationFrame = undefined
      const bounds = eyeRef.current?.getBoundingClientRect()
      if (!bounds) return
      const deltaX = pointer.x - (bounds.left + bounds.width / 2)
      const deltaY = pointer.y - (bounds.top + bounds.height / 2)
      const distance = Math.max(Math.hypot(deltaX, deltaY), 1)
      setGaze({ x: deltaX / distance, y: deltaY / distance })
    }
    const followPointer = (event) => {
      pointer = { x: event.clientX, y: event.clientY }
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateGaze)
    }
    window.addEventListener('pointermove', followPointer, { passive: true })
    updateGaze()
    return () => {
      window.removeEventListener('pointermove', followPointer)
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  const style = { '--eye-tilt-x': `${gaze.y * -7}deg`, '--eye-tilt-y': `${gaze.x * 7}deg`, '--pupil-x': `${gaze.x * 5}px`, '--pupil-y': `${gaze.y * 5}px`, '--glint-x': `${gaze.x * 2}px`, '--glint-y': `${gaze.y * 2}px`, '--shadow-x': `${gaze.x * -6}px`, '--shadow-y': `${gaze.y * -6}px` }
  return <div ref={eyeRef} className="eyes" style={style} aria-label="Interactive eyes follow your cursor"><span className="eye-orb"><i /></span><span className="eye-orb"><i /></span></div>
}

export default InteractiveEyes
