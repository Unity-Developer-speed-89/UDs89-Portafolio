'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

function WireframeCube({ size = 60 }: { size?: number }) {
  const half = size / 2

  const faces = [
    { transform: `translateZ(${half}px)`, className: 'bg-3d__face--front' },
    { transform: `rotateY(180deg) translateZ(${half}px)`, className: 'bg-3d__face--back' },
    { transform: `rotateY(90deg) translateZ(${half}px)`, className: 'bg-3d__face--right' },
    { transform: `rotateY(-90deg) translateZ(${half}px)`, className: 'bg-3d__face--left' },
    { transform: `rotateX(90deg) translateZ(${half}px)`, className: 'bg-3d__face--top' },
    { transform: `rotateX(-90deg) translateZ(${half}px)`, className: 'bg-3d__face--bottom' },
  ]

  return (
    <div className="bg-3d__cube" style={{ width: size, height: size }}>
      {faces.map((face) => (
        <div
          key={face.className}
          className={`bg-3d__face ${face.className}`}
          style={{ width: size, height: size, transform: face.transform }}
        />
      ))}
    </div>
  )
}

export default function Background3D() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      mouseX.set(x * 18)
      mouseY.set(y * 12)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  return (
    <div className="bg-3d" aria-hidden="true">
      <div className="bg-3d__vignette" />

      <div className="bg-3d__grid-wrap">
        <div className="bg-3d__grid" />
      </div>

      <motion.div
        className="bg-3d__shapes"
        style={{ x: springX, y: springY }}
      >
        <div className="bg-3d__scene bg-3d__scene--1">
          <WireframeCube size={72} />
        </div>

        <div className="bg-3d__scene bg-3d__scene--2">
          <WireframeCube size={48} />
        </div>

        <div className="bg-3d__scene bg-3d__scene--3">
          <div className="bg-3d__ring" />
        </div>

        <div className="bg-3d__orb" />
      </motion.div>
    </div>
  )
}
