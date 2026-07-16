import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { generateResult } from "@/services/resultEngine";
import { MirrorCard } from "@/ui/MirrorCard";

describe("Mirror card rendering", () => {
  it("renders the dominant message and share insight", () => {
    const result = generateResult("Flame");
    render(<MirrorCard result={result} />);

    expect(screen.getByRole("article")).toHaveAccessibleName(/mirror result/i);
    expect(screen.getByText(result.title)).toBeVisible();
    expect(screen.getByText(`“${result.shareText}”`)).toBeVisible();
  });
});

