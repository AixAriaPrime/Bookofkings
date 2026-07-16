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
  for (const response of responses) {
    const prompt = source.find(
      (item): item is RitualPrompt => "question" in item && item.id === response.promptId,
    );
    const options =
      prompt?.options ??
      source.filter((item): item is PromptOption => !("question" in item));
    const option = options.find((item) => item.id === response.selectedAnswer);
    for (const trait of traits) vector[trait] += option?.traits[trait] ?? 0;
    if (prompt?.type !== "text" && response.responseTimeMs < 4000) {
      vector.speed++;
    }
  }
  return vector;
}

export function mapArchetype(vector: TraitVector): Archetype {
  if (vector.socialOrientation >= 3) return "Bridge";
  if (vector.consistency > vector.exploration) return "Gardener";
  if (vector.ambiguityTolerance >= 3) return "Flame";
  return "Wayfinder";
}
