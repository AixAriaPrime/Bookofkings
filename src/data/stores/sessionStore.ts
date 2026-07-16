// Data: Session Store
// Zustand store — wired after design tokens and auth are in place.
// This file establishes the store shape so screens can import from it now.

import type { User, GuestSession } from "@/domain/user/types";
import type { RitualSession } from "@/domain/ritual/types";
import type { RitualResult } from "@/domain/result/types";

export interface SessionState {
  // Identity
  user: User | null;
  guest: GuestSession | null;
  isAuthenticated: boolean;

  // Active ritual
  activeRitual: RitualSession | null;
  lastResult: RitualResult | null;

  // UI state
  isLoading: boolean;
  error: string | null;
}

export const initialSessionState: SessionState = {
  user: null,
  guest: null,
  isAuthenticated: false,
  activeRitual: null,
  lastResult: null,
  isLoading: false,
  error: null,
};

// Placeholder hook — will be replaced with Zustand create() once store is wired
export function useSessionStore(): SessionState {
  return initialSessionState;
}
