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
  unit?: string;
  showTips?: boolean;
  showPoints?: boolean;
  showGrid?: boolean;
  showLegend?: true;
  legendTableHeight?: number;
  width?: number;
  height?: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  compact?: boolean;
};

const LineAreaGraph: React.FC<AreaGraphProps> = ({
  compact = false,
  closedSeries,
  openSeries,
  eventSeries,
  height = 200,
  margin = {
    top: 20,
    left: 50,
    bottom: 20,
    right: 20,
  },
  ...rest
}) => {
  // bounds

  // scales

  let augmentEventSeries: Array<AreaGrapher> = [];
  augmentEventSeries = filterUndefinedData(eventSeries) ?? [];

  if (augmentEventSeries) {
    for (let i = 0; i < augmentEventSeries.length; i++) {
      for (let j = 0; j < augmentEventSeries[i].data.length; j++) {
        if (
          augmentEventSeries[i].data[j].value === 1 &&
          (j - 1 < 0 ||
            (j - 1 >= 0 && augmentEventSeries[i].data[j - 1].value === 'False'))
        ) {
          augmentEventSeries[i].data[j].value = 'Start';
        } else if (
          augmentEventSeries[i].data[j].value === 0 &&
          j - 1 >= 0 &&
          (augmentEventSeries[i].data[j - 1].value === 'True' ||
            augmentEventSeries[i].data[j - 1].value === 'Start')
        ) {
          augmentEventSeries[i].data[j].value = 'End';
        } else if (augmentEventSeries[i].data[j].value === 0) {
          augmentEventSeries[i].data[j].value = 'False';
        } else if (augmentEventSeries[i].data[j].value === 1) {
          augmentEventSeries[i].data[j].value = 'True';
        }
      }
    }
  }

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
