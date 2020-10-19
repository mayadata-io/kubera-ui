import React from 'react';
import { Arc } from '@visx/shape';
import { Group } from '@visx/group';
// import { Chord, Ribbon } from '@visx/chord';
import { scaleOrdinal } from '@visx/scale';
import { LinearGradient } from '@visx/gradient';

const background = '#101217';
const pink = '#ff2fab';
const orange = '#ffc62e';
const purple = '#dc04ff';
const purple2 = '#7324ff';

const green = '#52F995';
const yellow = '#F6B92B';
const red = '#CA2C2C';
// const blue = '#04a6ff';

let pass: number = 40;
let pendeing: number = 20;
let fail: number = 30;

let total: number = pass + pendeing + fail;
// total=0;
let circleOrient: number = 1;
const scalerR: number = circleOrient * Math.PI;

let exprCount = [pass, pendeing, fail];
let radialArc: number[] = exprCount.map((elem, i) => (elem / total) * scalerR);
let showArc: boolean = true;

let startAngel1: number = -(Math.PI / 2);
let currentAngle: number = startAngel1;
console.log(radialArc);

const color = scaleOrdinal<number, string>({
  domain: [0, 1, 2, 3],
  //   range: ['url(#gpinkorange)', 'url(#gpurplered)', 'url(#gpurplegreen)', 'url(#gbluelime)'],
  range: ['url(#green)', 'url(#yellow)', 'url(#red)'],
});

export type ChordProps = {
  width: number;
  height: number;
  centerSize?: number;
  events?: boolean;
};

export default function RadialChart({
  width,
  height,
  centerSize = 40,
  events = false,
}: ChordProps) {
  const outerRadius = Math.min(width, height) * 0.5 - centerSize;
  const innerRadius = outerRadius - centerSize;

  return width < 10 ? null : (
    <div className="chords">
      <svg width={width + 20} height={height + 20}>
        <LinearGradient
          id="gpinkorange"
          from={pink}
          to={orange}
          vertical={false}
        />
        <LinearGradient id="green" from={green} to={green} vertical={false} />
        <LinearGradient
          id="yellow"
          from={yellow}
          to={yellow}
          vertical={false}
        />
        <LinearGradient id="red" from={red} to={red} vertical={false} />

        <LinearGradient
          id="gpurplered"
          from={purple}
          to={red}
          vertical={false}
        />

        <LinearGradient
          id="gpurplegreen"
          from={purple2}
          to={green}
          vertical={false}
        />
        {/* <LinearGradient id="gbluelime" from={blue} to={lime} vertical={false} /> */}
        <LinearGradient
          id="gbluelime1"
          from={green}
          to={red}
          vertical={false}
        />

        <rect
          width={width + 20}
          height={height + 20}
          fill={background}
          rx={14}
        />
        <rect
          width={width / 2 + 60}
          height={circleOrient * (height / 2)}
          fill={'transparent'}
          stroke={'#434343'}
          x={width / 4 - 30}
          y={5}
        />

        <Group top={height / 2} left={width / 2}>
          <Arc
            cornerRadius={2}
            padAngle={0.02}
            // key={`key-${i}`}
            data={true}
            innerRadius={outerRadius + 10}
            outerRadius={outerRadius + 15}
            fill={'url(#gbluelime1)'}
            startAngle={circleOrient * (-Math.PI / 2)}
            endAngle={circleOrient * (Math.PI / 2)}
          />
          {total <= 0 && (
            <Arc
              cornerRadius={2}
              padAngle={0.02}
              // key={`key-${i}`}
              data={true}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              fill={'#434343'}
              startAngle={circleOrient * (-Math.PI / 2)}
              endAngle={circleOrient * (Math.PI / 2)}
            />
          )}

          {showArc &&
            total > 0 &&
            radialArc.map((elem, i) => (
              <Arc
                cornerRadius={2}
                padAngle={0.02}
                key={`key-${i}`}
                data={true}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                fill={color(i)}
                startAngle={currentAngle}
                endAngle={(currentAngle += elem)}
              />
            ))}
          {(currentAngle = startAngel1)}
          {/* {currentAngle=Math.PI} */}
        </Group>

        {circleOrient > 1 && (
          <g>
            <text
              textAnchor="end"
              x={width / 2 + circleOrient * (innerRadius / 4)}
              y={
                circleOrient * innerRadius -
                circleOrient * (innerRadius / 4) -
                circleOrient * 10
              }
              fill="white"
              fontSize={circleOrient * 20}
              fontWeight={400}
              pointerEvents="none"
            >
              Total:
            </text>

            <text
              textAnchor="end"
              x={width / 2 + (circleOrient * innerRadius) / 4}
              y={circleOrient * innerRadius + circleOrient + 10}
              fill="white"
              fontSize={circleOrient * 50}
              fontWeight={400}
              pointerEvents="none"
            >
              {total > 0 && total}
              {total <= 0 && 'NA'}
            </text>
          </g>
        )}
        {circleOrient == 1 && (
          <g>
            <text
              textAnchor="end"
              x={width / 2 + circleOrient * (innerRadius / 4)}
              y={circleOrient * innerRadius}
              fill="white"
              fontSize={circleOrient * 20}
              fontWeight={400}
              pointerEvents="none"
            >
              Total:
            </text>

            <text
              textAnchor="end"
              x={width / 2 + (circleOrient * innerRadius) / 4}
              y={innerRadius * circleOrient + (innerRadius * circleOrient) / 2}
              fill="white"
              fontSize={circleOrient * 50}
              fontWeight={400}
              pointerEvents="none"
            >
              {total > 0 && total}
              {total <= 0 && 'NA'}
            </text>
          </g>
        )}
      </svg>
      <div className="deets"></div>
    </div>
  );
}
