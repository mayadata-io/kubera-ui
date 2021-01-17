/* eslint-disable consistent-return */
/* eslint-disable  array-callback-return */
import { Bounds } from '@visx/brush/lib/types';
import {
  Brush,
  localPoint,
  scaleLinear,
  scaleTime,
  useTooltip,
} from '@visx/visx';
import { bisector, extent, max } from 'd3-array';
import React, { useCallback, useMemo, useState } from 'react';
import { AreaGrapher, DataValue, LegendData, ToolTipInterface } from './base';
import { LegendTable } from './LegendTable';
import { PlotLineAreaGraph } from './PlotLineAreaGraph';
import { useStyles } from './styles';

type TooltipData = Array<ToolTipInterface>;
// Initialize some variables
// let containerX: number;
// let containerY: number;

let dd1: DataValue;
let dd0: DataValue;
let i: number;
let j: number;
let indexer: number;

const bisectDate = bisector<DataValue, Date>((d) => new Date(d.date)).left;

const brushMargin = { top: 10, bottom: 15, left: 50, right: 20 };
const chartSeparation = 10;

// const tooltipStyles = {
//   ...defaultStyles,
//   background: '#0A1818',
//   border: '1px solid white',
//   color: 'white',
// };

// accessors
const getDate = (d: DataValue) => new Date(d.date);
const getValue = (d: DataValue) => d.value;

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

const ComputationGraph: React.FC<AreaGraphProps> = ({
  compact = false,
  backgroundTransparent = false,
  closedSeries,
  openSeries,
  eventSeries,
  showTips = true,
  showPoints = true,
  showGrid = true,
  showLegend = true,
  width = 200,
  height = 200,
  margin = {
    top: 20,
    left: 30,
    bottom: 20,
    right: 30,
  },
  legendTableHeight = 200,
}) => {
  let legenddata: Array<LegendData> = [{ value: [], baseColor: '' }];
  let containerX;
  let containerY;
  const classes = useStyles({ width, height });
  const [filteredClosedSeries, setFilteredSeries] = useState(closedSeries);
  const [filteredOpenSeries, setfilteredOpenSeries] = useState(openSeries);
  const [filteredEventSeries, setfilteredEventSeries] = useState(eventSeries);
  const [dataRender, setAutoRender] = useState(true);

  const closedSeriesCount = filteredClosedSeries
    ? filteredClosedSeries.length
    : 0;

  // const openSeriesCount = filteredOpenSeries ? filteredOpenSeries.length : 0;
  const eventSeriesCount = filteredEventSeries ? filteredEventSeries.length : 0;

  const onBrushChange = useCallback(
    (domain: Bounds | null) => {
      if (!domain) return;
      setAutoRender(false);
      const { x0, x1, y0, y1 } = domain;
      if (filteredClosedSeries) {
        const seriesCopy = filteredClosedSeries
          .map((lineData) =>
            lineData.data.filter((s) => {
              const x = getDate(s).getTime();
              const y = getValue(s);
              return x > x0 && x < x1 && y > y0 && y < y1;
            })
          )
          .map((linedata, i) => ({
            metricName: filteredClosedSeries[i].metricName,
            data: linedata,
            baseColor: filteredClosedSeries[i].baseColor,
          }));

        // .reduce((rec, d) => rec.concat(d), []);

        setFilteredSeries(seriesCopy);
      }

      if (filteredOpenSeries) {
        const seriesCopy = filteredOpenSeries
          .map((lineData) =>
            lineData.data.filter((s) => {
              const x = getDate(s).getTime();
              const y = getValue(s);
              return x > x0 && x < x1 && y > y0 && y < y1;
            })
          )
          .map((linedata, i) => ({
            metricName: filteredOpenSeries[i].metricName,
            data: linedata,
            baseColor: filteredOpenSeries[i].baseColor,
          }));

        // .reduce((rec, d) => rec.concat(d), []);

        setfilteredOpenSeries(seriesCopy);
      }
      if (filteredEventSeries) {
        const seriesCopy = filteredEventSeries
          .map((lineData) =>
            lineData.data.filter((s) => {
              const x = getDate(s).getTime();
              const y = getValue(s);
              return x > x0 && x < x1 && y > y0 && y < y1;
            })
          )
          .map((linedata, i) => ({
            metricName: filteredEventSeries[i].metricName,
            data: linedata,
            baseColor: filteredEventSeries[i].baseColor,
          }));

        // .reduce((rec, d) => rec.concat(d), []);

        setfilteredEventSeries(seriesCopy);
      }
    },
    [filteredClosedSeries, filteredOpenSeries, filteredEventSeries]
  );

  console.log('container', containerX, containerY);
  const innerHeight = height - margin.top - margin.bottom;
  const topChartBottomMargin = compact
    ? chartSeparation / 2
    : chartSeparation + 10;
  const topChartHeight = innerHeight - topChartBottomMargin;

  // bounds
  const xMax = Math.max(width - margin.left - margin.right, 0);
  const yMax = Math.max(topChartHeight, 0);

  // scales

  const dateScale = useMemo(
    () =>
      scaleTime<number>({
        range: [0, xMax],
        domain: extent(
          (filteredClosedSeries
            ? filteredClosedSeries
                .map((linedata) => linedata.data)
                .reduce((rec, d) => rec.concat(d), [])
            : [{ date: NaN, value: NaN }]
          )
            .concat(
              filteredOpenSeries
                ? filteredOpenSeries
                    .map((linedata) => linedata.data)
                    .reduce((rec, d) => rec.concat(d), [])
                : [{ date: NaN, value: NaN }]
            )
            .concat(
              filteredEventSeries
                ? filteredEventSeries
                    .map((linedata) => linedata.data)
                    .reduce((rec, d) => rec.concat(d), [])
                : [{ date: NaN, value: NaN }]
            ),
          getDate
        ) as [Date, Date],
      }),
    [xMax, filteredClosedSeries, filteredOpenSeries, filteredEventSeries]
  );

  const valueScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        domain: [
          0,
          max(
            (filteredClosedSeries
              ? filteredClosedSeries
                  .map((linedata) => linedata.data)
                  .reduce((rec, d) => rec.concat(d), [])
              : [{ date: NaN, value: NaN }]
            ).concat(
              filteredOpenSeries
                ? filteredOpenSeries
                    .map((linedata) => linedata.data)
                    .reduce((rec, d) => rec.concat(d), [])
                : [{ date: NaN, value: NaN }]
            ),
            getValue
          ) || 0,
        ],
        nice: true,
      }),
    [yMax, filteredClosedSeries, filteredOpenSeries]
  );

  //  ToolTip Data
  const {
    showTooltip,
    hideTooltip,

    tooltipData,
    // tooltipLeft,
    // tooltipTop,
  } = useTooltip<TooltipData>({
    // initial tooltip state
    tooltipOpen: true,
  });
  const getSum = (total: number, num: number) => {
    return total + (num || 0);
  };
  const getMin = (acc: number, num: number) => {
    return acc > num ? num : acc;
  };
  const getMax = (acc: number, num: number) => {
    return acc < num ? num : acc;
  };

  // tooltip handler
  let dd3: ToolTipInterface[] = [];

  const handleTooltip = useCallback(
    (
      event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>
    ) => {
      let { x } = localPoint(event) || { x: 0 };
      x = x - margin.left;
      const x0 = dateScale.invert(x);

      containerX = 'clientX' in event ? event.clientX : 0;
      containerY = 'clientY' in event ? event.clientY : 0;
      dd3 = dd3.splice(0);
      i = 0;
      if (closedSeries) {
        for (j = 0; j < closedSeries.length; j++) {
          indexer = bisectDate(closedSeries[i].data, x0, 1);
          dd0 = closedSeries[j].data[indexer - 1];
          dd1 = closedSeries[j].data[indexer];
          // console.log('🚀  dd0/1', dd0, dd1);

          if (dd1) {
            dd3[i] =
              x0.valueOf() - dd0.date > dd1.date - x0.valueOf()
                ? {
                    metricName: closedSeries[i].metricName,
                    data: dd1,
                    baseColor: closedSeries[i].baseColor,
                  }
                : {
                    metricName: closedSeries[i].metricName,
                    data: dd0,
                    baseColor: closedSeries[i].baseColor,
                  };
            i++;
          }
        }
      }
      if (openSeries) {
        for (j = 0; j < openSeries.length; j++) {
          indexer = bisectDate(openSeries[j].data, x0, 1);
          dd0 = openSeries[j].data[indexer - 1];
          dd1 = openSeries[j].data[indexer];
          // console.log('🚀  dd0/1', dd0, dd1);

          if (dd1) {
            dd3[i] =
              x0.valueOf() - dd0.date > dd1.date - x0.valueOf()
                ? {
                    metricName: openSeries[j].metricName,
                    data: dd1,
                    baseColor: openSeries[j].baseColor,
                  }
                : {
                    metricName: openSeries[j].metricName,
                    data: dd0,
                    baseColor: openSeries[j].baseColor,
                  };
            i++;
          }
        }
      }
      // i = 0;

      // if (eventSeries) {
      //   for (let k = 0; k < eventSeries.length; k++) {
      //     indexer = bisectDate(eventSeries[k].data, x0, 1);
      //     dd0 = eventSeries[k].data[indexer - 1];
      //     dd1 = eventSeries[k].data[indexer];

      //     if (dd1) {
      //       dd3[i] =
      //         x0.valueOf() - dd0.date > dd1.date - x0.valueOf()
      //           ? {
      //               metricName: eventSeries[k].metricName,
      //               data: dd1,
      //               baseColor: eventSeries[k].baseColor,
      //             }
      //           : {
      //               metricName: eventSeries[k].metricName,
      //               data: dd0,
      //               baseColor: eventSeries[k].baseColor,
      //             };
      //       i++;
      //     }
      //   }
      // }

      dd3 = dd3.sort((a, b) => (a.data.date > b.data.date ? 1 : -1));
      const firstToolTipData = dd3[0];
      dd3 = dd3.filter((elem) => elem.data.date <= firstToolTipData.data.date);

      console.log('🚀 dd3', dd3);

      if (width < 10) return null;

      showTooltip({
        tooltipData: dd3,
      });
    },
    [showTooltip, dateScale, closedSeries, openSeries, width]
  );
  // legendData
  legenddata = legenddata.splice(0);
  if (filteredEventSeries) {
    filteredEventSeries.map((linedata, index) => {
      const curr =
        eventSeries && eventSeries[index]
          ? eventSeries[index].data[eventSeries[index].data.length - 1].value
              .toFixed(2)
              .toString()
          : 'NaN';

      const avg = (
        linedata.data.map((d) => (d.value ? d.value : 0)).reduce(getSum, 0) /
        linedata.data.length
      )
        .toFixed(2)
        .toString();

      const max = linedata.data
        .map((d) => d.value)
        .reduce(getMax, 0)
        .toFixed(2)
        .toString();

      const min = linedata.data
        .map((d) => d.value)
        .reduce(getMin, parseFloat(max))
        .toFixed(2)
        .toString();

      if (linedata.data !== undefined)
        legenddata[index] = {
          value: [linedata.metricName, min, max, avg, curr],
          baseColor: linedata.baseColor,
        };
    });
  }
  if (filteredClosedSeries) {
    filteredClosedSeries.map((linedata, index) => {
      const curr =
        closedSeries && closedSeries[index]
          ? closedSeries[index].data[closedSeries[index].data.length - 1].value
              .toFixed(2)
              .toString()
          : 'NaN';

      const avg = (
        linedata.data.map((d) => (d.value ? d.value : 0)).reduce(getSum, 0) /
        linedata.data.length
      )
        .toFixed(2)
        .toString();

      const max = linedata.data
        .map((d) => d.value)
        .reduce(getMax, 0)
        .toFixed(2)
        .toString();

      const min = linedata.data
        .map((d) => d.value)
        .reduce(getMin, parseFloat(max))
        .toFixed(2)
        .toString();

      if (linedata.data !== undefined)
        legenddata[index + eventSeriesCount] = {
          value: [linedata.metricName, min, max, avg, curr],
          baseColor: linedata.baseColor,
        };
    });
  }

  if (filteredOpenSeries) {
    filteredOpenSeries.map((linedata, index) => {
      const curr =
        openSeries && openSeries[index]
          ? openSeries[index].data[openSeries[index].data.length - 1].value
              .toFixed(2)
              .toString()
          : 'NaN';

      const avg = (
        linedata.data.map((d) => (d.value ? d.value : 0)).reduce(getSum, 0) /
        linedata.data.length
      )
        .toFixed(2)
        .toString();

      const max = linedata.data
        .map((d) => d.value)
        .reduce(getMax, 0)
        .toFixed(2)
        .toString();

      const min = linedata.data
        .map((d) => d.value)
        .reduce(getMin, parseFloat(max))
        .toFixed(2)
        .toString();

      if (linedata.data !== undefined)
        legenddata[index + eventSeriesCount + closedSeriesCount] = {
          value: [linedata.metricName, min, max, avg, curr],
          baseColor: linedata.baseColor,
        };
    });
  }

  legenddata = legenddata.slice(
    0,
    (filteredEventSeries ? filteredEventSeries.length : 0) +
      (filteredOpenSeries ? filteredOpenSeries.length : 0) +
      (filteredClosedSeries ? filteredClosedSeries?.length : 0)
  );

  if (
    (filteredClosedSeries !== closedSeries ||
      filteredOpenSeries !== openSeries ||
      filteredEventSeries !== eventSeries) &&
    dataRender
  ) {
    setFilteredSeries(closedSeries);
    setfilteredOpenSeries(openSeries);
    setfilteredOpenSeries(eventSeries);
  }
  return (
    <div>
      <svg
        width={width}
        height={height}
        onDoubleClick={() => {
          setFilteredSeries(closedSeries);
          setfilteredOpenSeries(openSeries);
          setfilteredEventSeries(eventSeries);
          setAutoRender(true);
        }}
      >
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          className={
            backgroundTransparent
              ? classes.rectBaseTransparent
              : classes.rectBase
          }
        />

        <PlotLineAreaGraph
          hideBottomAxis={compact}
          showPoints={showPoints}
          closedSeries={filteredClosedSeries}
          openSeries={filteredOpenSeries}
          eventSeries={filteredEventSeries}
          width={width - 20}
          height={yMax}
          margin={{ ...margin, bottom: topChartBottomMargin }}
          yMax={yMax}
          xMax={xMax}
          xScale={dateScale}
          yScale={valueScale}
          showGrid={showGrid}
        >
          <Brush
            key="brush"
            xScale={dateScale}
            yScale={valueScale}
            width={xMax}
            height={yMax}
            margin={brushMargin}
            handleSize={8}
            resizeTriggerAreas={['left', 'right']}
            resetOnEnd
            onBrushEnd={onBrushChange}
            onChange={() => hideTooltip()}
            selectedBoxStyle={{
              fill: 'white',
              stroke: 'white',
              fillOpacity: '0.2',
            }}
            onMouseMove={handleTooltip}
            onMouseLeave={() => hideTooltip()}
          />
          {showTips && tooltipData && (
            <g key={`tooltip-points`}>
              {tooltipData.map((lineData) => (
                <circle
                  key={`${lineData.metricName}-toolTipPoint`}
                  cx={dateScale(getDate(lineData.data))}
                  cy={valueScale(getValue(lineData.data))}
                  r={7}
                  fill={lineData.baseColor}
                  fillOpacity={1}
                  stroke="white"
                  strokeOpacity={0.5}
                  strokeWidth={2}
                  pointerEvents="none"
                />
              ))}
            </g>
          )}
        </PlotLineAreaGraph>
        {/* {tooltipData && (
          <Tooltip top={containerY} left={containerX} style={tooltipStyles}>
            {dd3.map((d, i) => (
              <g style={{ padding: '5px', display: 'flex' }} key={`bb- ${i}`}>
                <g className={classes.tooltipData}>
                  <hr color={'red'} className={classes.hr} />
                  <Text fill={'white'}>
                    {`${d.metricName}:  ${getValue(d.data[0]).toString()}`}
                  </Text>
                </g>
              </g>
            ))}
          </Tooltip>
        )} */}
      </svg>
      {/* {tooltipData && (
        <Tooltip top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
          {tooltipData.map((d, i) => (
            <div
              style={{ padding: '5px', display: 'flex' }}
              key={`tooltip- ${d.metricName}`}
            >
              <div className={classes.tooltipData}>
                <hr color={'red'} className={classes.hr} />
                <span style={{ color: 'white', paddingLeft: '0.5em' }}>{`${
                  d.metricName
                }:  ${getValue(d.data[0]).toFixed(2)}`}</span>
              </div>
            </div>
          ))}
          {console.log('xy:', tooltipLeft, tooltipTop)}
        </Tooltip>
      )} */}

      {showLegend && (
        <LegendTable
          data={legenddata}
          heading={['', 'Min', 'Max', 'Avg', 'Curr']}
          width={width}
          height={legendTableHeight}
          backgroundTransparent={backgroundTransparent}
        />
      )}
    </div>
  );
};

export { ComputationGraph };
