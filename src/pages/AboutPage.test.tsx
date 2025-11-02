import { render, screen } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import { AboutPage } from "./AboutPage";

describe("AboutPage", () => {
  test("Should render the main heading", () => {
    render(<AboutPage />);

    const heading = screen.getByRole("heading", {
      name: /About This App/i,
    });

    expect(heading).toBeInTheDocument();
  });

  test("Should render the paragraph text", () => {
    render(<AboutPage />);

    const paragraph = screen.getByText(/This is a Kanban board/i);

    expect(paragraph).toBeInTheDocument();
  });
});
