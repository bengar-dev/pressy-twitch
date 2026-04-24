# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**pressy-twitch** is a Next.js (App Router) + TypeScript frontend for a Twitch-related tool. The repo uses a monorepo layout with a `frontend/` subdirectory; all frontend work lives there.

## Commands

All commands run from `frontend/`:

```bash
npm run dev     # dev server (port 3000)
npm run build   # production build
npm run lint    # ESLint
```

## Architecture

- **Framework**: Next.js App Router with React 19 and TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 via PostCSS; dark mode theme variables defined in `app/globals.css`
- **Path alias**: `@/*` maps to the `frontend/` root
- **Fonts**: Geist (sans + mono) loaded via `next/font/google` in the root layout

## Coding directives

### Global

- Prefer native solutions. If a library/external alternative would be meaningfully better, propose it with justification before using it.
- Follow S.O.L.I.D and K.I.S.S principles.
- Never add comments. Code must be self-explanatory through naming. If something genuinely warrants a comment, ask the user before adding it.
- Never use `any`. If it seems like the only option, explain why before using it.

### Next.js / React

- Use a custom hook to own and expose shared state — never duplicate state across sibling components.
- State lives in the hook; the hook is the single source of truth.
- Pass data down via props from parent to children.
- Children communicate upward via callback functions declared on their props.
