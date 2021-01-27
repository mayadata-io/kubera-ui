import { useTheme } from '@material-ui/core';
import { Arc, Group, Text } from '@visx/visx';
import React, { useState } from 'react';
import { LegendData } from '../LegendTable/base';
import { LegendTable } from '../LegendTable/LegendTable';
import { RadialChartProps } from './base';
import { useStyles } from './styles';

export type ChordProps = {
  width: number;
  height: number;
  legendTableHeight?: number;
  centerSize?: number;
  events?: boolean;
  showOuterArc?: boolean;
  semiCircle?: boolean;
  showArc?: boolean;
  showLegend?: boolean;
  radialData: RadialChartProps[];
  heading?: string;
};

const RadialChart = ({
  width,
  height,
  radialData,
  centerSize = 30,
  semiCircle = true,
  showArc = true,
  legendTableHeight = 150,
  showLegend = true,
  heading,
}: ChordProps) => {
  const { palette } = useTheme();

  let legenddata: Array<LegendData> = [{ data: [] }];
  const classes = useStyles();
  const [centerDataValue, setCenterDataValue] = useState<string>('NoData');
  const circleOrient = semiCircle ? 1 : 2;
  const scalerArc: number = circleOrient * Math.PI;
  const startAngle: number = -(Math.PI / 2);
  let currentAngle: number = startAngle;
  const outerRadius =
    (circleOrient == 1 ? Math.max(width, height) : Math.min(width, height)) *
      0.5 -
    centerSize;
  const innerRadius = outerRadius - centerSize;

  const total = radialData
    ? radialData.reduce(
        (previousValue, currentValue) => previousValue + currentValue.value,
        0
      )
    : NaN;
  const radialArc: RadialChartProps[] = radialData
    ? radialData.map((elem) => {
        return {
          value: (total ? elem.value / total : 0) * scalerArc,
          label: elem.label,
          baseColor: elem.baseColor,
        };
      })
    : [{ value: NaN, label: '' }];
  if (centerDataValue === 'NoData' && total > 0) {
    setCenterDataValue(total.toString());
  }

  legenddata = legenddata.splice(0);
  if (radialData) {
    radialData.map((element, index) => {
      if (element.value !== undefined)
        legenddata[index] = {
          data: [element.label, element.value.toString()],
          baseColor: element.baseColor,
        };
    });
  }
  return width < 10 ? null : (
    <div>
      <svg width={width} height={height}>
        <rect
          width={width}
          height={height}
          className={classes.rectBase}
          rx={14}
        />

        <Group top={circleOrient == 1 ? height : height / 2} left={width / 2}>
          {showArc &&
            total > 0 &&
            radialArc &&
            radialArc.map((elem, i) => (
              <g key={`${elem.label}-arc`}>
                <Arc
                  className={classes.radicalArc}
                  data={true}
                  innerRadius={innerRadius}
                  outerRadius={outerRadius}
                  fill={elem.baseColor}
                  startAngle={currentAngle}
                  endAngle={(currentAngle += elem.value)}
                  onMouseEnter={() => {
                    setCenterDataValue(radialData[i].value.toString());
                  }}
                  onMouseLeave={() => setCenterDataValue(total.toString())}
                />
              </g>
            ))}

          {(currentAngle = Math.PI)}
          {showArc && (total == 0 || isNaN(total)) && (
            <Arc
              cornerRadius={2}
              padAngle={0.02}
              data={true}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              fill={palette.disabledBackground}
              startAngle={startAngle}
              endAngle={circleOrient == 1 ? Math.PI / 2 : 2 * Math.PI}
            />
          )}
          <Group
            left={-10 * centerDataValue.toString().length}
            top={circleOrient === 1 ? -32 : 8}
          >
            <Text
              className={`${classes.centerDataValue} ${classes.radialFont}`}
            >
              {centerDataValue}
            </Text>
          </Group>
          {heading && (
            <Group
              left={-5 * heading.length}
              top={circleOrient === 1 ? -8 : 28}
            >
              <Text
                className={`${classes.centerHeading} ${classes.radialFont}`}
              >
                {heading}
              </Text>
            </Group>
          )}
        </Group>
      </svg>

      {showLegend && (
        <LegendTable
          data={legenddata}
          width={width}
          height={legendTableHeight}
        />
      )}
    </div>
  );
};

export { RadialChart };
