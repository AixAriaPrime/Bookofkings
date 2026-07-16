import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { generateResult } from "@/services/resultEngine";
import {
  CARD_HEIGHT,
  CARD_WIDTH,
  mirrorCardExportMetadata,
  wrapText,
} from "@/services/cardRenderer";
import { MirrorCard } from "@/ui/MirrorCard";

describe("Mirror card rendering", () => {
  it("renders the dominant message and share insight", () => {
    const result = generateResult("Flame");
    render(<MirrorCard result={result} />);

    expect(screen.getByRole("article")).toHaveAccessibleName(/mirror result/i);
    expect(screen.getByText(result.title)).toBeVisible();
    expect(screen.getByText(`“${result.shareText}”`)).toBeVisible();
  });

  it("provides deterministic export metadata and wraps long copy", () => {
    const result = generateResult("Wayfinder");
    const metadata = mirrorCardExportMetadata(result);
    const context = {
      measureText: (text: string) => ({ width: text.length * 8 }) as TextMetrics,
    };

    expect(metadata).toMatchObject({
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      mimeType: "image/png",
    });
    expect(metadata.fileName).toContain("wayfinder");
    expect(wrapText(context, "a wider horizon restores direction", 80).length).toBeGreaterThan(Number(true));
  });
});
