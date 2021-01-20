import { Bounds } from '@visx/brush/lib/types';
import {
  Brush,
  Line,
  localPoint,
  scaleLinear,
  scaleTime,
  Tooltip,
  useTooltip,
} from '@visx/visx';
import { bisector, extent, max } from 'd3-array';
import dayjs from 'dayjs';
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

let dd1: DataValueString;
let dd0: DataValueString;
let i: number;
let j: number;
let indexer: number;
let toolTipPointLength: number;

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

const brushMargin = { top: 10, bottom: 15, left: 50, right: 20 };
const chartSeparation = 10;
let legenTablePointerData: Array<ToolTipInterface>;

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
  xAxistimeFormat?: string;
  toolTiptimeFormat?: string;
};

const ComputationGraph: React.FC<AreaGraphProps> = ({
  compact = false,
  closedSeries,
  openSeries,
  eventSeries,
  showTips = true,
  showPoints = true,
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
  toolTiptimeFormat = 'MMM D,YYYY h:mm:ss a',
  ...rest
}) => {
  let legenddata: Array<LegendData> = [{ value: [], baseColor: '' }];
  const classes = useStyles({ width, height });

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
      const { x0, x1 } = domain;
      if (filteredClosedSeries) {
        const seriesCopy = filteredClosedSeries
          .map((lineData) =>
            lineData.data.filter((s) => {
              const x = getDateNum(s).getTime();
              return x > x0 && x < x1;
            })
          )
          .map((linedata, i) => ({
            metricName: filteredClosedSeries[i].metricName,
            data: linedata,
            baseColor: filteredClosedSeries[i].baseColor,
          }));

        setFilteredSeries(seriesCopy);
      }

      if (filteredOpenSeries) {
        const seriesCopy = filteredOpenSeries
          .map((lineData) =>
            lineData.data.filter((s) => {
              const x = getDateNum(s).getTime();
              return x > x0 && x < x1;
            })
          )
          .map((linedata, i) => ({
            metricName: filteredOpenSeries[i].metricName,
            data: linedata,
            baseColor: filteredOpenSeries[i].baseColor,
          }));

        setfilteredOpenSeries(seriesCopy);
      }
      if (filteredEventSeries) {
        const seriesCopy = filteredEventSeries
          .map((lineData) =>
            lineData.data.filter((s) => {
              const x = getDateNum(s).getTime();
              return x > x0 && x < x1;
            })
          )
          .map((linedata, i) => ({
            metricName: filteredEventSeries[i].metricName,
            data: linedata,
            baseColor: filteredEventSeries[i].baseColor,
          }));

        setfilteredEventSeries(seriesCopy);
      }
    },
    [filteredClosedSeries, filteredOpenSeries, filteredEventSeries]
  );

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

  // tooltip handler

  const handleTooltip = useCallback(
    (
      event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>
    ) => {
      let dd3: ToolTipInterface[] = [
        { metricName: '', data: dd0, baseColor: '' },
      ];
      if (showTips) {
        let { x, y } = localPoint(event) || { x: 0, y: 0 };
        x = x - margin.left;
        y = y - margin.top;
        const x0 = dateScale.invert(x);
        const y0 = valueScale.invert(y);

        if (firstMouseEnterGraph === false) {
          setMouseEnterGraph(true);
        }
        // dd3 = dd3.slice(0, 0);
        i = 0;
        if (closedSeries) {
          for (j = 0; j < closedSeries.length; j++) {
            indexer = bisectDate(closedSeries[i].data, x0, 1);
            dd0 = closedSeries[j].data[indexer - 1];
            dd1 = closedSeries[j].data[indexer];

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

        dd3 = dd3.sort((a, b) => (a.data.date > b.data.date ? 1 : -1));
        const firstToolTipData = dd3[0];
        dd3 = dd3.filter(
          (elem) =>
            elem.data &&
            firstToolTipData.data &&
            elem.data.date <= firstToolTipData.data.date
        );
        legenTablePointerData = JSON.parse(JSON.stringify(dd3));

        dd3 = dd3.sort((a, b) => (a.data.value > b.data.value ? 1 : -1));

        let index0 = 0;
        let closetValue: number;
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
        const eventToolTip: Array<ToolTipInterface> = [];
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
              eventToolTip[j] = {
                metricName: eventSeries[j].metricName,
                data: dd1,
                baseColor: eventSeries[j].baseColor,
              };
              legenTablePointerData[j + legenTablePointerData.length] =
                eventToolTip[j];
              if (dd1.value !== 'False') {
                dd3[i] = eventToolTip[j];
                i++;
              }
            } else if (
              dd0 &&
              (toolTipPointLength - 1 < 0 ||
                dd0.date === dd3[toolTipPointLength - 1].data.date)
            ) {
              eventToolTip[j] = {
                metricName: eventSeries[j].metricName,
                data: dd0,
                baseColor: eventSeries[j].baseColor,
              };
              legenTablePointerData[j + legenTablePointerData.length] =
                eventToolTip[j];

              if (dd0.value !== 'False') {
                dd3[i] = eventToolTip[j];
                i++;
              }
            }
          }
        }

        dd3 = dd3.slice(0, i);
      }
      if (width < 10) return null;

      showTooltip({
        tooltipData: dd3,
        tooltipLeft:
          dd3[0] && dd3[0].data ? dateScale(getDateNum(dd3[0].data)) : 0,
        tooltipTop:
          dd3[0] && dd3[0].data ? valueScale(getValueNum(dd3[0].data)) : 0,
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
        ? getValueStr(pointerElement.data)
        : firstMouseEnterGraph
        ? '--'
        : getValueStr(linedata.data[linedata.data.length - 1]);

      const avg = '--';

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
  // Comment Afterwards
  // legenddata = legenddata.slice(
  //   0,
  //   (filteredEventSeries ? filteredEventSeries.length : 0) +
  //     (filteredOpenSeries ? filteredOpenSeries.length : 0) +
  //     (filteredClosedSeries ? filteredClosedSeries?.length : 0)
  // );

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
        width: width,
        height: height + legendTableHeight,
      }}
    >
      <svg width={width} height={height}>
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          className={classes.rectBase}
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
          {...rest}
        >
          <Brush
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
            onClick={() => {
              setFilteredSeries(closedSeries);
              setfilteredOpenSeries(openSeries);
              setfilteredEventSeries(eventSeries);
              setAutoRender(true);
            }}
          />
          {showTips && tooltipData && toolTipPointLength >= 1 && (
            <g>
              <circle
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

          {showTips && tooltipData && tooltipData[0] && (
            <Line
              key={`${tooltipData[0].metricName}-toolTipLine`}
              from={{ x: dateScale(getDateNum(tooltipData[0].data)), y: 0 }}
              to={{ x: dateScale(getDateNum(tooltipData[0].data)), y: yMax }}
              className={classes.tooltipLine}
            />
          )}
        </PlotLineAreaGraph>
      </svg>
      {tooltipData && tooltipData[0] && (
        <div>
          <Tooltip
            top={height}
            left={tooltipLeft}
            className={classes.tooltipDateStyles}
          >
            {
              <div className={classes.tooltipData}>
                <span>{` ${dayjs(
                  new Date(getDateNum(tooltipData[0].data))
                ).format(toolTiptimeFormat)}`}</span>
              </div>
            }
          </Tooltip>
          <Tooltip
            top={tooltipTop + margin.top}
            left={tooltipLeft + margin.left}
            className={classes.tooltipMetric}
          >
            {tooltipData.map((linedata) => (
              <div key={`tooltipName-value- ${linedata.metricName}`}>
                <div className={classes.tooltipData}>
                  <hr color={linedata.baseColor} className={classes.hr} />
                  <span>{`${linedata.metricName}:  ${getValueStr(
                    linedata.data
                  )}`}</span>
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
        />
      )}
    </div>
  );
};
export { ComputationGraph };
