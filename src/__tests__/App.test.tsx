import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "../App";
import gridExamples from "../gridExamples";

it("App renders successfully", () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText("grid-template-areas:"), {
    target: { value: gridExamples["Not Rectangular"] },
  });
  fireEvent.click(screen.getByText("Not Contiguous"));
});
