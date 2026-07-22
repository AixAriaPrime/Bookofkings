# Book of Kings

Book of Kings is a polished Next.js experience for daily reflection. It combines
Persian-inspired visual language, guided prompts, and lightweight local-first
state to help users pause, answer honestly, and discover a mirror archetype.

## What is included

- A cinematic project website with clear product storytelling
- A fully interactive ritual flow embedded on the homepage
- Mirror archetype generation with card export support
- Learning stories and optional deeper Sage reflection
- Premium-gated archive behavior for saved mirrors

## Tech stack

- Next.js App Router
- React and TypeScript
- Vitest and Testing Library
- ESLint

## Project layout

All source code lives in `/src` and is organized by responsibility:

- `/src/ui` — visual components and interactive app surfaces
- `/src/domain` — core domain models and types
- `/src/data` — ritual prompts and learning content
- `/src/services` — app logic, storage, analytics, and rendering services
- `/src/navigation` — route-related definitions
- `/src/tests` — unit and integration tests

## Local development

Install dependencies and run the app:

```bash
npm install
npm run dev
```

The app is available at `http://localhost:3000`.

## Quality checks

Use the standard project scripts before shipping changes:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Production notes

- The app is local-first and keeps ritual state in browser storage.
- Exported mirror cards are generated client-side.
- The current build has no server database requirement.

## License

This project is released under the terms of the [MIT License](./LICENSE).
