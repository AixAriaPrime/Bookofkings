// Service: Sage AI
// Interface only — OpenAI implementation comes in sage milestone.

import type { SageMessage } from "@/domain/sage/types";
import type { RitualResult } from "@/domain/result/types";

export interface ISageService {
  sendMessage(
    history: SageMessage[],
    userMessage: string,
    context: RitualResult | null
  ): Promise<string>;
  streamMessage(
    history: SageMessage[],
    userMessage: string,
    context: RitualResult | null,
    onChunk: (chunk: string) => void
  ): Promise<void>;
}

// Placeholder
export class SageService implements ISageService {
  async sendMessage(
    _history: SageMessage[],
    _userMessage: string,
    _context: RitualResult | null
  ): Promise<string> {
    throw new Error("SageService not implemented");
  }
  async streamMessage(
    _history: SageMessage[],
    _userMessage: string,
    _context: RitualResult | null,
    _onChunk: (chunk: string) => void
  ): Promise<void> {
    throw new Error("SageService not implemented");
  }
}
