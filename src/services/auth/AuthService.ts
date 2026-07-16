// Service: Auth
// Interface only — Supabase implementation comes in auth milestone.

import type { User, GuestSession } from "@/domain/user/types";

export interface IAuthService {
  signInWithEmail(email: string, password: string): Promise<User>;
  signUpWithEmail(email: string, password: string): Promise<User>;
  signInWithMagicLink(email: string): Promise<void>;
  signOut(): Promise<void>;
  getCurrentUser(): Promise<User | null>;
  createGuestSession(): Promise<GuestSession>;
}

// Placeholder — prevents import errors while service is not yet wired
export class AuthService implements IAuthService {
  async signInWithEmail(_email: string, _password: string): Promise<User> {
    throw new Error("AuthService not implemented");
  }
  async signUpWithEmail(_email: string, _password: string): Promise<User> {
    throw new Error("AuthService not implemented");
  }
  async signInWithMagicLink(_email: string): Promise<void> {
    throw new Error("AuthService not implemented");
  }
  async signOut(): Promise<void> {
    throw new Error("AuthService not implemented");
  }
  async getCurrentUser(): Promise<User | null> {
    return null;
  }
  async createGuestSession(): Promise<GuestSession> {
    throw new Error("AuthService not implemented");
  }
}
