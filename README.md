# Garima Wellness

Marketing site for **Garima Saini** — 500 Hr YTTC certified yoga instructor and nutritionist — offering yoga retreats and corporate wellness sessions.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (Radix primitives)

## Getting started

Requires [Node.js](https://nodejs.org/) (v18+) and npm.

```sh
# Install dependencies
npm install

# Start the dev server (http://localhost:8080)
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project structure

```
src/
  components/   UI and feature components (shadcn/ui under components/ui)
  pages/        Route pages (Landing, NotFound)
  data/         Static content/data
  hooks/        Custom React hooks
  lib/          Utilities
  assets/       Images and static assets
```

## Notes

- `tailwind-plus/` holds Tailwind component references used as design inspiration. Keep it unless you intentionally want it gone.
