import { TEAM_MEMBERS } from '@/lib/team'
import { SocialIcons } from './SocialIcons'
import Section from './Section'

export default function Team() {
  return (
    <Section id="equipo">
      <div className="container">
        <span className="section-tag">El equipo</span>
        <h2 className="section-title">Los integrantes</h2>
        <div className="section-divider" />

        <div className="team-grid">
          {TEAM_MEMBERS.map((member) => (
            <article key={member.name} className="team-card">
              <div className="team-card__avatar">{member.initials}</div>
              <h3 className="team-card__name">{member.name}</h3>
              <span className="team-card__role">{member.role}</span>
              <span className={`team-card__badge team-card__badge--${member.badgeVariant}`}>
                {member.badge}
              </span>
              <SocialIcons socials={member.socials} />
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
