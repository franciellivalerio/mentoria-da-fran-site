# Mentoria da Fran — public site guide

## Required project documentation

Before implementing a relevant change, read `docs/PROJECT_CONTEXT.md` and the
documents related to the module being changed. The current code remains the
primary evidence when documentation diverges.

Update the appropriate files in `docs/` whenever a change affects architecture,
business rules, integrations, persistence, features, roadmap, or relevant
history. Documentation is part of the definition of done.

## Scope

This repository contains only the public marketing website for Mentoria da Fran.
It must never contain the mentoring-management panel, Supabase clients, database
migrations, authentication routes, mentee data, or server-side credentials.

## Architecture

- React 19 with TanStack Start/Router and file-based routes in `src/routes`.
- Tailwind CSS 4 provides styling; small Radix primitives support accessible UI.
- Public reusable layout and visuals live in `src/components/site`.
- General contact opens a prefilled Gmail composer. Mentoring interest opens
  WhatsApp with a prefilled message. Neither flow stores lead data in this site.
- `src/routeTree.gen.ts` is generated and must not be edited manually.

## Code conventions

- Use strict TypeScript and the `@/` alias for files below `src`.
- Keep route files focused on page composition.
- Preserve the warm editorial visual language: sand and cream surfaces,
  terracotta accent, Prata headings, Cormorant Garamond body text, Lora interface
  copy, MonteCarlo brand signature, and restrained shadows.
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
