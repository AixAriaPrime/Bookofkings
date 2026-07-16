# Book of Kings

> *A daily ritual drawn from the Shahnameh — the ancient Persian Book of Kings.*

## What It Is

Book of Kings is a mobile-first ritual experience. Each day, users answer prompts inspired by the Shahnameh. Responses are scored, an archetype is revealed, a Mirror Card is generated, and the Sage AI companion is available for reflection.

## Architecture

```
src/
├── app/                # Next.js App Router screens
│   ├── page.tsx        # Home
│   ├── ritual/         # Daily Ritual flow
│   ├── result/         # Result + archetype reveal
│   ├── mirror/         # Mirror Card renderer
│   ├── sage-mode/      # Sage AI chat
│   └── settings/       # Account, subscription, preferences
├── ui/                 # Presentational layer (no business logic)
│   ├── components/     # Button, cards, navigation, inputs
│   └── layouts/        # MobileLayout shell
├── domain/             # Pure types: ritual, result, sage, user, subscription
├── data/               # Repositories + Zustand session store
└── services/           # Auth, AI, analytics, payments interfaces
```

## Build Order

| # | Milestone | Status |
|---|-----------|--------|
| 1 | Project skeleton | done |
| 2 | Design tokens | next |
| 3 | Auth + guest session | pending |
| 4 | Prompt delivery | pending |
| 5 | Response capture | pending |
| 6 | Scoring engine | pending |
| 7 | Result generation | pending |
| 8 | Mirror card rendering | pending |
| 9 | Sage chat | pending |
| 10 | Premium subscription | pending |
| 11 | Analytics | pending |
| 112 | Polish pass | pending |

## Getting Started

```bash
cp .env.example .env.local   # fill in Supabase, OpenAI, Stripe keys
npm install
npm run dev
```

Open http://localhost:3000

## Stack

- **Framework**: Next.js 16+ (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Database / Auth**: Supabase
- **AI**: OpenAI
- **Payments**: Stripe
- **State**: Zustand
