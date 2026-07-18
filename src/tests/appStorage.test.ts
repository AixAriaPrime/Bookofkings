import { describe, expect, it } from "vitest";
import { loadAppState, saveAppState } from "@/services/appStorage";
import { generateResult } from "@/services/resultEngine";

describe("app storage", () => {
  it("round trips valid state", () => {
    const values = new Map<string, string>();
    const storage = {
      getItem: (key: string) => values.get(key) ?? null,
      setItem: (key: string, value: string) => values.set(key, value),
    };
    const result = generateResult("Bridge");
    const state = {
      session: null,
      result,
      isPremium: true,
      history: [{ result, savedAt: new Date().toISOString() }],
    };

    saveAppState(storage, state);

    expect(loadAppState(storage)).toEqual(state);
  });

  it("ignores corrupt state", () => {
    const storage = { getItem: () => "{invalid" };

    expect(loadAppState(storage)).toBeNull();
  });
});
