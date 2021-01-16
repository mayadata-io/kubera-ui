/* eslint-disable consistent-return */
/* eslint-disable  array-callback-return */
import React from 'react';
import { AreaGrapher } from './base';
import { ComputationGraph } from './ComputationGraph';

// Initialize some variables
const filterUndefinedData = (
  data: AreaGrapher[] | undefined
): AreaGrapher[] | undefined =>
  data
    ? data
        .filter((elem) => elem && elem.data && elem.data.length)
        .filter((elem) =>
          elem.data.filter(
            (d) =>
              d &&
              d.date &&
              typeof d.date === 'number' &&
              typeof d.value === 'number'
          )
        )
    : data;

export type AreaGraphProps = {
  closedSeries?: Array<AreaGrapher>;
  openSeries?: Array<AreaGrapher>;
  eventSeries?: Array<AreaGrapher>;
  showTips?: boolean;
  showPoints?: boolean;
  showGrid?: boolean;
  showLegend?: true;
  legendTableHeight?: number;
  width?: number;
  height?: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  compact?: boolean;

  backgroundTransparent?: boolean;
};

const LineAreaGraph: React.FC<AreaGraphProps> = ({
  compact = false,
  closedSeries,
  openSeries,
  eventSeries,
  height = 200,
  margin = {
    top: 20,
    left: 30,
    bottom: 20,
    right: 30,
  },
  ...rest
}) => {
  // bounds

  // scales

  let augmentEventSeries: Array<AreaGrapher> = [];
  if (eventSeries) {
    augmentEventSeries = JSON.parse(JSON.stringify(eventSeries));
  }
  if (augmentEventSeries) {
    for (let i = 0; i < augmentEventSeries.length; i++) {
      const seriesDataCount = augmentEventSeries[i].data.length;
      for (let j = 0; j < seriesDataCount; j++) {
        if (
          augmentEventSeries[i].data[j].value === 1 &&
          ((j + 1 < augmentEventSeries[i].data.length &&
            augmentEventSeries[i].data[j + 1].value === 0) ||
            j + 1 >= augmentEventSeries[i].data.length) &&
          j - 1 >= 0 &&
          augmentEventSeries[i].data[j - 1].value === 1
        ) {
          augmentEventSeries[i].data[j].value = 0;
        }
      }
    }
  }
  // augmentEventSeries = augmentEventSeries.map((lineData) => ({
  //   metricName: lineData.metricName,
  //   data: lineData.data.sort((a, b) => (a.date > b.date ? 1 : -1)),
  //   baseColor: lineData.baseColor,
  // }));
  // console.log('🚀 augmentEventSeries', augmentEventSeries);

  const augmentClosedSeries: Array<AreaGrapher> =
    filterUndefinedData(closedSeries) ?? [];

  const augmentOpenSeries: Array<AreaGrapher> =
    filterUndefinedData(openSeries) ?? [];
  return (
    <div>
      <ComputationGraph
        closedSeries={augmentClosedSeries}
        openSeries={augmentOpenSeries}
        eventSeries={augmentEventSeries}
        height={height}
        margin={margin}
        compact={compact}
        {...rest}
      />
    </div>
  );
};

export { LineAreaGraph };
