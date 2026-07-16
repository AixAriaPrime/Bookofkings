// Data: Result Repository Interface

import type { RitualResult } from "@/domain/result/types";

export interface IResultRepository {
  saveResult(result: RitualResult): Promise<void>;
  getResult(resultId: string): Promise<RitualResult | null>;
  getResultsForUser(userId: string): Promise<RitualResult[]>;
}

// Placeholder
export class ResultRepository implements IResultRepository {
  async saveResult(_result: RitualResult): Promise<void> {
    throw new Error("ResultRepository not implemented");
  }
  async getResult(_resultId: string): Promise<RitualResult | null> {
    throw new Error("ResultRepository not implemented");
  }
  async getResultsForUser(_userId: string): Promise<RitualResult[]> {
    throw new Error("ResultRepository not implemented");
  }
}
