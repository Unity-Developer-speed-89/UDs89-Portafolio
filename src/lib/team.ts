export const NAV_LINKS = [
  { href: '#nosotros', label: 'Nosotros', section: 'nosotros' },
  { href: '#stack', label: 'Stack', section: 'stack' },
  { href: '#proyectos', label: 'Proyectos', section: 'proyectos' },
  { href: '#equipo', label: 'Equipo', section: 'equipo' },
] as const

export const STATS = [
  { number: '4', label: 'Integrantes' },
  { number: '10+', label: 'Tecnologías' },
  { number: 'Web', label: 'Especialidad' },
  { number: '100%', label: 'Dedicación' },
] as const

export type TechColor = 'teal' | 'purple' | 'amber'

export type StackCategory = {
  label: string
  technologies: { name: string; color: TechColor }[]
}

export const STACK_CATEGORIES: StackCategory[] = [
  {
    label: 'Backend & Frameworks',
    technologies: [
      { name: 'NestJS', color: 'teal' },
      { name: 'Node.js', color: 'teal' },
      { name: 'Go', color: 'teal' },
      { name: 'Python', color: 'teal' },
      { name: 'Java', color: 'teal' },
    ],
  },
  {
    label: 'Frontend',
    technologies: [{ name: 'Next.js', color: 'teal' }],
  },
  {
    label: 'Bases de datos',
    technologies: [
      { name: 'PostgreSQL', color: 'purple' },
      { name: 'SQLite', color: 'purple' },
    ],
  },
  {
    label: 'Infraestructura',
    technologies: [
      { name: 'Ubuntu Server', color: 'amber' },
      { name: 'Debian', color: 'amber' },
    ],
  },
]

export type Project = {
  emoji: string
  tag: string
  name: string
  description: string
  href?: string
  soon?: boolean
}

export const PROJECTS: Project[] = [
  {
    emoji: '🚀',
    tag: 'Web App',
    name: 'Nombre del Proyecto',
    description: 'Descripción breve del proyecto. Explica qué hace y qué tecnologías usó el equipo.',
    href: '#',
  },
  {
    emoji: '⚡',
    tag: 'API',
    name: 'Nombre del Proyecto',
    description: 'Descripción breve del proyecto. Explica qué hace y qué tecnologías usó el equipo.',
    href: '#',
  },
  {
    emoji: '🌐',
    tag: 'Sitio Web',
    name: 'Nombre del Proyecto',
    description: 'Descripción breve del proyecto. Explica qué hace y qué tecnologías usó el equipo.',
    href: '#',
  },
  {
    emoji: '✦',
    tag: 'En desarrollo',
    name: 'Próximamente',
    description: 'Nuevos proyectos en camino. Estamos trabajando en algo interesante.',
    soon: true,
  },
]

export type SocialLink = {
  type: 'github' | 'instagram' | 'linkedin' | 'beacons'
  href: string
  label: string
}

export type TeamMember = {
  initials: string
  name: string
  role: string
  badge: string
  badgeVariant: 'teal' | 'gray'
  socials: SocialLink[]
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    initials: 'BN',
    name: 'Bill Niño',
    role: 'Líder',
    badge: 'Líder del equipo',
    badgeVariant: 'teal',
    socials: [
      { type: 'github', href: '#', label: 'GitHub de Bill Niño' },
      { type: 'instagram', href: '#', label: 'Instagram de Bill Niño' },
      { type: 'linkedin', href: '#', label: 'LinkedIn de Bill Niño' },
      { type: 'beacons', href: '#', label: 'Beacons de Bill Niño' },
    ],
  },
  {
    initials: 'DR',
    name: 'Dalvin Ramírez',
    role: 'Sublíder',
    badge: 'Co-líder',
    badgeVariant: 'teal',
    socials: [
      { type: 'github', href: '#', label: 'GitHub de Dalvin Ramírez' },
      { type: 'instagram', href: '#', label: 'Instagram de Dalvin Ramírez' },
      { type: 'linkedin', href: '#', label: 'LinkedIn de Dalvin Ramírez' },
      { type: 'beacons', href: '#', label: 'Beacons de Dalvin Ramírez' },
    ],
  },
  {
    initials: 'RC',
    name: 'Raimond Caldera',
    role: 'Dev',
    badge: 'Desarrollador',
    badgeVariant: 'gray',
    socials: [
      { type: 'github', href: '#', label: 'GitHub de Raimond Caldera' },
      { type: 'instagram', href: '#', label: 'Instagram de Raimond Caldera' },
      { type: 'linkedin', href: '#', label: 'LinkedIn de Raimond Caldera' },
      { type: 'beacons', href: '#', label: 'Beacons de Raimond Caldera' },
    ],
  },
  {
    initials: 'OR',
    name: 'Osmar Rosales',
    role: 'Apoyo',
    badge: 'Soporte',
    badgeVariant: 'gray',
    socials: [
      { type: 'github', href: '#', label: 'GitHub de Osmar Rosales' },
      { type: 'instagram', href: '#', label: 'Instagram de Osmar Rosales' },
      { type: 'linkedin', href: '#', label: 'LinkedIn de Osmar Rosales' },
      { type: 'beacons', href: '#', label: 'Beacons de Osmar Rosales' },
    ],
  },
]

export const ABOUT_TEXT =
  'Somos un equipo de informáticos con el objetivo de mejorar continuamente en el mundo digital. Nos especializamos en el desarrollo de aplicaciones y páginas web, con la mira puesta en construir una base sólida para nuestro crecimiento profesional. Cada proyecto que tomamos es una oportunidad para aprender, innovar y demostrar que la calidad no está reservada solo para las grandes empresas.'
