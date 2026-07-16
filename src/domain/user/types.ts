// Domain: User
// Types only — no logic.

export type UserTier = "guest" | "free" | "premium";

export interface User {
  id: string;
  email: string | null;
  displayName: string | null;
  tier: UserTier;
  createdAt: string;
}

export interface GuestSession {
  guestId: string;
  createdAt: string;
  expiresAt: string;
}
