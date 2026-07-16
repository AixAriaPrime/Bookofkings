import type { Archetype, MirrorResult } from "@/domain/ritual";

const copy: Record<Archetype, Omit<MirrorResult, "archetype" | "asset">> = {
  Gardener: {
    title: "The Quiet Gardener",
    summary: "You make room for what deserves to endure.",
    body: "Your instinct is not to rush the season. You notice what can be tended, then return with care.",
    shareText: "Patience is not waiting. It is choosing what to tend.",
    nextStep: "Protect ten unhurried minutes today.",
  },
  Wayfinder: {
    title: "The Far Wayfinder",
    summary: "A wider horizon restores your sense of direction.",
    body: "You understand yourself through movement, possibility, and the paths that are not yet named.",
    shareText: "The horizon changes when I take one honest step.",
    nextStep: "Choose one small unfamiliar path.",
  },
  Bridge: {
    title: "The Living Bridge",
    summary: "You find meaning where people and perspectives meet.",
    body: "Your gift is translation: between moods, ideas, and people who might otherwise pass unseen.",
    shareText: "Understanding begins where certainty softens.",
    nextStep: "Ask one question without preparing your reply.",
  },
  Flame: {
    title: "The Amber Flame",
    summary: "You can stay present while the answer is still forming.",
    body: "Uncertainty does not empty the room for you. It makes space for a more truthful response.",
    shareText: "Not knowing can be a form of attention.",
    nextStep: "Leave one question open until evening.",
  },
};

export function generateResult(archetype: Archetype): MirrorResult {
  return {
    archetype,
    ...copy[archetype],
    asset: { ratio: "9:16", palette: "lapis-gold", template: "illuminated" },
  };
}

