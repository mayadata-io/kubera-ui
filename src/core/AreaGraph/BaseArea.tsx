import React from 'react';

import generateDateValue, {
  DateValue,
} from '@visx/mock-data/lib/generators/genDateValue';
// import Example2 from "./components/RadialPie-testing-01";
import AreaGraph from './Graph-01';
let lineCount: number = 1;
const series = new Array(lineCount)
  .fill(null)
  .map((_) =>
    generateDateValue(7).sort(
      (a: DateValue, b: DateValue) => a.date.getTime() - b.date.getTime()
    )
  );

const series2 = new Array(lineCount)
  .fill(null)
  .map((_) =>
    generateDateValue(7).sort(
      (a: DateValue, b: DateValue) => a.date.getTime() - b.date.getTime()
    )
  );

const width = 600;
const height = 400;

function BaseArea() {
  return (
    <div className="App">
      <AreaGraph
        width={width}
        height={height}
        showLineClosed={true}
        closedSeries={series}
        openSeries={series2}
        showLineOpen={true}
        showPoints={false}
      />
    </div>
  );
}

export default BaseArea;
