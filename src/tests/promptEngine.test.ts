import { describe, expect, it } from "vitest";
import { DAILY_PROMPTS } from "@/data/prompts";
import { nextPrompt, optionalTextPrompt } from "@/services/promptEngine";
import { createSession } from "@/services/session";

describe("prompt engine", () => {
  it("serves the current prompt and supports optional text", () => {
    expect(nextPrompt(DAILY_PROMPTS, createSession())).toBe(DAILY_PROMPTS[0]);
    expect(optionalTextPrompt().type).toBe("text");
  });
});

