// Data: User Repository Interface

import type { User, GuestSession } from "@/domain/user/types";

export interface IUserRepository {
  getUser(userId: string): Promise<User | null>;
  createGuestSession(): Promise<GuestSession>;
  getGuestSession(guestId: string): Promise<GuestSession | null>;
  upgradeGuestToUser(guestId: string, email: string): Promise<User>;
}

// Placeholder — real implementation injected via service layer
export class UserRepository implements IUserRepository {
  async getUser(_userId: string): Promise<User | null> {
    throw new Error("UserRepository not implemented");
  }
  async createGuestSession(): Promise<GuestSession> {
    throw new Error("UserRepository not implemented");
  }
  async getGuestSession(_guestId: string): Promise<GuestSession | null> {
    throw new Error("UserRepository not implemented");
  }
  async upgradeGuestToUser(
    _guestId: string,
    _email: string
  ): Promise<User> {
    throw new Error("UserRepository not implemented");
  }
}
