import { describe, expect, it } from "vitest";
import { LEARNING_STORIES } from "@/data/learning";

describe("learning layer", () => {
  it("covers culture, Shahnameh themes, identity, and world history", () => {
    expect(LEARNING_STORIES.map((story) => story.topic)).toEqual([
      "persian-culture",
      "shahnameh-theme",
      "identity",
      "world-history",
    ]);
    LEARNING_STORIES.forEach((story) => {
      expect(story.title).toBeTruthy();
      expect(story.body.length).toBeGreaterThan(40);
    });
  });
});
