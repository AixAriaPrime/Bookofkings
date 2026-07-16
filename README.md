# Book of Kings — بوک آو کینگز

> *A daily ritual drawn from the Shahnameh — the ancient Persian Book of Kings.*

## What It Is

Book of Kings is a mobile-first ritual experience. Each day, users answer a curated set of prompts inspired by the Shahnameh. The responses are scored, an archetype is revealed, a Mirror Card is generated, and the Sage — an AI companion grounded in Persian epic wisdom — is available for reflection.

## Architecture

```
src/
├── app/                # Next.js App Router — one folder per screen
│   ├── page.tsx        # Home
│   ├── ritual/         # Daily Ritual flow
│   ├── result/         # Result + archetype reveal
│   ├── mirror/         # Mirror Card renderer
│   ├── sage-mode/      # Sage AI chat
│   └── settings/       # Account, subscription, preferences
│
├── ui/                 # Presentational layer (no business logic)
│   ├── components/     # Buttons, cards, navigation, inputs
│   └── layouts/        # MobileLayout shell
│
├── domain/             # Pure types and interfaces
│   ├── ritual/
│   ├── result/
│   ├── sage/
│   ├── user/
│   └── subscription/
│
├── data/               # Data access layer
│   ├── repositories/   # Repository interfaces + placeholders
│   └── stores/         # Client state (Zustand)
│
└── services/           # External integrations
    ├── ai/             # OpenAI / Sage
    ├── auth/           # Supabase Auth
    ├── analytics/      # Event tracking
    └── payments/       # Stripe
```

## Build Order

| # | Milestone | Status |
|---|-----------|--------|
| ****** | Project skeleton | ✅ |
| 2 | Design tokens | 🔜 |
| 3 | Auth + guest session | 🔜 |
| 4 | Prompt delivery | 🔜 |
| 5 | Response capture | 🔜 |
| 6 | Scoring engine | 🔜 |
| 7 | Result generation | 🔜 |
| 8 | Mirror card rendering | 🔜 |
| 9 | Sage chat | 🔜 |
| ******0 | Premium subscription | 🔜 |
| ************ | Analytics | 🔜 |
| ******2 | Polish pass | 🔜 |

## Getting Started

```bash
cp .env.example .env.local
# Fill in your Supabase, OpenAI, and Stripe keys

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Framework**: Next.js (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **Database / Auth**: Supabase
- **AI**: OpenAI
- **Payments**: Stripe
- **State**: Zustand
