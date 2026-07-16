import { describe, expect, it } from "vitest";
import { DAILY_PROMPTS } from "@/data/prompts";
import { mapArchetype, scoreResponses } from "@/services/scoring";

describe("scoring engine", () => {
  it("creates a vector and maps it to a finite archetype", () => {
    const vector = scoreResponses(
      [{ promptId: "p", selectedAnswer: "steady", responseTimeMs: 1000, order: 0 }],
      [{ id: "steady", label: "Steady", traits: { consistency: 4 } }],
    );

    expect(vector.consistency).toBe(4);
    expect(vector.speed).toBe(1);
    expect(mapArchetype(vector)).toBe("Gardener");
  });

  it("scores options within their prompt and ignores text response speed", () => {
    const vector = scoreResponses(
      [
        { promptId: "threshold", selectedAnswer: "garden", responseTimeMs: 500, order: 0 },
        { promptId: "reflection", selectedAnswer: "garden", responseTimeMs: 500, order: 0 },
      ],
      DAILY_PROMPTS,
    );

    expect(vector.consistency).toBe(3);
    expect(vector.speed).toBeGreaterThan(0);
  });
});
