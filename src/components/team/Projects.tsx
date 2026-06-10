import { PROJECTS } from '@/lib/team'
import { ExternalLinkIcon } from './SocialIcons'
import Section from './Section'

export default function Projects() {
  return (
    <Section id="proyectos">
      <div className="container">
        <span className="section-tag">Portafolio</span>
        <h2 className="section-title">Proyectos del equipo</h2>
        <div className="section-divider" />

        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <article
              key={`${project.tag}-${index}`}
              className={`project-card${project.soon ? ' project-card--soon' : ''}`}
            >
              <div className={`project-card__thumb${project.soon ? ' project-card__thumb--soon' : ''}`}>
                <span className="project-card__emoji">{project.emoji}</span>
              </div>
              <div className="project-card__body">
                <span className="project-card__tag">{project.tag}</span>
                <h3 className="project-card__name">{project.name}</h3>
                <p className="project-card__desc">{project.description}</p>
                {project.href && (
                  <a
                    href={project.href}
                    className="project-card__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver proyecto"
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
