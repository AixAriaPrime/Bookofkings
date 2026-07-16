import { describe, expect, it } from "vitest";
import { formatSageResponse, streamSageResponse } from "@/services/chat";

describe("chat response formatting", () => {
  it("formats and streams a calm Sage response", async () => {
    const response = formatSageResponse("my next step");
    let streamed = "";
    for await (const token of streamSageResponse("my next step")) streamed += token;

    expect(response.role).toBe("sage");
    expect(streamed.trim()).toBe(response.content);
  });
});

