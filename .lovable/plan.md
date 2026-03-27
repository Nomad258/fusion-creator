

# Plan: Convert 2R Fusion from Next.js + Prisma to Vite + React + Supabase

## The Problem

Your GitHub project uses Next.js (server-side rendering, API routes, App Router) and Prisma ORM. Lovable runs on Vite + React (client-side only) with Supabase as the backend. These are fundamentally different architectures — the code cannot simply be copied over.

## What Needs to Happen

### Phase 1: Database — Create Supabase Tables
Convert the 25+ Prisma models (User, Employee, Venue, Table, Guest, Reservation, Menu, MenuCategory, Dish, InventoryItem, Supplier, OrderTicket, etc.) into Supabase SQL migrations. Set up Row Level Security policies.

### Phase 2: Types — Replace Prisma Types
Replace all `@prisma/client` imports with local TypeScript interfaces matching the Supabase schema. Update `src/types/index.ts` to define all types locally.

### Phase 3: Pages — Convert Next.js to React Router
- Remove the Next.js App Router structure (`src/app/`)
- Create React Router routes for:
  - **Public pages**: Home, Menu, About, Contact, Events, Gallery, Reservations, Private Dining
  - **Admin pages**: Dashboard, Orders, Inventory, Employees, Guests, Suppliers, Invoices, Forecasts, Alerts, Anomalies, Settings, Menu Management, QR Codes
  - **Menu (QR)**: Table-specific menu viewer
- Reuse the existing UI components (they use Radix/shadcn which works in both)

### Phase 4: API — Replace API Routes with Supabase
- Remove `src/app/api/` routes (20+ endpoints)
- Replace with direct Supabase client calls from React components
- Move complex logic (anomaly detection, forecasting, spoilage) to Supabase Edge Functions

### Phase 5: Auth — Replace Custom Auth with Supabase Auth
Replace the cookie-based session auth with Supabase Auth (email/password).

## Recommended Approach: Incremental

Given the size (~30 pages, 20 API routes, 25 models), I recommend building this in stages:

1. **Start with public site** — Homepage, About, Contact, Menu, Gallery, Events, Reservations (no database needed for static content)
2. **Add Supabase database** — Create tables for menus, dishes, reservations, guests
3. **Add admin dashboard** — Dashboard, menu management, reservations management
4. **Add remaining admin modules** — Inventory, suppliers, employees, orders, invoices
5. **Add advanced features** — Anomaly detection, forecasting, spoilage engine, alerts

## Technical Details

- **Reusable as-is**: All `src/components/ui/` (shadcn components), `src/components/shared/`, Tailwind config, global CSS, design tokens
- **Needs conversion**: All page components (remove `"use server"`, Next.js imports), all data fetching (Prisma → Supabase), routing structure
- **Must remove**: `next.config.mjs`, `prisma/`, API routes, `src/lib/db.ts`, Next.js layout system
- **Must add**: React Router, Supabase client, Supabase types, auth context

