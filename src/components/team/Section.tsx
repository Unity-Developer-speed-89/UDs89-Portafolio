'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type SectionProps = {
  id: string
  className?: string
  children: ReactNode
}

export default function Section({ id, className = 'section', children }: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id={id}
      className={`${className}${visible ? ' visible' : ''}`}
    >
      {children}
    </section>
  )
}
