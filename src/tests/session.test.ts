import { describe, expect, it } from "vitest";
import { createSession, recordResponse } from "@/services/session";

describe("session flow", () => {
  it("tracks response order and completes at the prompt count", () => {
    const started = createSession(100);
    const first = recordResponse(
      started,
      { promptId: "a", selectedAnswer: "root", responseTimeMs: 700 },
      2,
    );
    const complete = recordResponse(
      first,
      { promptId: "b", selectedAnswer: "path", responseTimeMs: 900 },
      2,
    );

    expect(first.responses[0].order).toBe(0);
    expect(complete.status).toBe("complete");
    expect(complete.responses).toHaveLength(2);
  });
});

