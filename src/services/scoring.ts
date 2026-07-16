import type {
  Archetype,
  PromptOption,
  RitualPrompt,
  RitualResponse,
  Trait,
  TraitVector,
} from "@/domain/ritual";

const traits: Trait[] = [
  "consistency",
  "exploration",
  "ambiguityTolerance",
  "speed",
  "socialOrientation",
];

export function scoreResponses(
  responses: RitualResponse[],
  source: PromptOption[] | RitualPrompt[],
): TraitVector {
  const vector = Object.fromEntries(traits.map((trait) => [trait, 0])) as TraitVector;
  const prompts = isPromptCollection(source) ? source : null;
  for (const response of responses) {
    const prompt = prompts?.find((item) => item.id === response.promptId);
    const options = prompt?.options ?? (source as PromptOption[]);
    const option = options.find((item) => item.id === response.selectedAnswer);
    for (const trait of traits) vector[trait] += option?.traits[trait] ?? 0;
    if (prompt?.type !== "text" && response.responseTimeMs < 4000) {
      vector.speed++;
    }
  }
  return vector;
}

function isPromptCollection(source: PromptOption[] | RitualPrompt[]): source is RitualPrompt[] {
  return source.length > 0 && "question" in source[0];
}

export function mapArchetype(vector: TraitVector): Archetype {
  if (vector.socialOrientation >= 3) return "Bridge";
  if (vector.consistency > vector.exploration) return "Gardener";
  if (vector.ambiguityTolerance >= 3) return "Flame";
  return "Wayfinder";
}
