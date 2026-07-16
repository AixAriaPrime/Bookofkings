import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { generateResult } from "@/services/resultEngine";
import { SagePanel } from "@/ui/SagePanel";

afterEach(cleanup);

describe("Sage panel rendering", () => {
  it("renders the answer, cultural context, practice, and follow-up", () => {
    const result = generateResult("Bridge");
    render(<SagePanel result={result} isPremium onPremium={vi.fn()} />);

    expect(screen.getByRole("heading", { name: "The Sage’s chamber" })).toBeVisible();
    expect(screen.getByText(result.body)).toBeVisible();
    expect(screen.getByText("The wisdom of the pause")).toBeVisible();
    expect(screen.getByText(result.nextStep)).toBeVisible();
    expect(screen.getByLabelText("Ask the Sage a follow-up")).toBeVisible();
    expect(screen.getByRole("button", { name: /Mirror · brief/i })).toHaveAttribute("aria-pressed", "false");
    expect(screen.getByRole("button", { name: /Sage · deeper/i })).toHaveAttribute("aria-pressed", "true");
  });

  it("shows a streamed Mirror follow-up in the conversation", async () => {
    render(
      <SagePanel
        result={generateResult("Gardener")}
        isPremium
        onPremium={vi.fn()}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /Mirror · brief/i }));
    fireEvent.change(screen.getByLabelText("Ask the Sage a follow-up"), {
      target: { value: "my next choice" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Send question" }));

    expect(screen.getByText("my next choice")).toBeVisible();
    expect(await screen.findByText(/one honest, manageable next step/)).toBeVisible();
  });
});
