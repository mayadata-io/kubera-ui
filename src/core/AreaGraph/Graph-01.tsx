// added multiple colors version 19- tooltip with color legend
// x-y axis added
// sorting data
// multiple line series
// multi toolitip working
import { MarkerCircle } from '@visx/marker';
import React, { useMemo, useCallback } from 'react';
import { AreaClosed, Line, LinePath, Bar } from '@visx/shape';
// import appleStock, { AppleStock } from '@visx/mock-data/lib/mocks/appleStock';
import { AxisLeft, AxisBottom, AxisRight } from '@visx/axis';
import { Tooltip, useTooltip, defaultStyles } from '@visx/tooltip';
import { curveMonotoneX } from '@visx/curve';
import { GridRows, GridColumns } from '@visx/grid';
import { scaleTime, scaleLinear } from '@visx/scale';
import { localPoint } from '@visx/event';
import { LinearGradient } from '@visx/gradient';
import { max, extent, bisector } from 'd3-array';
import { Group } from '@visx/group';
import { AreaGrapher, DataValue } from './BaseArea';

export const background = '#0A1818';
export const background2 = '#0A1818';
export const accentColor = '#08BBD7';
export const accentColorDark = '#08BBD7';

export const accentColor1 = '#08BBD7';
export const accentColor2 = '#F6B92B';
export const accentColor3 = '#E73939';
export const accentColor4 = '#AD51C3';

// const OpenlineCount = 1;
const ClosedlineCount = 1;

let containerX: number;
let containerY: number;

const axisColor = '#fff';

const axisBottomTickLabelProps = {
  textAnchor: 'middle' as const,
  fontFamily: 'Arial',
  fontSize: 10,
  fill: axisColor,
};
const axisLeftTickLabelProps = {
  dx: '-0.5em' ?? '-0.3em',
  dy: '0.25em',
  fontFamily: 'Arial',
  fontSize: 10,
  textAnchor: 'end' as const,
  fill: axisColor,
};

const axisRightTickLabelProps = {
  dx: '2em' ?? '0.5em',
  dy: '0.25em',
  fontFamily: 'Arial',
  fontSize: 10,
  textAnchor: 'end' as const,
  fill: axisColor,
};
// const series = generateDateValue(1).sort(
//   (a: AreaGrapher, b: AreaGrapher) => a.date.getTime() - b.date.getTime()
// );

const plotgraph: number = ClosedlineCount;

let indexer: number;

let dd1: DataValue;
let dd0: DataValue;

let i: number;

let j, k: number;

// console.log(series);

const getDate = (d: DataValue) => new Date(d.date * 1000);
const getValue = (d: DataValue) => d.value;
const a: AreaGrapher = {
  metricName: 'metric11',
  data: [{ date: 10, value: 10 }],
};
const dd3: AreaGrapher[] = [a];

// scales

const colorArr: string[] = [
  accentColor1,
  accentColor2,
  accentColor3,
  accentColor4,
];
export type CurveProps = {
  width: number;
  height: number;
  // showControls?: boolean;
};

// let colorArr: string[] = ['#08BBD7', '#F6B92B'];
const tooltipStyles = {
  ...defaultStyles,
  background,
  border: '1px solid white',
  color: 'white',
};

const bisectDate = bisector<DataValue, Date>((d) => new Date(d.date * 1000))
  .left;
type TooltipData = AreaGrapher[];

export type AreaProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  children?: React.ReactNode;
  showLineOpen?: boolean;
  showLineClosed?: boolean;

  shiftL?: number;
  shiftT?: number;
  openSeries?: AreaGrapher[];
  closedSeries?: AreaGrapher[];

  showPoints?: boolean;
  showGrid?: boolean;
  hideLeftAxis?: boolean;
  hideBottomAxis?: boolean;
  hideRightAxis?: boolean;
};

const AreaGraph = ({
  width,
  height,
  shiftL = 40,
  shiftT = 15,
  margin = { top: shiftT, right: shiftL, bottom: shiftT, left: shiftL },
  showPoints = true,
  showLineOpen = true,
  showLineClosed = true,
  showGrid = true,
  hideLeftAxis = false,
  hideBottomAxis = false,
  hideRightAxis = false,
  openSeries,
  closedSeries,
}: AreaProps) => {
  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // scales

  let allData: DataValue[];

  if (closedSeries) {
    allData = closedSeries
      .map((linedata) => linedata.data)
      .reduce((rec, d) => rec.concat(d), []);
    k = closedSeries.length;
  }

  const dateScale = useMemo(
    () =>
      scaleTime({
        range: [0, xMax],
        domain: extent(allData, getDate) as [Date, Date],
      }),
    [xMax]
  );
  const valueScale = useMemo(
    () =>
      scaleLinear({
        range: [yMax, 0],
        domain: [0, (max(allData, getValue) || 0) + yMax / 3],
        nice: true,
      }),
    [yMax, a]
  );
  //
  const {
    showTooltip,
    hideTooltip,

    tooltipData,
  } = useTooltip<TooltipData>({
    // initial tooltip state
    tooltipOpen: true,

    // tooltipData: 'Move me with your mouse or finger',
  });
  // tooltip handler
  const handleTooltip = useCallback(
    (
      event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>
    ) => {
      let { x } = localPoint(event) || { x: 0 };
      x = x - shiftL;
      //   y = y - shiftT;
      const x0 = dateScale.invert(x);

      containerX = ('clientX' in event ? event.clientX : 0) - shiftL;
      containerY = ('clientY' in event ? event.clientY : 0) - shiftT;

      if (showLineClosed && closedSeries) {
        for (i = 0; i < closedSeries.length; i++) {
          indexer = bisectDate(closedSeries[i].data, x0, 1);
          console.log('indeex', indexer);
          dd0 = closedSeries[i].data[indexer - 1];
          dd1 = closedSeries[i].data[indexer];
          // console.log(dd0)
          if (dd1 && getDate(dd1)) {
            dd3[i] =
              x0.valueOf() - getDate(dd0).valueOf() >
              getDate(dd1).valueOf() - x0.valueOf()
                ? { metricName: closedSeries[i].metricName, data: [dd1] }
                : { metricName: closedSeries[i].metricName, data: [dd0] };
          }
        }
        // console.log("dd3",dd3)
      }
      if (showLineOpen && openSeries) {
        for (j = 0; j < openSeries.length; j++) {
          indexer = bisectDate(openSeries[j].data, x0, 1);
          dd0 = openSeries[j].data[indexer - 1];
          dd1 = openSeries[j].data[indexer];

          if (dd1 && getDate(dd1)) {
            dd3[i] =
              x0.valueOf() - getDate(dd0).valueOf() >
              getDate(dd1).valueOf() - x0.valueOf()
                ? { metricName: openSeries[j].metricName, data: [dd1] }
                : { metricName: openSeries[j].metricName, data: [dd0] };
            i++;
          }
        }
      }

      if (width < 10) return null;

      showTooltip({
        tooltipData: dd3,
      });
    },
    [showTooltip, valueScale, dateScale]
  );

  return (
    <div>
      <svg width={width} height={height}>
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill="url(#area-background-gradient)"
          rx={14}
        />
        <LinearGradient
          id="area-background-gradient"
          from={background}
          to={background2}
        />
        {showGrid && (
          <Group left={shiftL}>
            <GridRows
              scale={valueScale}
              width={xMax}
              strokeDasharray="1,1"
              stroke={accentColor}
              strokeOpacity={0.3}
              pointerEvents="none"
            />
            <GridColumns
              scale={dateScale}
              height={yMax}
              strokeDasharray="1,1"
              stroke={accentColor}
              strokeOpacity={0.3}
              pointerEvents="none"
            />
          </Group>
        )}
        <Group left={shiftL}>
          {plotgraph > 0 &&
            showLineClosed &&
            closedSeries &&
            closedSeries.map((linedata, i) => (
              <g key={`${i}abcd`}>
                <LinearGradient
                  id={`${i}-linearGragient`}
                  from={colorArr[i]}
                  to={colorArr[i]}
                  fromOpacity={0.5}
                  toOpacity={0.1}
                />
                <AreaClosed<DataValue>
                  data={linedata.data}
                  x={(d) => dateScale(getDate(d)) ?? 0}
                  y={(d) => valueScale(getValue(d)) ?? 0}
                  yScale={valueScale}
                  strokeWidth={3}
                  stroke={colorArr[i]}
                  strokeOpacity={0.8}
                  fill={`url(#${i}-linearGragient)`}
                  curve={curveMonotoneX}
                />

                {showPoints &&
                  linedata.data.map((d, j) => (
                    <g key={`test-oot-${i}-${j}`}>
                      <circle
                        cx={dateScale(getDate(d))}
                        cy={valueScale(getValue(d))}
                        r={5}
                        fill={colorArr[i]}
                        fillOpacity={0.6}
                        pointerEvents="none"
                      />
                    </g>
                  ))}
              </g>
            ))}
          {showLineOpen &&
            !showPoints &&
            openSeries &&
            openSeries.map((openLineData, j) => (
              <LinePath<DataValue>
                key={`${j}-linePath`}
                data={openLineData.data}
                x={(d) => dateScale(getDate(d)) ?? 0}
                y={(d) => valueScale(getValue(d)) ?? 0}
                strokeWidth={2}
                stroke={colorArr[k + j]}
                strokeOpacity={0.7}
                curve={curveMonotoneX}
              />
              // (console.log(lineIndex))
            ))}

          {showLineOpen &&
            showPoints &&
            openSeries &&
            openSeries.map((openLineData, j) => (
              <g key={`${j}-group-open`}>
                <MarkerCircle
                  id={`${j}-circle`}
                  // stroke={'white'}
                  // strokeWidth={0.5}
                  fill={colorArr[j + k]}
                  size={2.5}
                  refX={2.5}
                  fillOpacity={0.6}
                />
                <LinePath<DataValue>
                  data={openLineData.data}
                  x={(d) => dateScale(getDate(d)) ?? 0}
                  y={(d) => valueScale(getValue(d)) ?? 0}
                  strokeWidth={2}
                  stroke={colorArr[j + k]}
                  strokeOpacity={0.7}
                  curve={curveMonotoneX}
                  markerMid={`url(#${j}-circle)`}
                  markerStart={`url(#${j}-circle)`}
                  markerEnd={`url(#${j}-circle)`}
                />
              </g>
              // (console.log(lineIndex))
            ))}

          <Bar
            x={0}
            y={0}
            width={width}
            height={height}
            fill="transparent"
            opacity={1}
            rx={14}
            onTouchStart={handleTooltip}
            onTouchMove={handleTooltip}
            onMouseMove={handleTooltip}
            onMouseLeave={() => hideTooltip()}
            style={{ zIndex: 10 }}
          />

          {tooltipData &&
            dd3.map((d, i) => (
              <g key={`${i}-tooltip`}>
                {/* vertical line for toolitip */}
                <Line
                  from={{ x: dateScale(getDate(d.data[0])), y: 0 }}
                  to={{ x: dateScale(getDate(d.data[0])), y: yMax }}
                  stroke={accentColorDark}
                  strokeWidth={2}
                  pointerEvents="none"
                  strokeDasharray="5,2"
                />
                <circle
                  cx={dateScale(getDate(d.data[0]))}
                  cy={valueScale(getValue(d.data[0]))}
                  r={7}
                  fill={colorArr[i]}
                  fillOpacity={0.5}
                  stroke="white"
                  strokeOpacity={0.5}
                  strokeWidth={2}
                  pointerEvents="none"
                />
              </g>
            ))}
        </Group>
        {!hideBottomAxis && (
          <AxisBottom
            top={yMax}
            scale={dateScale}
            numTicks={width > 520 ? 10 : 5}
            stroke={axisColor}
            tickStroke={axisColor}
            tickLabelProps={() => axisBottomTickLabelProps}
            left={shiftL}
          />
        )}
        {!hideLeftAxis && (
          <AxisLeft
            scale={valueScale}
            numTicks={5}
            stroke={axisColor}
            tickStroke={axisColor}
            tickLabelProps={() => axisLeftTickLabelProps}
            left={shiftL}
          />
        )}
        {!hideRightAxis && (
          <AxisRight
            scale={valueScale}
            numTicks={5}
            stroke={axisColor}
            tickStroke={axisColor}
            tickLabelProps={() => axisRightTickLabelProps}
            left={shiftL + xMax}
          />
        )}
      </svg>
      {tooltipData && (
        <Tooltip
          top={containerY + shiftT}
          left={containerX + shiftT + 30}
          style={tooltipStyles}
        >
          {dd3.map((d, i) => (
            <div style={{ padding: '5px', display: 'flex' }} key={`bb- ${i}`}>
              <div
                style={{
                  float: 'left',
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <hr
                  color={colorArr[i]}
                  style={{ width: '10px', height: '1px' }}
                />
                <span style={{ color: 'white', paddingLeft: '0.5em' }}>{`${
                  d.metricName
                }:  ${getValue(d.data[0]).toString()}`}</span>
              </div>
            </div>
          ))}
        </Tooltip>
      )}
    </div>
  );
};

export default AreaGraph;
