import { describe, expect, it } from "vitest";
import { completedToday, isReturnVisit, markRitualComplete, markVisit } from "@/services/retention";

describe("retention hooks", () => {
  it("records visits and same-day ritual completion", () => {
    const values = new Map<string, string>();
    const storage = {
      getItem: (key: string) => values.get(key) ?? null,
      setItem: (key: string, value: string) => values.set(key, value),
    };
    const date = new Date("2026-07-16T08:00:00Z");

    expect(isReturnVisit(storage)).toBe(false);
    markVisit(storage);
    markRitualComplete(storage, date);
    expect(isReturnVisit(storage)).toBe(true);
    expect(completedToday(storage, date)).toBe(true);
  });
});
