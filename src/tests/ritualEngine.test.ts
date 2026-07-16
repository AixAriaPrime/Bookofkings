import { describe, expect, it } from "vitest";
import { DAILY_PROMPTS } from "@/data/prompts";
import {
  startGuestRitual,
  submitRitualResponse,
} from "@/services/ritualEngine";

describe("ritual response engine", () => {
  it("supports every prompt type and produces a deterministic result", () => {
    let transition = startGuestRitual(DAILY_PROMPTS, 500);

    expect(DAILY_PROMPTS.map((prompt) => prompt.type)).toEqual([
      "image",
      "scenario",
      "reaction",
      "text",
    ]);

    for (const answer of ["garden", "ground", "kinship", ""]) {
      transition = submitRitualResponse(DAILY_PROMPTS, transition.session, {
        promptId: transition.prompt?.id ?? "",
        answer,
        responseTimeMs: 500,
      });
    }

    expect(transition.session.status).toBe("complete");
    transition.session.responses.forEach((response, index) => {
      expect(response.order).toBe(index);
    });
    expect(transition.vector).toMatchObject({
      consistency: 5,
      speed: 3,
      socialOrientation: 5,
    });
    expect(transition.result?.archetype).toBe("Bridge");
  });

  it("rejects responses that do not belong to the current prompt", () => {
    const transition = startGuestRitual(DAILY_PROMPTS, 500);

    expect(() =>
      submitRitualResponse(DAILY_PROMPTS, transition.session, {
        promptId: "council",
        answer: "ground",
        responseTimeMs: 500,
      }),
    ).toThrow(/current prompt/i);
    expect(transition.session.responses).toEqual([]);
  });
});
