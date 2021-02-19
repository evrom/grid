import React, { useState } from "react";
import "./App.scss";
import GridPreview from "./GridPreview";
import GridProperties from "./GridProperties";
import GridTable from "./GridTable";
import CssGridTemplateAreas from "./CssGridTemplateAreas";
import gridExamples from "./gridExamples";

const App: React.FC = () => {
  const [gridInput, setGridInput] = useState(gridExamples["Correct"]);
  const grid = new CssGridTemplateAreas(gridInput);

  function onGridInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const input: string = e.target.value;
    setGridInput(input);
  }

  return (
    <div className="App">
      <header>
        <h1>CSS Grid Template Validator & Preview</h1>
        <div>
          Validate CSS Grid Template Area property values. Paste your{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas">
            <code>grid-template-areas</code>
          </a>{" "}
          property value to preview, validate, and debug.
        </div>
      </header>
      <main>
        <textarea onChange={onGridInputChange} value={gridInput}></textarea>
        <div>
          Examples:
          {Object.entries(gridExamples).map(([name, value]) => (
            <button key="name" onClick={() => setGridInput(value)}>
              {name}
            </button>
          ))}
        </div>
        <GridProperties
          rows={grid.rows()}
          columnsPerRow={grid.columnsPerRow()}
          isRectangular={grid.isRectangular()}
          nonContigousAreas={grid.findNotContiguous()}
        />
        <GridPreview
          namedAreas={grid.namedAreas()}
          propertyValue={grid.toPropertyValue()}
        />
        <GridTable gridTemplate={grid.gridTemplate} />
      </main>
      <footer>
        <ul>
          <a href="https://github.com/evrom/grid-validator">
            <li>Github</li>
          </a>
          <a href="https://evrom.github.io/">
            <li>About me</li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default App;
