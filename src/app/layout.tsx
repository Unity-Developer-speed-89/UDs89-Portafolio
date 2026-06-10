import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import Background3D from '@/components/team/Background3D'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'UDS89 — Technological Services',
  description:
    'UDS89 Technological Services — Equipo de desarrolladores apasionados por construir soluciones digitales con bases sólidas.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Background3D />
        <div className="site-wrapper">{children}</div>
      </body>
    </html>
  )
}
