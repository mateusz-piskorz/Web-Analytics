import { AxisBottom, AxisLeft } from "@visx/axis";
import { scaleLinear, scaleUtc } from "@visx/scale";
import { GridRows } from "@visx/grid";
import { max } from "@visx/vendor/d3-array";
import React, { FC, useMemo } from "react";
import { getMinMax } from "../utils";
import { margin } from "../constants";
import { LinePath } from "@visx/shape";

const visitorsData = [
  { x: new Date("2024-04-24"), y: 0 },
  { x: new Date("2024-04-25"), y: 0 },
  { x: new Date("2024-04-26"), y: 5 },
  { x: new Date("2024-04-27"), y: 0 },
  { x: new Date("2024-04-28"), y: 2 },
  { x: new Date("2024-04-29"), y: 5 },
  { x: new Date("2024-04-30"), y: 2 },
];

const xValues = visitorsData.map((e) => e.x);

export const Chart: FC = () => {
  const width = 500;
  const height = 300;
  const xScale = useMemo(
    () =>
      scaleUtc({
        range: [margin, width - margin],
        domain: getMinMax(xValues),
      }),
    [width]
  );
  const yScale = useMemo(
    () =>
      scaleLinear({
        range: [height - margin, margin],
        domain: [0, max(visitorsData, (d: any) => d.y) || 0],
        nice: true,
      }),
    [height]
  );
  return (
    <div>
      <svg width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} />

        <GridRows
          numTicks={2}
          left={margin}
          width={width - margin - margin}
          height={height - margin}
          scale={yScale}
          stroke="#262626"
          z={2}
        />

        <AxisBottom
          hideAxisLine
          hideTicks
          scale={xScale}
          top={height - margin + 5}
          tickLabelProps={{ fill: "white" }}
          tickValues={xValues}
        />

        <AxisLeft
          hideTicks
          hideAxisLine
          tickLabelProps={{ fill: "white" }}
          left={margin}
          scale={yScale}
          numTicks={2}
        />

        <LinePath
          data={visitorsData}
          x={({ x }) => xScale(x)}
          y={({ y }) => yScale(y)}
          strokeDasharray={7}
          strokeWidth={2}
          stroke="#0070F3"
        />
      </svg>
    </div>
  );
};
//
