import React, { useState } from 'react';
import './App.scss';
import GridPreview from './GridPreview';
import GridProperties from './GridProperties';
import GridTable from './GridTable';
import CssGridTemplateAreas from './CssGridTemplateAreas';
import gridExamples from './gridExamples';


const App: React.FC = () => {
  const [gridInput, setGridInput] = useState(gridExamples['Correct']);
  const grid = new CssGridTemplateAreas(gridInput);

  function onGridInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const input: string = e.target.value;
    setGridInput(input);
  }

  return (
    <div className="App">
      <header>
        <h1>CSS Grid Template Validator & Preview</h1>
        <div>Paste your <code>grid-template-areas</code> property value and see a preview and diagnosis what is wrong.</div>
      </header>
      <main>
        <textarea onChange={onGridInputChange} value={gridInput}></textarea>
        <div>Examples:
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
    </div>
  );
}

export default App;
