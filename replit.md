# Sooner State Quail Coalition - Link-in-Bio Landing Page

## Overview

This is a link-in-bio style landing page for the Sooner State Quail Coalition, a wildlife conservation organization. The app displays a branded page with the organization's logo and a list of configurable link buttons (tickets, flyers, sponsorship forms, website). It follows a full-stack TypeScript architecture with a React frontend and Express backend, backed by PostgreSQL.

The app is intentionally simple — essentially a "Linktree" clone for a single organization. Links are stored in a database and seeded on first run. The frontend fetches them via API and renders them with smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Project Structure
- `client/` — React frontend (Vite-powered SPA)
- `server/` — Express backend (API + static file serving)
- `shared/` — Shared types, schemas, and route definitions used by both client and server
- `migrations/` — Drizzle ORM database migrations
- `attached_assets/` — Static assets like logos (aliased as `@assets` in Vite)

### Frontend
- **Framework**: React with TypeScript
- **Bundler**: Vite with HMR in development
- **Routing**: Wouter (lightweight client-side router)
- **State/Data Fetching**: TanStack React Query for server state management
- **UI Components**: Shadcn/ui (new-york style) built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Animations**: Framer Motion for link button entry animations
- **Design**: Earthy color palette — Cream (#FDFBF7), Dark Brown (#4A3728), Accent Yellow (#E8C547), Sage (#8A9A5B), with Bright Orange (#F1572B) as the primary action color
- **Fonts**: DM Sans (body), Playfair Display (headings)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Backend
- **Framework**: Express 5 on Node.js
- **Runtime**: tsx for TypeScript execution in development
- **API Pattern**: Simple REST endpoints under `/api/`
- **Static Files**: PDF documents served from a `/documents/` path (flyer and sponsorship form)
- **Dev Server**: Vite dev server middleware integrated with Express in development; static file serving in production
- **Build**: esbuild for server bundling, Vite for client bundling, output to `dist/`

### Database
- **Database**: PostgreSQL (required — `DATABASE_URL` environment variable must be set)
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema**: Single `links` table with fields: `id`, `title`, `url`, `icon`, `isVisible`, `order`
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Migrations**: Managed via `drizzle-kit push` (push-based, no migration files needed for dev)
- **Seeding**: Automatic — server seeds default links on startup if the table is empty

### API Endpoints
- `GET /api/links` — Returns all links ordered by `order` field
- Route definitions are shared via `shared/routes.ts` with Zod validation schemas

### Key Design Decisions
1. **Shared schema between client and server** — The `shared/` directory contains Drizzle schema and Zod validators used by both sides, ensuring type safety across the stack.
2. **Fallback links in frontend** — The Landing page includes hardcoded fallback links in case the API fails, ensuring the page always renders something useful.
3. **No authentication** — This is a public-facing read-only landing page. There's a `useCreateLink` hook stubbed out for potential future admin features.
4. **Icon mapping** — Link icons are stored as string names (e.g., "Ticket", "FileText") and mapped to Lucide React icon components on the frontend.

## External Dependencies

### Required Services
- **PostgreSQL Database** — Required. Connection via `DATABASE_URL` environment variable. Used with `pg` (node-postgres) pool and Drizzle ORM.

### Key NPM Packages
- `express` v5 — HTTP server
- `drizzle-orm` + `drizzle-kit` — Database ORM and migration tooling
- `@tanstack/react-query` — Client-side data fetching and caching
- `framer-motion` — Animations
- `wouter` — Client-side routing
- `zod` + `drizzle-zod` — Runtime validation
- Shadcn/ui component library (Radix UI + Tailwind CSS)
- `connect-pg-simple` — PostgreSQL session store (available but not actively used yet)

### Static Assets
- Organization logo at `attached_assets/OKC_full_color_logo_sooner_PNG-yellowtxt_(2)_1770994602931.png`
- PDF documents expected at `/documents/flyer.pdf` and `/documents/sponsorship_form.pdf` (served by the backend)