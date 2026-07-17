import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { saveAppState } from "@/services/appStorage";
import { generateResult } from "@/services/resultEngine";
import { MobileApp } from "@/ui/MobileApp";

afterEach(cleanup);
beforeEach(() => localStorage.clear());

describe("Mobile app", () => {
  it("opens a learning story and returns to the library", () => {
    render(<MobileApp />);

    fireEvent.click(screen.getByRole("button", { name: /Discover/ }));
    fireEvent.click(screen.getByRole("button", { name: "Read Hospitality as connection" }));

    expect(screen.getByRole("heading", { name: "Hospitality as connection" })).toBeVisible();
    expect(screen.getByText(/invite you to notice/)).toBeVisible();

    fireEvent.click(screen.getByRole("button", { name: /Back to the library/i }));

    expect(screen.getByRole("heading", { name: /Persian stories/i })).toBeVisible();
    expect(screen.queryByRole("button", { name: /Back to the library/i })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Read Hospitality as connection" })).toBeVisible();
  });

  it("restores premium access and saved mirrors", async () => {
    const result = generateResult("Flame");
    saveAppState(localStorage, {
      session: null,
      result,
      isPremium: true,
      history: [{ result, savedAt: new Date().toISOString() }],
    });

    render(<MobileApp />);

    await waitFor(() => expect(screen.getByRole("button", { name: "Open premium" })).toHaveTextContent("✦"));
    fireEvent.click(screen.getByRole("button", { name: /Archive/ }));

    expect(screen.getByRole("heading", { name: "A history of noticing" })).toBeVisible();
    expect(screen.getByRole("article", { name: `Mirror result: ${result.title}` })).toBeVisible();
  });

  it("closes the premium offer with Escape", () => {
    render(<MobileApp />);

    fireEvent.click(screen.getByRole("button", { name: "Open premium" }));
    expect(screen.getByRole("dialog", { name: "Premium Monthly" })).toBeVisible();

    fireEvent.keyDown(document, { key: "Escape" });

    expect(screen.queryByRole("dialog", { name: "Premium Monthly" })).not.toBeInTheDocument();
  });
});
