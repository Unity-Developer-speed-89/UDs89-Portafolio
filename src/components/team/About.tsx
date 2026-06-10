import { ABOUT_TEXT, STATS } from '@/lib/team'
import Section from './Section'

export default function About() {
  return (
    <Section id="nosotros">
      <div className="container">
        <span className="section-tag">Quiénes somos</span>
        <h2 className="section-title">Un equipo, una visión</h2>
        <div className="section-divider" />

        <div className="nosotros-grid">
          <p className="nosotros-text">{ABOUT_TEXT}</p>

          <div className="stats-grid">
            {STATS.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-card__number">{stat.number}</span>
                <span className="stat-card__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
