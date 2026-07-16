import type { RitualPrompt, RitualSession } from "@/domain/ritual";

export function nextPrompt(prompts: RitualPrompt[], session: RitualSession) {
  if (session.status === "complete") return null;
  return prompts[session.currentPrompt] ?? null;
}

export function optionalTextPrompt(): RitualPrompt {
  return {
    id: "reflection",
    type: "text",
    eyebrow: "Optional reflection",
    question: "What would you like to carry forward?",
    options: [],
  };
}

