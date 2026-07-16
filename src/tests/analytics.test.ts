import { beforeEach, describe, expect, it } from "vitest";
import {
  type AnalyticsEvent,
  analyticsSnapshot,
  clearAnalytics,
  track,
} from "@/services/analytics";

describe("product analytics", () => {
  beforeEach(clearAnalytics);

  it("records every event in the product journey", () => {
    const events: AnalyticsEvent[] = [
      "session_start",
      "prompt_complete",
      "result_view",
      "share_tap",
      "sage_open",
      "premium_view",
      "return_visit",
    ];

    events.forEach((event) => track(event));

    expect(analyticsSnapshot().map((record) => record.event)).toEqual(events);
  });
});
