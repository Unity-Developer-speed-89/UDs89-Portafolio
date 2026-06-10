'use client'

import Section from './Section'

function CircuitGraphic() {
  return (
    <div className="hero__circuit" aria-hidden="true">
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#00D4C8" strokeWidth="1" opacity="0.1">
          <line x1="40" y1="60" x2="200" y2="60" />
          <line x1="200" y1="60" x2="200" y2="140" />
          <line x1="200" y1="140" x2="320" y2="140" />
          <line x1="320" y1="140" x2="320" y2="240" />
          <line x1="120" y1="140" x2="120" y2="280" />
          <line x1="120" y1="280" x2="280" y2="280" />
          <line x1="280" y1="280" x2="280" y2="360" />
          <line x1="60" y1="200" x2="160" y2="200" />
          <line x1="160" y1="200" x2="160" y2="320" />
          <line x1="240" y1="80" x2="360" y2="80" />
          <line x1="360" y1="80" x2="360" y2="180" />
        </g>
        <g fill="#00D4C8" opacity="0.1">
          <circle cx="200" cy="60" r="4" />
          <circle cx="200" cy="140" r="4" />
          <circle cx="320" cy="140" r="4" />
          <circle cx="320" cy="240" r="4" />
          <circle cx="120" cy="140" r="4" />
          <circle cx="120" cy="280" r="4" />
          <circle cx="280" cy="280" r="4" />
          <circle cx="160" cy="200" r="4" />
          <circle cx="360" cy="80" r="4" />
        </g>
        <g fill="#00D4C8" opacity="0.08">
          <rect x="185" y="125" width="30" height="18" rx="2" />
          <rect x="105" y="185" width="30" height="18" rx="2" />
          <rect x="305" y="225" width="30" height="18" rx="2" />
          <rect x="265" y="265" width="30" height="18" rx="2" />
        </g>
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <Section id="hero" className="hero section">
      <CircuitGraphic />
      <div className="container hero__content">
        <p className="eyebrow">
          <span className="eyebrow__line" />
          Technological Services
        </p>
        <h1 className="hero__title">
          Construimos soluciones <span className="text-accent">digitales</span> que importan
        </h1>
        <p className="hero__desc">
          Somos un equipo de desarrolladores apasionados por el mundo digital, enfocados en
          construir aplicaciones y páginas web con bases sólidas para el futuro.
        </p>
        <div className="hero__actions">
          <a href="#proyectos" className="btn btn--primary">
            Ver proyectos
          </a>
          <a href="#equipo" className="btn btn--ghost">
            Conoce al equipo
          </a>
        </div>
      </div>
    </Section>
  )
}
