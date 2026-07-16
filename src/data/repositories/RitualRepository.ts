// Data: Ritual Repository Interface
// Implementations will be swapped per environment (Supabase, mock, etc.)

import type { RitualSession, RitualResponse } from "@/domain/ritual/types";

export interface IRitualRepository {
  createSession(userId: string | null): Promise<RitualSession>;
  getSession(sessionId: string): Promise<RitualSession | null>;
  saveResponse(response: RitualResponse): Promise<void>;
  getResponses(sessionId: string): Promise<RitualResponse[]>;
  completeSession(sessionId: string): Promise<void>;
}

// Placeholder — real implementation injected via service layer
export class RitualRepository implements IRitualRepository {
  async createSession(_userId: string | null): Promise<RitualSession> {
    throw new Error("RitualRepository not implemented");
  }
  async getSession(_sessionId: string): Promise<RitualSession | null> {
    throw new Error("RitualRepository not implemented");
  }
  async saveResponse(_response: RitualResponse): Promise<void> {
    throw new Error("RitualRepository not implemented");
  }
  async getResponses(_sessionId: string): Promise<RitualResponse[]> {
    throw new Error("RitualRepository not implemented");
  }
  async completeSession(_sessionId: string): Promise<void> {
    throw new Error("RitualRepository not implemented");
  }
}
