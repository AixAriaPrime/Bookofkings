// Domain: Result
// Types only — no logic.

export type ArchetypeKey =
  | "warrior"
  | "sage"
  | "king"
  | "wanderer"
  | "guardian"
  | "seeker";

export interface ScoreBreakdown {
  dimension: string;
  score: number; // 0–******00
  label: string;
}

export interface RitualResult {
  id: string;
  sessionId: string;
  archetype: ArchetypeKey;
  title: string;
  summary: string;
  scores: ScoreBreakdown[];
  generatedAt: string;
}
