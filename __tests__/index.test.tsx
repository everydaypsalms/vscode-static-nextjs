import "@testing-library/jest-dom/extend-expect"; // Learn more: https://github.com/testing-library/jest-dom
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /Coming soon!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
