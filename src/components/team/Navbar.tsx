'use client'

import { useCallback, useEffect, useState } from 'react'
import { NAV_LINKS } from '@/lib/team'
import Logo from './Logo'

const SECTION_IDS = ['hero', 'nosotros', 'stack', 'proyectos', 'equipo'] as const

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const closeMobileMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  const scrollToSection = useCallback(
    (href: string) => {
      const targetId = href.slice(1)
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
      closeMobileMenu()
    },
    [closeMobileMenu],
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id
            if (sectionId === 'hero') {
              setActiveSection(null)
            } else {
              setActiveSection(sectionId)
            }
          }
        })
      },
      { threshold: 0.3, rootMargin: '-64px 0px -50% 0px' },
    )

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeMobileMenu()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [closeMobileMenu])

  return (
    <header className="navbar" id="navbar">
      <div className="container navbar__inner">
        <Logo />

        <button
          type="button"
          className={`navbar__toggle${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav${menuOpen ? ' open' : ''}`} id="nav-menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link.section}
              href={link.href}
              className={`nav-link${activeSection === link.section ? ' active' : ''}`}
              data-section={link.section}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.href)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
