// gave working demo
// tried adding multiple colors
// x-y axis added
// sorting data
// multiple line series
// multi toolitip working
import { MarkerCircle } from '@visx/marker';
import React, { useMemo, useCallback } from 'react';
import { AreaClosed, Line, LinePath, Bar } from '@visx/shape';
// import appleStock, { AppleStock } from '@visx/mock-data/lib/mocks/appleStock';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { Tooltip, useTooltip, defaultStyles } from '@visx/tooltip';

import { curveMonotoneX } from '@visx/curve';
import { GridRows, GridColumns } from '@visx/grid';
import { scaleTime, scaleLinear } from '@visx/scale';

// import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import { localPoint } from '@visx/event';
import { LinearGradient } from '@visx/gradient';
import { max, extent, bisector } from 'd3-array';

import generateDateValue, {
  DateValue,
} from '@visx/mock-data/lib/generators/genDateValue';
import { Group } from '@visx/group';

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

const series = generateDateValue(1).sort(
  (a: DateValue, b: DateValue) => a.date.getTime() - b.date.getTime()
);

let plotgraph: number = ClosedlineCount;

let indexer: number;

let dd1: DateValue;
let dd0: DateValue;

let i: number;

let j: number;

// console.log(series);

const getDate = (d: DateValue) => d.date;
const getValue = (d: DateValue) => d.value;
let dd3: DateValue[] = [series[0]];

// scales

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

const bisectDate = bisector<DateValue, Date>((d) => new Date(d.date)).left;
type TooltipData = DateValue[];

export type AreaProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  children?: React.ReactNode;
  showPoints?: boolean;
  showLineOpen?: boolean;
  showLineClosed?: boolean;
  showGrid?: boolean;
  hideLeftAxis?: boolean;
  hideBottomAxis?: boolean;
  shiftL?: number;
  shiftT?: number;
  openSeries?: DateValue[][];
  closedSeries?: DateValue[][];
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
  openSeries,
  closedSeries,
}: AreaProps) => {
  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // scales

  let allData: DateValue[];

  if (closedSeries) {
    allData = closedSeries.reduce((rec, d) => rec.concat(d), []);
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
    [yMax]
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
      let { x, y } = localPoint(event) || { x: 0, y: 0 };
      x = x - shiftL;
      y = y - shiftT;
      const x0 = dateScale.invert(x);
      containerX = ('clientX' in event ? event.clientX : 0) - shiftL;
      containerY = ('clientY' in event ? event.clientY : 0) - shiftT;

      if (showLineClosed && closedSeries) {
        for (i = 0; i < closedSeries.length; i++) {
          indexer = bisectDate(closedSeries[i], x0, 1);
          dd0 = closedSeries[i][indexer - 1];
          dd1 = closedSeries[i][indexer];

          if (dd1 && getDate(dd1)) {
            dd3[i] =
              x0.valueOf() - getDate(dd0).valueOf() >
              getDate(dd1).valueOf() - x0.valueOf()
                ? dd1
                : dd0;
          }
        }
      }
      if (showLineOpen && openSeries) {
        for (j = 0; j < openSeries.length; j++) {
          indexer = bisectDate(openSeries[j], x0, 1);
          dd0 = openSeries[j][indexer - 1];
          dd1 = openSeries[j][indexer];

          if (dd1 && getDate(dd1)) {
            dd3[i] =
              x0.valueOf() - getDate(dd0).valueOf() >
              getDate(dd1).valueOf() - x0.valueOf()
                ? dd1
                : dd0;
            i++;
          }
        }
      }

      if (width < 10) return null;

      // console.log(dd3);

      // const index = bisectDate(allData, x0, 1);
      // const d0 = allData[index - 1];
      // const d1 = allData[index];
      // let d = d0;
      // if (d1 && getDate(d1)) {
      //   d = x0.valueOf() - getDate(d0).valueOf() > getDate(d1).valueOf() - x0.valueOf() ? d1 : d0;

      // }
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

        <LinearGradient
          id="area-gradient-s-0"
          from={accentColor1}
          to={accentColor1}
          toOpacity={0.8}
        />
        <LinearGradient
          id="area-gradient-s-1"
          from={accentColor2}
          to={accentColor2}
          toOpacity={0.8}
        />

        <LinearGradient
          id="area-gradient-l-0"
          from={accentColor3}
          to={accentColor3}
          toOpacity={1}
        />
        <LinearGradient
          id="area-gradient-l-1"
          from={accentColor4}
          to={accentColor4}
          toOpacity={1}
        />

        <LinearGradient
          id="area-gradient-f-0"
          from={accentColor1}
          to={accentColor1}
          fromOpacity={0.5}
          toOpacity={0.1}
        />
        <LinearGradient
          id="area-gradient-f-1"
          from={accentColor2}
          to={accentColor2}
          fromOpacity={0.5}
          toOpacity={0.1}
        />

        <MarkerCircle
          id="marker-circle-0"
          stroke={'white'}
          strokeWidth={0.5}
          fill={accentColor3}
          size={2}
          refX={2}
        />
        <MarkerCircle
          id="marker-circle-1"
          stroke={'white'}
          strokeWidth={0.5}
          fill={accentColor4}
          size={2}
          refX={2}
        />

        {showGrid && (
          <g>
            <GridRows
              scale={valueScale}
              width={width}
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
          </g>
        )}
        <Group left={shiftL}>
          {plotgraph > 0 &&
            showLineClosed &&
            closedSeries &&
            closedSeries.map((linedata, i) => (
              <g key={`${i}abcd`}>
                <AreaClosed<DateValue>
                  data={linedata}
                  x={(d) => dateScale(getDate(d)) ?? 0}
                  y={(d) => valueScale(getValue(d)) ?? 0}
                  yScale={valueScale}
                  strokeWidth={3}
                  stroke={`url(#area-gradient-s-${i % 2})`}
                  fill={`url(#area-gradient-f-${i % 2})`}
                  curve={curveMonotoneX}
                />

                {showPoints &&
                  linedata.map((d, j) => (
                    <g key={`test-oot-${i}-${j}`}>
                      <circle
                        cx={dateScale(getDate(d))}
                        cy={valueScale(getValue(d))}
                        r={5}
                        fill={`url(#area-gradient-s-${i % 2})`}
                        stroke="white"
                        strokeOpacity={0.8}
                        strokeWidth={2}
                        pointerEvents="none"
                        // style={{touchAction:"pan-y", zIndex:10}}
                      />
                    </g>
                    // console.log("hey")
                  ))}
              </g>
            ))}
          {showLineOpen &&
            !showPoints &&
            openSeries &&
            openSeries.map((openLineData, j) => (
              <LinePath<DateValue>
                data={openLineData}
                x={(d) => dateScale(getDate(d)) ?? 0}
                y={(d) => valueScale(getValue(d)) ?? 0}
                strokeWidth={2}
                stroke={`url(#area-gradient-l-${j % 2})`}
                strokeOpacity={0.7}
                curve={curveMonotoneX}
              />
              // (console.log(lineIndex))
            ))}

          {showLineOpen &&
            showPoints &&
            openSeries &&
            openSeries.map((openLineData, j) => (
              <LinePath<DateValue>
                data={openLineData}
                x={(d) => dateScale(getDate(d)) ?? 0}
                y={(d) => valueScale(getValue(d)) ?? 0}
                strokeWidth={2}
                stroke={`url(#area-gradient-l-${j % 2})`}
                strokeOpacity={0.7}
                curve={curveMonotoneX}
                markerMid={`url(#marker-circle-${j % 2})`}
                markerStart={`url(#marker-circle-${j % 2})`}
                markerEnd={`url(#marker-circle-${j % 2})`}
              />
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
                  from={{ x: dateScale(getDate(d)), y: 0 }}
                  to={{ x: dateScale(getDate(d)), y: yMax }}
                  stroke={accentColorDark}
                  strokeWidth={2}
                  pointerEvents="none"
                  strokeDasharray="5,2"
                />

                {/* horizontal line for tooltip */}

                {/* <Line
                            from={{ x: 0, y: valueScale(getValue(d)) }}
                            to={{ x: xMax, y: valueScale(getValue(d)) }}
                            stroke={accentColorDark}
                            strokeWidth={2}
                            pointerEvents="none"
                            strokeDasharray="5,2"
                            /> */}

                <circle
                  cx={dateScale(getDate(d))}
                  cy={valueScale(getValue(d))}
                  r={6}
                  fill={'black'}
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
      </svg>
      {tooltipData && (
        <Tooltip
          top={containerY + shiftT}
          left={containerX + shiftT + 30}
          style={tooltipStyles}
        >
          {dd3.map((d, i) => (
            <div style={{ padding: '5px', display: 'flex' }} key={`bb- ${i}`}>
              {' '}
              {`${i}.  ${getValue(d).toString()} \n `}{' '}
            </div>
          ))}
        </Tooltip>
      )}
    </div>
  );
};

export default AreaGraph;
