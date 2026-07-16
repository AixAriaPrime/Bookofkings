import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { MobileApp } from "@/ui/MobileApp";

afterEach(cleanup);

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
});
