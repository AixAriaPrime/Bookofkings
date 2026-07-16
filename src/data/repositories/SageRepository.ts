// Data: Sage Repository Interface

import type { SageSession, SageMessage } from "@/domain/sage/types";

export interface ISageRepository {
  createSession(userId: string | null, resultId: string | null): Promise<SageSession>;
  getSession(sessionId: string): Promise<SageSession | null>;
  appendMessage(sessionId: string, message: SageMessage): Promise<void>;
  getMessages(sessionId: string): Promise<SageMessage[]>;
}

// Placeholder
export class SageRepository implements ISageRepository {
  async createSession(
    _userId: string | null,
    _resultId: string | null
  ): Promise<SageSession> {
    throw new Error("SageRepository not implemented");
  }
  async getSession(_sessionId: string): Promise<SageSession | null> {
    throw new Error("SageRepository not implemented");
  }
  async appendMessage(
    _sessionId: string,
    _message: SageMessage
  ): Promise<void> {
    throw new Error("SageRepository not implemented");
  }
  async getMessages(_sessionId: string): Promise<SageMessage[]> {
    throw new Error("SageRepository not implemented");
  }
}
