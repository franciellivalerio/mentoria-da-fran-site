# Mentoria da Fran — public site guide

## Scope

This repository contains only the public marketing website for Mentoria da Fran.
It must never contain the mentoring-management panel, Supabase clients, database
migrations, authentication routes, mentee data, or server-side credentials.

## Architecture

- React 19 with TanStack Start/Router and file-based routes in `src/routes`.
- Tailwind CSS 4 provides styling; small Radix primitives support accessible UI.
- Public reusable layout and visuals live in `src/components/site`.
- The contact form opens WhatsApp with a prefilled message and stores no lead data.
- `src/routeTree.gen.ts` is generated and must not be edited manually.

## Code conventions

- Use strict TypeScript and the `@/` alias for files below `src`.
- Keep route files focused on page composition.
- Preserve the warm editorial visual language: sand and cream surfaces,
  terracotta accent, Fraunces headings, Karla body text, and restrained shadows.
- Do not add an admin link, hidden admin route, database client, or authentication
  dependency to this repository.
- Treat `VITE_*` values as public. Never place secrets in browser environment
  variables or commit `.env` files.

## Verification

Run before committing:

```sh
bun run lint
bun run typecheck
bun run build
```

Test the main pages on desktop and mobile and confirm the WhatsApp destination
before publishing.
