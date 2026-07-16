import { describe, expect, it } from "vitest";
import {
  formatChatResponse,
  formatMirrorResponse,
  formatSageResponse,
  streamChatResponse,
  streamSageResponse,
} from "@/services/chat";

describe("chat response formatting", () => {
  it("keeps Mirror responses brief and clear", () => {
    const response = formatMirrorResponse("  choosing   a direction ");

    expect(response).toMatchObject({ role: "mirror", mode: "mirror" });
    expect(response.content).toBe(response.interpretation);
    expect(response.culturalReference).toBeUndefined();
    expect(response.content.length).toBeLessThan(80 * 2);
  });

  it("layers Sage responses with interpretation, culture, and practice", () => {
    const response = formatSageResponse("my next step");

    expect(response).toMatchObject({ role: "sage", mode: "sage" });
    expect(response.content).toContain(response.interpretation);
    expect(response.content).toContain(response.culturalReference);
    expect(response.content).toContain(response.practicalInsight);
    expect(formatChatResponse("sage", "my next step")).toEqual(response);
  });

  it("formats and streams a calm Sage response", async () => {
    const response = formatSageResponse("my next step");
    let streamed = "";
    for await (const token of streamSageResponse("my next step")) streamed += token;

    expect(response.role).toBe("sage");
    expect(streamed.trim()).toBe(response.content);
  });

  it("streams either response mode token by token", async () => {
    let streamed = "";
    for await (const token of streamChatResponse("mirror", "a decision")) streamed += token;

    expect(streamed.trim()).toBe(formatMirrorResponse("a decision").content);
  });
});
