export type Trait =
  | "consistency"
  | "exploration"
  | "ambiguityTolerance"
  | "speed"
  | "socialOrientation";

export type PromptType = "image" | "scenario" | "reaction" | "text";

export type TraitVector = Record<Trait, number>;

export interface PromptOption {
  id: string;
  label: string;
  traits: Partial<TraitVector>;
}

export interface RitualPrompt {
  id: string;
  type: PromptType;
  eyebrow: string;
  question: string;
  options: PromptOption[];
}

export interface RitualResponse {
  promptId: string;
  selectedAnswer: string;
  responseTimeMs: number;
  order: number;
}

export interface RitualSession {
  id: string;
  startedAt: number;
  currentPrompt: number;
  responses: RitualResponse[];
  status: "active" | "complete";
}

export type Archetype = "Gardener" | "Wayfinder" | "Bridge" | "Flame";

export interface MirrorResult {
  archetype: Archetype;
  title: string;
  summary: string;
  body: string;
  shareText: string;
  nextStep: string;
  asset: { ratio: "9:16"; palette: string; template: string };
}

