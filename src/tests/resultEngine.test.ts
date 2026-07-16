import { describe, expect, it } from "vitest";
import { generateResult } from "@/services/resultEngine";

describe("result engine", () => {
  it("returns concise share-ready metadata", () => {
    const result = generateResult("Bridge");

    expect(result.title).toBeTruthy();
    expect(result.shareText.length).toBeLessThan(120);
    expect(result.asset.ratio).toBe("9:16");
  });
});

