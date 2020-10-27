// import generateDateValue, {
//   DateValue,
// } from "@visx/mock-data/lib/generators/genDateValue";
import React from 'react';
import BrushChart from './AreaGraph-Scroller-01';
// import ParentSize from "@visx/responsive/lib/components/ParentSize";

export interface DataValue {
  date: number;
  value: number;
}
export interface AreaGrapher {
  metricName: string;
  data: Array<DataValue>;
}

const data1: DataValue[] = [
  { date: 1000, value: 20 },
  { date: 2000, value: 30 },
  { date: 3000, value: 35 },
  { date: 4000, value: 40 },
  { date: 5000, value: 50 },
  { date: 6000, value: 74 },
  { date: 7000, value: 30 },
  { date: 8000, value: 10 },
];
const data2: DataValue[] = [
  { date: 1000, value: 40 },
  { date: 2000, value: 10 },
  { date: 3000, value: 55 },
  { date: 4000, value: 60 },
  { date: 5000, value: 20 },
  { date: 6000, value: 14 },
  { date: 7000, value: 60 },
  { date: 8000, value: 10 },
];

// const w:AreaGrapher={date:,value:20}
const seriestest: Array<AreaGrapher> = [
  { metricName: 'chaos-exporter', data: data1 },
];
const seriestest2: Array<AreaGrapher> = [{ metricName: 'heptio', data: data2 }];

// let lineCount: number = 2;

// console.log(seriestest);

// const width = 600;
// const height = 400;
// console.log(seriestest);
function BaseArea() {
  return (
    <div className="App">
      <BrushChart
        width={600}
        height={400}
        closedSeries={seriestest}
        openSeries={seriestest2}
        showPoints={true}
      />
      ,
    </div>
  );
}

export default BaseArea;
