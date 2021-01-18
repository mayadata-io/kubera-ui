import {
  AreaClosed,
  AxisBottom,
  AxisLeft,
  AxisRight,
  AxisScale,
  curveMonotoneX,
  curveStepAfter,
  GridColumns,
  GridRows,
  Group,
  Line,
  LinearGradient,
  LinePath,
  MarkerCircle,
  Polygon,
} from '@visx/visx';
import React from 'react';
import { AreaGrapher, DataValue } from './base';
import { useStyles } from './styles';
// Initialize some variables
const axisColor = '#777777';
const axisTextColor = '#B9B9B9';

const axisBottomTickLabelProps = {
  dy: '0.3rem',
  textAnchor: 'middle' as const,
  fontFamily: 'Ubuntu',
  fontSize: '12px',
  fontWeight: 400,
  // stroke: axisColor,
  fill: axisTextColor,
  lineHeight: '12px',
  // opacity: 0.7,
};
const axisLeftTickLabelProps = {
  dx: '-0.25em',
  dy: '0.25em',
  fontFamily: 'Ubuntu',
  fontWeight: 400,
  fontSize: '10px',
  textAnchor: 'end' as const,
  lineHeight: '12px',
  fill: axisTextColor,

  // opacity: 0.7,
};
const axisRightTickLabelProps = {
  dx: '1.5em',
  dy: '0.25em',
  fontFamily: 'Ubuntu',
  fontWeight: 400,
  fontSize: '10px',
  textAnchor: 'end' as const,
  lineHeight: '12px',
  fill: axisTextColor,

  // opacity: 0.7,
};

// accessors
const getDate = (d: DataValue) => new Date(d.date);
const getStockValue = (d: DataValue) => d.value;
let numValue = '';
interface AreaChartProps {
  data?: Array<AreaGrapher>;
  xScale: AxisScale<number>;
  yScale: AxisScale<number>;
  closedSeries?: Array<AreaGrapher>;
  openSeries?: Array<AreaGrapher>;
  eventSeries?: Array<AreaGrapher>;
  showGrid?: boolean;
  width: number;
  height: number;
  yMax: number;
  xMax: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  hideBottomAxis?: boolean;
  hideLeftAxis?: boolean;
  hideRightAxis?: boolean;
  top?: number;
  left?: number;
  showPoints: boolean;
}

const PlotLineAreaGraph: React.FC<AreaChartProps> = ({
  height,
  width,
  closedSeries,
  openSeries,
  eventSeries,
  yMax,
  xMax,
  margin,
  xScale,
  yScale,
  hideBottomAxis = false,
  hideLeftAxis = false,
  hideRightAxis = false,
  top,
  left,
  children,
  showPoints = true,
  showGrid = true,
}) => {
  const classes = useStyles();
  // const yMaxValue = yScale.domain()[1];
  if (width < 10) return null;
  const intToString = (value: number) => {
    const suffixes = ['', 'k', 'm', 'b', 't'];

    const suffixNum = Math.floor(
      Math.floor(Math.abs(value)).toString().length / 3
    );

    const shortValue = parseFloat(
      (suffixNum !== 0 ? value / 1000 ** suffixNum : value).toPrecision(1)
    );
    numValue = shortValue.toString();
    if (shortValue % 1 !== 0) {
      numValue = shortValue.toFixed(1);
    }
    return `${numValue}${suffixes[suffixNum]}`;
  };
  numValue = '';

  return (
    <Group left={left || margin?.left} top={top || margin?.top}>
      {showGrid && (
        <Group>
          <GridRows
            scale={yScale}
            width={xMax}
            className={classes.grid}
            pointerEvents="none"
          />
          <GridColumns
            scale={xScale}
            height={height}
            className={classes.grid}
            pointerEvents="none"
          />
        </Group>
      )}
      {closedSeries &&
        closedSeries.length > 0 &&
        closedSeries.map((linedata, i) => (
          <Group key={`${linedata.metricName}-group`}>
            <LinearGradient
              id={`${i}-linearGragient`}
              from={linedata.baseColor}
              to={linedata.baseColor}
              fromOpacity={0.5}
              toOpacity={0.1}
            />

            <AreaClosed<DataValue>
              key={`${linedata.metricName}-line`}
              data={linedata.data}
              x={(d) => xScale(getDate(d)) || 0}
              y={(d) => yScale(getStockValue(d)) || 0}
              yScale={yScale}
              strokeWidth={2}
              stroke={linedata.baseColor}
              fill={`url(#${i}-linearGragient)`}
              curve={curveMonotoneX}
            />

            {showPoints &&
              linedata.data.map((d) => (
                <g
                  key={`dataPoint-${d.date}-${d.value}-${linedata.metricName}`}
                >
                  <circle
                    cx={xScale(getDate(d))}
                    cy={yScale(getStockValue(d))}
                    r={5}
                    fill={linedata.baseColor}
                    fillOpacity={0.7}
                    pointerEvents="none"
                  />
                </g>
              ))}
          </Group>
        ))}
      {!hideBottomAxis && (
        <AxisBottom
          top={yMax}
          scale={xScale}
          numTicks={width > 520 ? 6 : 5}
          stroke={axisColor}
          tickLabelProps={() => axisBottomTickLabelProps}
        />
      )}
      {!hideLeftAxis && (
        <AxisLeft
          scale={yScale}
          numTicks={4}
          stroke={axisColor}
          tickFormat={(num) => intToString(num)}
          tickLabelProps={() => axisLeftTickLabelProps}
        />
      )}
      {!hideRightAxis && (
        <AxisRight
          left={width - 40}
          scale={yScale}
          numTicks={4}
          stroke={axisColor}
          tickLabelProps={() => axisRightTickLabelProps}
          tickFormat={(num) => intToString(num)}
          orientation="right"
        />
      )}
      {eventSeries &&
        eventSeries.length > 0 &&
        eventSeries.map((linedata, i) => (
          <Group key={`${linedata.metricName}-eventSeries`}>
            <LinearGradient
              id={`${i}-linearGragient-eventSeries`}
              from={linedata.baseColor}
              to={linedata.baseColor}
              fromOpacity={0.1}
              toOpacity={0.1}
            />

            <AreaClosed<DataValue>
              key={`${linedata.metricName}-eventSeries`}
              data={linedata.data}
              x={(d) => xScale(getDate(d)) || 0}
              y={(d) => yScale(yScale.domain()[getStockValue(d)]) ?? 0}
              yScale={yScale}
              // strokeWidth={2}
              // stroke={linedata.baseColor}
              fill={`url(#${i}-linearGragient-eventSeries)`}
              curve={curveStepAfter}
            />

            {showPoints &&
              linedata.data.map((d, pointIndex) => (
                <g
                  key={`dataPoint-${d.date}-${d.value}-${linedata.metricName}`}
                >
                  {((linedata.data[pointIndex].value === 1 &&
                    (pointIndex - 1 < 0 ||
                      (linedata.data[pointIndex - 1] &&
                        linedata.data[pointIndex - 1].value === 0))) ||
                    (linedata.data[pointIndex].value === 0 &&
                      linedata.data[pointIndex - 1] &&
                      linedata.data[pointIndex - 1].value === 1)) && (
                    <g>
                      <Polygon
                        sides={3}
                        size={6}
                        stroke={linedata.baseColor}
                        opacity={0.6}
                        strokeWidth={5}
                        center={{
                          x: xScale(getDate(d)) ?? 0,
                          y: yScale(0) ?? 0,
                        }}
                        fill={linedata.baseColor}
                        pointerEvents="none"
                        rotate={90}
                        style={{ strokeLinejoin: 'round' }}
                      />
                      <Line
                        from={{ x: xScale(getDate(d)), y: 0 }}
                        to={{
                          x: xScale(getDate(d)),
                          y: yMax,
                        }}
                        stroke={linedata.baseColor}
                        strokeWidth={1}
                      />
                    </g>
                  )}
                  )
                </g>
              ))}
          </Group>
        ))}
      {openSeries &&
        openSeries.length > 0 &&
        openSeries.map((openLineData, j) => (
          <g key={`${openLineData.metricName}-group-open`}>
            <MarkerCircle
              id={`${j}-circle`}
              fill={openLineData.baseColor}
              size={2.5}
              refX={2.5}
              fillOpacity={0.6}
            />
            <LinePath<DataValue>
              data={openLineData.data}
              x={(d) => xScale(getDate(d)) ?? 0}
              y={(d) => yScale(getStockValue(d)) ?? 0}
              strokeWidth={2}
              stroke={openLineData.baseColor}
              strokeOpacity={0.7}
              curve={curveMonotoneX}
              markerMid={showPoints ? `url(#${j}-circle)` : undefined}
              markerStart={showPoints ? `url(#${j}-circle)` : undefined}
              markerEnd={showPoints ? `url(#${j}-circle)` : undefined}
            />
          </g>
        ))}

      {children}
    </Group>
  );
};

export { PlotLineAreaGraph };
