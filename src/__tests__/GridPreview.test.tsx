import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import GridPreview from "../GridPreview";
import gridExamples from "../gridExamples";
import CssGridTemplateAreas from "../CssGridTemplateAreas";

it("GridPreview renders successfully", () => {
  const propertyValue: string = gridExamples["Correct"];
  const grid: CssGridTemplateAreas = new CssGridTemplateAreas(propertyValue);
  render(
    <GridPreview
      namedAreas={grid.namedAreas}
      propertyValue={grid.propertyValue}
    />
  );
  fireEvent.click(screen.getByText("Add grid child"));
  fireEvent.click(screen.getByText("Remove grid child"));
});
