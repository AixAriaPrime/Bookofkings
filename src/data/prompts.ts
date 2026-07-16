import type { RitualPrompt } from "@/domain/ritual";

export const DAILY_PROMPTS: RitualPrompt[] = [
  {
    id: "threshold",
    type: "image",
    eyebrow: "Look, then choose",
    question: "Which threshold quietly calls to you?",
    options: [
      { id: "garden", label: "A walled garden at dawn", traits: { consistency: 3, ambiguityTolerance: 1 } },
      { id: "mountain", label: "A mountain path in blue light", traits: { exploration: 3, speed: 1 } },
    ],
  },
  {
    id: "council",
    type: "scenario",
    eyebrow: "Trust your first instinct",
    question: "A friend brings you an uncertain plan. What do you offer first?",
    options: [
      { id: "ground", label: "A steady question", traits: { consistency: 2, socialOrientation: 2 } },
      { id: "spark", label: "A brave possibility", traits: { exploration: 2, ambiguityTolerance: 2 } },
    ],
  },
  {
    id: "signal",
    type: "reaction",
    eyebrow: "One breath only",
    question: "Choose the word that belongs to today.",
    options: [
      { id: "root", label: "Root", traits: { consistency: 3 } },
      { id: "horizon", label: "Horizon", traits: { exploration: 3 } },
      { id: "kinship", label: "Kinship", traits: { socialOrientation: 3 } },
    ],
  },
  {
    id: "reflection",
    type: "text",
    eyebrow: "Optional reflection",
    question: "What would you like to carry forward?",
    options: [],
    optional: true,
  },
];
