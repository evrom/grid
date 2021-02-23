import React from "react";
import { render } from "@testing-library/react";
import GridProperties from "../GridProperties";
import gridExamples from "../gridExamples";
import CssGridTemplateAreas from "../CssGridTemplateAreas";

it("GridProperties renders successfully", () => {
  const propertyValue: string = gridExamples["Correct"];
  const grid: CssGridTemplateAreas = new CssGridTemplateAreas(propertyValue);
  render(
    <GridProperties
      rows={grid.rows()}
      isRectangular={grid.isRectangular()}
      columnsPerRow={grid.columnsPerRow()}
      nonContigousAreas={grid.findNotContiguous()}
    />
  );
});

it("GridProperties renders successfully with non-rectangular", () => {
  const propertyValue: string = gridExamples["Not Rectangular"];
  const grid: CssGridTemplateAreas = new CssGridTemplateAreas(propertyValue);
  render(
    <GridProperties
      rows={grid.rows()}
      isRectangular={grid.isRectangular()}
      columnsPerRow={grid.columnsPerRow()}
      nonContigousAreas={grid.findNotContiguous()}
    />
  );
});

it("GridProperties renders successfully with non-contiguous", () => {
  const propertyValue: string = gridExamples["Not Contiguous"];
  const grid: CssGridTemplateAreas = new CssGridTemplateAreas(propertyValue);
  render(
    <GridProperties
      rows={grid.rows()}
      isRectangular={grid.isRectangular()}
      columnsPerRow={grid.columnsPerRow()}
      nonContigousAreas={grid.findNotContiguous()}
    />
  );
});

it("GridProperties renders successfully with no rows", () => {
  const grid: CssGridTemplateAreas = new CssGridTemplateAreas("");
  render(
    <GridProperties
      rows={grid.rows()}
      isRectangular={grid.isRectangular()}
      columnsPerRow={grid.columnsPerRow()}
      nonContigousAreas={grid.findNotContiguous()}
    />
  );
});
