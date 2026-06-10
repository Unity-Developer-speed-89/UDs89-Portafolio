import { STACK_CATEGORIES } from '@/lib/team'
import Section from './Section'

export default function Stack() {
  return (
    <Section id="stack">
      <div className="container">
        <span className="section-tag">Stack tecnológico</span>
        <h2 className="section-title">Tecnologías que usamos</h2>
        <div className="section-divider" />

        <div className="stack-categories">
          {STACK_CATEGORIES.map((category) => (
            <div key={category.label} className="stack-category">
              <h3 className="stack-category__label">{category.label}</h3>
              <div className="tech-pills">
                {category.technologies.map((tech) => (
                  <span key={tech.name} className="tech-pill" data-color={tech.color}>
                    <span className="tech-pill__dot" />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
