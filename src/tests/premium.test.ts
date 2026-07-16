import { describe, expect, it } from "vitest";
import { canAccess, PREMIUM_PRODUCT } from "@/services/premium";

describe("premium gating", () => {
  it("offers one monthly tier and gates premium features", () => {
    expect(PREMIUM_PRODUCT.period).toBe("month");
    expect(canAccess("deep_sage", false)).toBe(false);
    expect(canAccess("deep_sage", true)).toBe(true);
  });
});
