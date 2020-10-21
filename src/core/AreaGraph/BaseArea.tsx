import React from 'react';
// import generateDateValue, {
//   DateValue,
// } from '@visx/mock-data/lib/generators/genDateValue';
// import Example2 from "./components/RadialPie-testing-01";
import AreaGraph from './Graph-01';

export interface DataValue {
  date: number;
  value: number;
}
export interface AreaGrapher {
  metricName: string;
  data: DataValue[];
}

const data1: DataValue[] = [
  { date: 1000, value: 20 },
  { date: 2000, value: 30 },
  { date: 3000, value: 35 },
  { date: 4000, value: 40 },
];
const data2: DataValue[] = [
  { date: 1000, value: 40 },
  { date: 2000, value: 10 },
  { date: 3000, value: 55 },
  { date: 4000, value: 60 },
];
const data3: DataValue[] = [
  { date: 1000, value: 50 },
  { date: 2000, value: 60 },
  { date: 3000, value: 85 },
  { date: 4000, value: 90 },
];

// const w:AreaGrapher={date:,value:20}
const seriestest: AreaGrapher[] = [
  { metricName: 'chaos-exporter', data: data1 },
  { metricName: 'heptio-http', data: data2 },
];
const seriestest2: AreaGrapher[] = [{ metricName: 'payment-db', data: data3 }];

console.log(seriestest);

const width = 600;
const height = 400;
console.log(seriestest);
function BaseArea() {
  return (
    <div className="App">
      <AreaGraph
        width={width}
        height={height}
        showLineClosed={true}
        closedSeries={seriestest}
        openSeries={seriestest2}
        showLineOpen={true}
        showPoints={true}
      />
    </div>
  );
}

export default BaseArea;
