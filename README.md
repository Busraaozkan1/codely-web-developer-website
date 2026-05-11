## Nova Atelier Landing Page

A premium and colorful Next.js landing page built for a personal studio brand.

### Stack

- Next.js (App Router, TypeScript)
- Bootstrap 5 (compatible utility and component styling)
- Custom CSS for glassmorphism, glow hovers, and animated gradients

### Features

- Vivid feminine-inspired premium color direction
- Rich one-page content: hero, services, case studies, workflow, contact form
- Layered glass cards with blur and light borders
- Interactive buttons/cards with glow, scale, and hover transitions
- Mobile-friendly responsive layout

### Getting Started

First, run the development server:

```bash
npm run dev
```

Open http://localhost:3000 to view the landing page.

### Build

```bash
npm run build
```

### Main Files

- `app/page.tsx`: landing page structure and section content
- `app/globals.css`: full visual system, effects, and animations
- `app/layout.tsx`: metadata, fonts, and Bootstrap global import

### Notes

- Contact form is UI-only for now; connect it to an API route or third-party form backend as needed.
- Replace placeholder brand and social links with your own production details.
