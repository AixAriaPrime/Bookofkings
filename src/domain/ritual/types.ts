// Domain: Ritual
// Types only — no logic. The ritual is the core unit of the experience.

export type RitualStatus = "idle" | "active" | "paused" | "complete";

export interface Prompt {
  id: string;
  text: string;
  subtext?: string;
  durationSeconds: number;
  order: number;
}

export interface RitualSession {
  id: string;
  userId: string | null; // null for guest sessions
  status: RitualStatus;
  startedAt: string | null;
  completedAt: string | null;
  prompts: Prompt[];
  currentPromptIndex: number;
}

export interface RitualResponse {
  promptId: string;
  sessionId: string;
  value: string;
  recordedAt: string;
}
