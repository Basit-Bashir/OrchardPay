# OrchardPay

A SaaS platform for fruit buyers in the horticulture sector. Buyers register their firm,
log in with a mobile OTP, record produce received from growers, and growers are notified by
SMS the moment their produce is sold and at what rate. Includes a CSV/Excel migration tool
for moving off legacy software.

## Tech stack

- **Next.js 15** (App Router) + **TypeScript**
- **Chakra UI v3** for the interface
- **Prisma 6** ORM over **SQLite** (swap to Postgres for production)
- **Custom OTP auth** — mobile + 6-digit code, signed JWT in an httpOnly cookie (`jose` + `bcryptjs`)
- **TanStack Query** for client data fetching, **Zod** for validation
- **SMS** abstraction with a console stub for local dev and a Twilio path for production
- **papaparse** / **xlsx** for CSV & Excel import/export (loaded only in the browser)

## Getting started

```bash
npm install          # installs deps and runs `prisma generate`
npm run db:push      # creates the SQLite database from the schema
npm run db:seed      # loads a demo firm, growers, and transactions
npm run dev          # http://localhost:3000
```

### Demo login

The seed creates a firm you can log straight into:

- **Mobile:** `+919898989898`
- On the login screen, enter that number and request a code. Because `SMS_PROVIDER=console`,
  the 6-digit OTP is **printed to the server console** and also shown on screen in dev mode.

You can also create a fresh firm from `/signup` to see the unique-ID assignment
(`HORT-BUYER-00001`, `HORT-BUYER-00002`, …).

## Environment

Copy `.env.example` to `.env` (a working dev `.env` is already included). Key variables:

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | `file:./dev.db` for SQLite; a `postgresql://…` URL for production |
| `AUTH_SECRET` | Secret used to sign session JWTs — set a long random value in production |
| `SMS_PROVIDER` | `console` (log only) or `twilio` (send real SMS) |
| `TWILIO_*` | Account SID, auth token, and from-number; required when `SMS_PROVIDER=twilio` |
| `RESEND_API_KEY` | Optional, reserved for email receipts |

## Features

- **OTP authentication** — passwordless mobile login; OTPs are hashed (bcrypt), expire after
  10 minutes, and are rate-limited to 3 requests per number per 10 minutes.
- **Dashboard** — totals for transactions, growers, this month's purchases, plus recent activity.
- **Transactions** — record grower, fruit type, quantity, rate (auto-calculated total). Saving
  instantly sends the grower an SMS. Filter by fruit/date; resend or delete from the detail view.
- **Growers** — full CRUD with per-grower transaction history.
- **Data migration** — upload CSV or Excel, auto-guess column mappings, preview, then import.
  Growers are created and matched by mobile number; imported rows don't trigger SMS.
- **Reports** — filter by grower/fruit/date, see totals, export to Excel.
- **Settings** — edit firm details, view plan, manage team members.

## How SMS works locally

With `SMS_PROVIDER=console`, every OTP and grower notification is printed to the terminal
running `npm run dev`, e.g.:

```
────────── SMS (stub) ──────────
  to:   +919812300001
  body: Hi Ramesh Orchard, your Apple (120 kg) was sold at ₹60/kg. Total: ₹7,200. ...
────────────────────────────────
```

To send real messages, set `SMS_PROVIDER=twilio` and fill the `TWILIO_*` variables.
No code changes are needed — see `src/lib/sms.ts`.

## Going to production

1. Provision Postgres (Supabase / Neon) and set `DATABASE_URL`.
2. Change the SQLite provider in `prisma/schema.prisma` to `postgresql`, then run
   `npx prisma migrate deploy` (replace the dev `db push` flow with real migrations).
3. Set a strong `AUTH_SECRET` and configure Twilio.
4. Deploy to Vercel (`npm run build` is already wired to run `prisma generate` first).

## Project layout

```
prisma/            schema + seed
src/lib/           prisma client, auth/session, otp, sms, notify, validations, helpers
src/app/api/       route handlers (auth, growers, transactions, migration, firm, staff)
src/app/(app)/     authenticated pages (dashboard, transactions, growers, migration, reports, settings)
src/app/login,signup   public auth pages
src/components/    AppShell + shared forms
src/middleware.ts  protects authenticated routes
```

## Notes / deviations from the original spec

- **Auth:** implemented as a custom OTP + JWT-cookie flow rather than NextAuth.js. NextAuth's
  v5 OTP story is awkward; this is simpler, fully typed, and works the same way.
- **Versions:** built on current-stable Next 15 / Chakra 3 / Prisma 6 rather than the originally
  pinned Next 14 / Chakra 2 / Prisma 7. (Prisma 7 now requires driver adapters, which add setup
  friction for little benefit here.)
- **Database:** SQLite for zero-config local dev; the schema is Postgres-ready.
```
