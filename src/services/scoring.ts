import type {
  Archetype,
  PromptOption,
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
  options: PromptOption[],
): TraitVector {
  const vector = Object.fromEntries(traits.map((trait) => [trait, 0])) as TraitVector;
  for (const response of responses) {
    const option = options.find((item) => item.id === response.selectedAnswer);
    for (const trait of traits) vector[trait] += option?.traits[trait] ?? 0;
    vector.speed += response.responseTimeMs < 4000 ? 1 : 0;
  }
  return vector;
}

export function mapArchetype(vector: TraitVector): Archetype {
  if (vector.socialOrientation >= 3) return "Bridge";
  if (vector.consistency > vector.exploration) return "Gardener";
  if (vector.ambiguityTolerance >= 3) return "Flame";
  return "Wayfinder";
}

