import { AxisBottom, AxisLeft } from "@visx/axis";
import { scaleLinear, scaleUtc } from "@visx/scale";
import { GridRows } from "@visx/grid";
import { max, bisector } from "@visx/vendor/d3-array";
import React, { FC, useCallback, useMemo } from "react";
import { getMinMax } from "../utils";
import { margin } from "../constants";
import { AreaClosed, Bar, LinePath } from "@visx/shape";
import { localPoint } from "@visx/event/";
import { useTooltip } from "@visx/tooltip";
import { Tooltip } from "./Tooltip";
import useMeasure from "react-use-measure";

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
  const [ref, bounds] = useMeasure();
  const width = bounds.width;
  const height = bounds.height;
  const {
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipLeft = 0,
    tooltipTop = 0,
  } = useTooltip<any>();

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

  const handleTooltip = useCallback(
    (
      event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>
    ) => {
      const { x } = localPoint(event) || { x: 0 };
      const x0 = xScale.invert(x);

      const index = bisector((d: any) => d.x).left(visitorsData, x0, 1);
      const d0 = visitorsData[index - 1];
      const d1 = visitorsData[index];
      let d = d0;

      if (d1 && d.x) {
        d = +x0 - +d0.x > +d1.x - +x0 ? d1 : d0;
      }

      showTooltip({
        tooltipData: d,
        tooltipLeft: xScale(d.x),
        tooltipTop: yScale(d.y),
      });
    },
    [showTooltip, yScale, xScale]
  );
  return (
    <div ref={ref} style={{ height: "100%", position: "relative" }}>
      {width === 0 || height === 0 ? (
        <></>
      ) : (
        <>
          <svg width="100%" height="100%">
            <rect x={0} y={0} width="100%" height="100%" />

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
              tickLabelProps={{ fill: "rgba(255,255,255,.6)" }}
              tickValues={xValues}
            />

            <AxisLeft
              hideTicks
              hideAxisLine
              tickLabelProps={{ fill: "rgba(255,255,255,.6)" }}
              tickFormat={(tick) => tick.toString()}
              left={margin}
              scale={yScale}
              numTicks={2}
            />

            <AreaClosed
              data={visitorsData}
              x={({ x }) => xScale(x)}
              y={({ y }) => yScale(y)}
              yScale={yScale}
              strokeWidth={2}
              fill="rgba(0, 112, 243, 0.15)"
            />

            <LinePath
              data={visitorsData}
              x={({ x }) => xScale(x)}
              y={({ y }) => yScale(y)}
              strokeWidth={2}
              stroke="#0070F3"
            />

            <Bar
              x={margin}
              y={margin}
              width={width - margin}
              height={height - margin}
              fill="transparent"
              onTouchStart={handleTooltip}
              onTouchMove={handleTooltip}
              onMouseMove={handleTooltip}
              onMouseLeave={() => hideTooltip()}
            />
          </svg>
          {tooltipData && (
            <Tooltip
              tooltipData={tooltipData}
              tooltipLeft={tooltipLeft}
              tooltipTop={tooltipTop}
            />
          )}
        </>
      )}
    </div>
  );
};
//
