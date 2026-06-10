# UDS89 — Technological Services

Sitio del equipo UDS89. Página de una sola vista con secciones de presentación, stack tecnológico, proyectos e integrantes. Construido con **Next.js** y exportado como sitio estático para **GitHub Pages**.

## Stack

- **Next.js 16** (App Router, Static Export)
- **React 19** + **TypeScript**
- **CSS** — estilos globales en `src/app/globals.css`
- **Inter** + **Space Grotesk** (Google Fonts)

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx       # Metadata y fuentes
│   ├── page.tsx         # Composición de secciones
│   └── globals.css      # Estilos del sitio
├── components/team/     # Navbar, Hero, About, Stack, Projects, Team, Footer
└── lib/
    └── team.ts          # Datos editables (proyectos, stack, integrantes)
public/                  # Assets estáticos (favicon, imágenes, etc.)
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

| Comando         | Descripción                              |
|-----------------|------------------------------------------|
| `npm run dev`   | Servidor de desarrollo                   |
| `npm run build` | Genera la exportación estática en `out/` |

## Personalización

Los datos editables están en `src/lib/team.ts`: proyectos, stack tecnológico, integrantes del equipo y enlaces de redes sociales.

## Deploy en GitHub Pages

El `basePath` está configurado en `next.config.js` para el repo `UDs89-Portafolio`. En GitHub → **Settings → Pages → Source → GitHub Actions**.

Cada push a `main` dispara el workflow `.github/workflows/deploy.yml`.
