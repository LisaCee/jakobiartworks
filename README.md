# Jakobi Art Works

The portfolio site for Jakobi, an artist known for painted concrete hearts done in a street art style. The site showcases the gallery of work in a masonry-style grid with scroll-triggered animations, and gives visitors a way to browse and learn more about the artist and the pieces.

Live at [jakobiartworks.com](https://jakobiartworks.com).

## Who this is for

- **Site visitors / art lovers** browsing the gallery to see available or past work.
- **Jakobi** as the site owner, for reference on how content and images are structured.
- **Developers** (mainly future-me) maintaining or extending the site.

## Tech stack

- **React 19** + **TypeScript**
- **Vite** for dev server and build tooling
- **Tailwind CSS v4** for styling
- **Radix UI** primitives (via the `shadcn` CLI) for accessible, unstyled components
- **React Router** for client-side routing
- **Lucide** / **React Icons** for iconography
- **Fontsource** for self-hosted variable fonts (Figtree)
- CSS Grid masonry gallery with scroll-triggered animations
- Deployed on **Netlify**, with DNS/email routing through **Cloudflare**

## Getting started locally

### Prerequisites

- [Node.js](https://nodejs.org/) 20+ (or whatever LTS matches the `vite`/`typescript` versions in `package.json`)
- npm (ships with Node)

### Install

```bash
git clone https://github.com/LisaCee/jakobiartworks.git
cd jakobiartworks
npm install
```

### Run the dev server

```bash
npm run dev
```

This starts Vite's dev server (with hot module reloading) — the terminal output will show the local URL, typically `http://localhost:5173`.

### Other scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Type-check with `tsc` and build a production bundle to `dist/` |
| `npm run preview` | Serve the production build locally to sanity-check it |
| `npm run lint` | Run ESLint over the project |

## Project structure

```
jakobiartworks/
├── public/          # Static assets served as-is
├── src/             # Application source (components, routes, styles)
├── index.html       # Vite entry HTML
├── vite.config.ts   # Vite configuration
├── components.json  # shadcn/Radix component config
└── tailwind config via @tailwindcss/vite
```

## Deployment

The site is deployed on Netlify, with the domain and DNS managed through Cloudflare. Pushing to `main` triggers a new build/deploy on Netlify.

## Notes

- Fonts are self-hosted rather than pulled from a CDN.
- If you're setting up DNS/email routing fresh, make sure any required A/CNAME records for subdomains are in place before expecting SSL/DCV to pass.