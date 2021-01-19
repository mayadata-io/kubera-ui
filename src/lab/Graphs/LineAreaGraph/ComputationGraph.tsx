/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable  array-callback-return */
import { Bounds } from '@visx/brush/lib/types';
import {
  Brush,
  defaultStyles,
  Line,
  localPoint,
  scaleLinear,
  scaleTime,
  Tooltip,
  useTooltip,
} from '@visx/visx';
import { bisector, extent, max } from 'd3-array';
import dayjs from 'dayjs';
// import { timeFormat } from 'd3-time-format';
import React, { useCallback, useMemo, useState } from 'react';
import {
  AreaGrapher,
  DataValueString,
  LegendData,
  ToolTipInterface,
} from './base';
import { LegendTable } from './LegendTable';
import { PlotLineAreaGraph } from './PlotLineAreaGraph';
import { useStyles } from './styles';

type TooltipData = Array<ToolTipInterface>;
// Initialize some variables
// let containerX: number;
// let containerY: number;
// const formatDate = timeFormat("%b %d, '%y");
let dd1: DataValueString;
let dd0: DataValueString;
let i: number;
let j: number;
let indexer: number;
let toolTipPointLength: number;
// const formatDate = timeFormat("%b %d, '%y");

// accessors
// const getDate = (d: DataValue) => new Date(d.date);
// const getValue = (d: DataValue) => d.value;
const getDateNum = (d: DataValueString) =>
  typeof d.date === 'number'
    ? new Date(d.date)
    : new Date(parseInt(d.date, 10));
const getValueNum = (d: DataValueString) =>
  typeof d.value === 'number' ? d.value : parseInt(d.value, 10);

const getValueStr = (d: DataValueString) =>
  typeof d.value === 'number' ? d.value.toFixed(2).toString() : d.value;
//bisectors
const bisectDate = bisector<DataValueString, Date>(
  (d) => new Date(getDateNum(d))
).left;
const bisectValueLeft = bisector<ToolTipInterface, number>((d) =>
  getValueNum(d.data)
).left;
// const bisectValueRight = bisector<ToolTipInterface, number>((d) => d.data.value)
//   .right;
const brushMargin = { top: 10, bottom: 15, left: 50, right: 20 };
const chartSeparation = 10;
let legenTablePointerData: Array<ToolTipInterface>;
const tooltipStyles = {
  ...defaultStyles,
  background: '#2B333B',

  marginTop: '1rem',
  marginLeft: '3rem',
  // border: '1px sol',
  color: 'white',
};
const tooltipDateStyles = {
  ...defaultStyles,
  background: '#5252F6',
  marginTop: '0.5rem',
  // marginLeft: '3rem',
  // border: '1px sol',
  color: 'white',
};

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
    left: 50,
    bottom: 20,
    right: 20,
  },
  legendTableHeight = 200,
  ...rest
}) => {
  let legenddata: Array<LegendData> = [{ value: [], baseColor: '' }];
  // let containerX;
  // let containerY;
  const classes = useStyles({ width, height });
  // const bisectValueRight = bisector<ToolTipInterface, number>(
  //   (d) => d.data.value
  // ).right;
  const [filteredClosedSeries, setFilteredSeries] = useState(closedSeries);
  const [filteredOpenSeries, setfilteredOpenSeries] = useState(openSeries);
  const [filteredEventSeries, setfilteredEventSeries] = useState(eventSeries);
  const [firstMouseEnterGraph, setMouseEnterGraph] = useState(false);
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
              const x = getDateNum(s).getTime();
              const y = getValueNum(s);
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
              const x = getDateNum(s).getTime();
              const y = getValueNum(s);
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
              const x = getDateNum(s).getTime();
              // const y = getValueStr(s);
              // return x > x0 && x < x1 && y > y0 && y < y1;
              return x > x0 && x < x1;
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

  // console.log('container', containerX, containerY);
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
          getDateNum
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
            getValueNum
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
    tooltipLeft = 0,
    tooltipTop = 0,
  } = useTooltip<TooltipData>({
    // initial tooltip state
    tooltipOpen: true,
  });
  const getSum = (total: number, num: number | string) => {
    if (typeof num === 'number') {
      return total + (num || 0);
    } else {
      return total + (parseInt(num, 10) || 0);
    }
  };
  // const getMin = (acc: number, num: number) => {
  //   return acc > num ? num : acc;
  // };
  // const getMax = (acc: number, num: number) => {
  //   return acc < num ? num : acc;
  // };

  // tooltip handler

  const handleTooltip = useCallback(
    (
      event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>
    ) => {
      let dd3: ToolTipInterface[] = [];
      let { x, y } = localPoint(event) || { x: 0, y: 0 };
      x = x - margin.left;
      y = y - margin.top;
      const x0 = dateScale.invert(x);
      const y0 = valueScale.invert(y);
      if (firstMouseEnterGraph === false) {
        setMouseEnterGraph(true);
      }
      // containerX = 'clientX' in event ? event.clientX : 0;
      // containerY = 'clientY' in event ? event.clientY : 0;
      dd3 = dd3.slice(0, 0);
      i = 0;
      if (closedSeries) {
        for (j = 0; j < closedSeries.length; j++) {
          indexer = bisectDate(closedSeries[i].data, x0, 1);
          dd0 = closedSeries[j].data[indexer - 1];
          dd1 = closedSeries[j].data[indexer];
          // console.log('🚀  dd0/1', dd0, dd1);

          if (dd1) {
            dd3[i] =
              x0.valueOf() - getDateNum(dd0).valueOf() >
              getDateNum(dd1).valueOf() - x0.valueOf()
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
              x0.valueOf() - getDateNum(dd0).valueOf() >
              getDateNum(dd1).valueOf() - x0.valueOf()
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

      // if (eventSeries) {
      //   for (j = 0; j < eventSeries.length; j++) {
      //     indexer = bisectDate(eventSeries[j].data, x0, 1);
      //     dd0 = eventSeries[j].data[indexer - 1];
      //     dd1 = eventSeries[j].data[indexer];

      //     if (dd1) {
      //       dd3[i] =
      //         x0.valueOf() - dd0.date > dd1.date - x0.valueOf()
      //           ? {
      //               metricName: eventSeries[j].metricName,
      //               data: dd1,
      //               baseColor: eventSeries[j].baseColor,
      //             }
      //           : {
      //               metricName: eventSeries[j].metricName,
      //               data: dd0,
      //               baseColor: eventSeries[j].baseColor,
      //             };
      //       i++;
      //     }
      //   }
      // }

      dd3 = dd3.sort((a, b) => (a.data.date > b.data.date ? 1 : -1));
      const firstToolTipData = dd3[0];
      dd3 = dd3.filter((elem) => elem.data.date <= firstToolTipData.data.date);
      legenTablePointerData = JSON.parse(JSON.stringify(dd3));
      // console.log('🚀 legenTablePointerData', legenTablePointerData);

      dd3 = dd3.sort((a, b) => (a.data.value > b.data.value ? 1 : -1));
      // console.log(y0, bisectValueLeft);
      // console.log('🚀 dd3', dd3);

      // dd3 = dd3.sort((a: ToolTipInterface, b: ToolTipInterface) =>
      //   a.data.value > b.data.value ? 1 : -1
      // );
      // // console.log('🚀dd3', dd3);
      let index0 = 0;
      let closetValue: number;
      // let index1 = 0;
      let dd00: ToolTipInterface = {
        metricName: '',
        data: { date: NaN, value: NaN },
        baseColor: '',
      };
      let dd11: ToolTipInterface = {
        metricName: '',
        data: { date: NaN, value: NaN },
        baseColor: '',
      };

      index0 = bisectValueLeft(dd3, y0);
      dd00 = dd3[index0];
      dd11 = dd3[index0 - 1];
      if (dd11 && dd00) {
        // index1 = bisectValueRight(dd3, y0);
        // // index1 = bisectValueRight(dd3, y0);
        closetValue =
          Math.abs(y0.valueOf() - getValueNum(dd00.data)) >
          Math.abs(y0.valueOf() - getValueNum(dd11.data))
            ? getValueNum(dd11.data)
            : getValueNum(dd00.data);
      } else if (dd11 && !dd00) {
        closetValue = getValueNum(dd11.data);
      } else if (dd00 && !dd11) {
        closetValue = getValueNum(dd00.data);
      }
      dd3 = dd3.filter((lineData) => lineData.data.value === closetValue);

      toolTipPointLength = dd3.length;
      if (eventSeries) {
        for (j = 0; j < eventSeries.length; j++) {
          indexer = bisectDate(eventSeries[j].data, x0, 1);
          dd0 = eventSeries[j].data[indexer - 1];
          dd1 = eventSeries[j].data[indexer];

          if (
            dd1 &&
            (toolTipPointLength - 1 < 0 ||
              dd1.date === dd3[toolTipPointLength - 1].data.date)
          ) {
            dd3[i] = {
              metricName: eventSeries[j].metricName,
              data: dd1,
              baseColor: eventSeries[j].baseColor,
            };

            i++;
          } else if (
            dd0 &&
            (toolTipPointLength - 1 < 0 ||
              dd0.date === dd3[toolTipPointLength - 1].data.date)
          ) {
            dd3[i] = {
              metricName: eventSeries[j].metricName,
              data: dd0,
              baseColor: eventSeries[j].baseColor,
            };

            i++;
          }
        }
      }
      dd3 = dd3.slice(0, i);

      // console.log('y0', y0);
      // console.log(dd00, dd11);
      if (width < 10) return null;
      // console.log('y0', y0);
      // console.log(dd3[0]);

      // console.log(index0, index1);

      showTooltip({
        tooltipData: dd3,
        tooltipLeft: dateScale(getDateNum(dd3[0].data)),
        tooltipTop: valueScale(getValueNum(dd3[0].data)),
      });
    },
    [showTooltip, dateScale, closedSeries, openSeries, eventSeries, width]
  );
  // legendData
  legenddata = legenddata.splice(0);
  if (filteredEventSeries) {
    filteredEventSeries.map((linedata, index) => {
      const pointerElement = legenTablePointerData
        ? legenTablePointerData.filter(
            (singleMetric) => singleMetric.metricName === linedata.metricName
          )[0]
        : undefined;
      const curr = pointerElement
        ? pointerElement.data.value === 1
          ? 'True'
          : 'False'
        : firstMouseEnterGraph
        ? '--'
        : linedata.data[linedata.data.length - 1].value === 1
        ? 'True'
        : 'False';

      const avg = (
        linedata.data.map((d) => (d.value ? d.value : 0)).reduce(getSum, 0) /
        linedata.data.length
      )
        .toFixed(2)
        .toString();

      if (linedata.data !== undefined)
        legenddata[index] = {
          value: [linedata.metricName, avg, curr],
          baseColor: linedata.baseColor,
        };
    });
  }
  if (filteredClosedSeries) {
    filteredClosedSeries.map((linedata, index) => {
      const pointerElement = legenTablePointerData
        ? legenTablePointerData.filter(
            (singleMetric) => singleMetric.metricName === linedata.metricName
          )[0]
        : undefined;
      const curr = pointerElement
        ? getValueStr(pointerElement.data)
        : firstMouseEnterGraph
        ? '--'
        : getValueStr(linedata.data[linedata.data.length - 1]);
      const avg = (
        linedata.data.map((d) => (d.value ? d.value : 0)).reduce(getSum, 0) /
        linedata.data.length
      )
        .toFixed(2)
        .toString();

      if (linedata.data !== undefined)
        legenddata[index + eventSeriesCount] = {
          value: [linedata.metricName, avg, curr],
          baseColor: linedata.baseColor,
        };
    });
  }

  if (filteredOpenSeries) {
    filteredOpenSeries.map((linedata, index) => {
      const pointerElement = legenTablePointerData
        ? legenTablePointerData.filter(
            (singleMetric) => singleMetric.metricName === linedata.metricName
          )[0]
        : undefined;
      const curr = pointerElement
        ? getValueStr(pointerElement.data)
        : firstMouseEnterGraph
        ? '--'
        : getValueStr(linedata.data[linedata.data.length - 1]);

      const avg = (
        linedata.data.map((d) => (d.value ? d.value : 0)).reduce(getSum, 0) /
        linedata.data.length
      )
        .toFixed(2)
        .toString();

      if (linedata.data !== undefined)
        legenddata[index + eventSeriesCount + closedSeriesCount] = {
          value: [linedata.metricName, avg, curr],
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
    <div
      onMouseLeave={() => hideTooltip()}
      style={{
        width: 600,
        height: 600,
        overflow: 'hidden',
        // background: 'pink',
      }}
    >
      <svg
        width={width}
        height={height}
        onClickCapture={() => console.log('Click')}
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
          {...rest}
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
            // onMouseLeave={() => hideTooltip()}
            // ={()=>console.log('d')}
          />
          {showTips && tooltipData && (
            <g key={`toolTipPointsGroup`}>
              <circle
                key={`${tooltipData[0].metricName}-toolTipPoint`}
                cx={dateScale(getDateNum(tooltipData[0].data))}
                cy={valueScale(getValueNum(tooltipData[0].data))}
                r={7}
                fill={'#5252F6'}
                fillOpacity={1}
                stroke="white"
                strokeOpacity={1}
                strokeWidth={2}
                pointerEvents="none"
              />
            </g>
          )}

          {showTips && tooltipData && (
            <Line
              key={`${tooltipData[0].metricName}-toolTipLine`}
              from={{ x: dateScale(getDateNum(tooltipData[0].data)), y: 0 }}
              to={{ x: dateScale(getDateNum(tooltipData[0].data)), y: yMax }}
              className={classes.tooltipLine}
            />
          )}
        </PlotLineAreaGraph>
      </svg>
      {tooltipData && (
        <div>
          <Tooltip top={height} left={tooltipLeft} style={tooltipDateStyles}>
            {
              <div
                style={{ padding: '5px', display: 'flex' }}
                key={`tooltipDate-${tooltipData[0].metricName}`}
              >
                <div className={classes.tooltipData}>
                  <span
                    style={{ color: 'white', paddingLeft: '0.5em' }}
                  >{` ${dayjs(new Date(getDateNum(tooltipData[0].data))).format(
                    'MMM D,YYYY h:mm:ss a'
                  )}`}</span>
                </div>
              </div>
            }
          </Tooltip>
          <Tooltip
            top={tooltipTop + margin.top}
            left={tooltipLeft + margin.left}
            style={tooltipStyles}
          >
            {tooltipData.map((linedata) => (
              <div
                style={{ padding: '5px', display: 'flex' }}
                key={`tooltipName-value- ${linedata.metricName}`}
              >
                <div className={classes.tooltipData}>
                  <hr color={linedata.baseColor} className={classes.hr} />
                  <span style={{ color: 'white', paddingLeft: '0.5em' }}>{`${
                    linedata.metricName
                  }:  ${getValueStr(linedata.data)}`}</span>
                </div>
              </div>
            ))}
          </Tooltip>
        </div>
      )}

      {showLegend && (
        <LegendTable
          data={legenddata}
          heading={['Metric Name', 'Avg', 'Curr']}
          width={width}
          height={legendTableHeight}
          backgroundTransparent={backgroundTransparent}
        />
      )}
    </div>
  );
};

export { ComputationGraph };
