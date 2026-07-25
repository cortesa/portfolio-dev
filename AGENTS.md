# Portfolio Dev Agent Guide

## Project identity

This repository is Andrés Cortés Zaldívar's personal portfolio/about page. The goal is to present Andrés as a frontend developer in a polished, recruiter-friendly way: work experience, portfolio projects, technical stack, personality, and contact points.

Work in Spanish when discussing with Andrés unless he asks otherwise. Keep user-facing explanations concise and practical.

## Tech stack

- Astro 5 static site
- React islands for interactive portfolio cards
- TypeScript
- Tailwind CSS
- CSS Modules for the React portfolio card island
- Local SVG icons as Astro components under `src/icons/`

Useful commands:

```bash
npm run dev
npm run build
npm run lint
npm run lint:fix
```

The dev server is typically available at `http://localhost:4321/`.

## Important files

- `src/pages/index.astro` — homepage composition.
- `src/layouts/Layout.astro` — page shell and SEO metadata integration.
- `src/components/CortesaHero.astro` — hero/about intro.
- `src/components/Experience.astro` — Work experience section wrapper.
- `src/components/ExperienceItem.astro` — single experience item; supports `link` and optional `linkLabel`.
- `src/contents/experience.ts` — source of truth for Work experience entries.
- `src/components/Portfolio.astro` — Portfolio section wrapper.
- `src/components/islands/PortfolioCard/index.tsx` — interactive portfolio card island.
- `src/components/islands/PortfolioCard/portfolioCard.module.css` — portfolio card animation/styling.
- `src/contents/portfolio.ts` — source of truth for portfolio cards.
- `src/components/TechStack.astro` — Tech stack section.
- `src/components/TechPill.astro` — pill rendering; icon and text inherit `tech.color`.
- `src/contents/techStack.ts` — display order and scores for Tech stack pills.
- `src/const/techs.ts` — registry of tech names, colors, and icon components.
- `src/icons/*.astro` — local SVG icons used by tech pills and UI.

## Content conventions

### Work experience

Work experience lives in `src/contents/experience.ts` as `EXPERIENCE`.

- Keep entries in reverse chronological order.
- Write descriptions and bullets in English for the public site.
- Prefer recruiter-friendly wording: impact, responsibility, technologies, collaboration, delivery.
- If adding a company URL, add a `linkLabel` like `About Valsea` or `About NumberGroup`; avoid vague labels when the link points to a company page.
- `ExperienceItem.astro` defaults `linkLabel` to `Learn more` for backward compatibility.

Current notable entries:

- Valsea — Oct 2025 - Present, Frontend Developer; React, TypeScript, Sanity CMS, proxies, agentic programming, automation protocols, internal tooling.
- NumberGroup — has `https://numbergroup.xyz/` and label `About NumberGroup`.

### Portfolio cards

Portfolio projects live in `src/contents/portfolio.ts` as `PORTFOLIO`.

- Use `url` only when it leads to a live, useful, recruiter-safe destination.
- Do not keep dead links. A broken CTA is worse UX than no CTA.
- `url` is optional. Cards without `url` render as non-clickable `<article>` elements.
- Archived/non-clickable cards can still show the project as proof of work.

Yolorekt is intentionally archived and has no URL because the public site is dead/unhelpful for recruiters.

Inactive portfolio card visual behavior:

- No CTA cursor.
- No pulsing shadow.
- Collapsed/condensed state should look normal.
- Expanded inactive state shows only a simple border via pseudo-element opacity.
- Current preferred inactive border: `2px solid color-mix(in srgb, var(--shadow-color) 85%, transparent)`.

### Tech stack

Tech stack order lives in `src/contents/techStack.ts`.

- Current ordering places Sanity and Claude between TypeScript and Jotai.
- Tech metadata lives in `src/const/techs.ts`.
- Icons should be local Astro components and generally use `fill="currentColor"` so `TechPill.astro` controls the color.
- Current Sanity color: `#F03E2F`.
- Current Claude color: `#C96442`.

## Visual/UX principles

- Recruiter experience matters more than showing every possible link.
- Prefer clear CTAs only when the destination is valuable.
- Avoid dead links, misleading buttons, or interactions that imply clickability without destination.
- Make inactive content visually informative rather than disabled-looking.
- Keep styling consistent with the dark theme and yellow accent language.

## Validation checklist

Before committing meaningful changes:

1. Run `npm run build`.
2. Check `git diff` for unintended generated files.
3. Avoid committing `dist/`, `.astro/`, `node_modules/`, or `.DS_Store` unless explicitly intended.
4. Keep changes focused and recruiter-friendly.

## Git notes

- Primary branch is `master`, not `main`.
- Remote: `https://github.com/cortesa/portfolio-dev.git`.
- When the user says “main”, interpret as the primary branch `master` unless they explicitly create/use a `main` branch.
