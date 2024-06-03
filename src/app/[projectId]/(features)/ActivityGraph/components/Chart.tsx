import React, { FC } from "react";

const visitorsData = [
  { x: new Date("2024-04-24"), y: 0 },
  { x: new Date("2024-04-25"), y: 0 },
  { x: new Date("2024-04-26"), y: 5 },
  { x: new Date("2024-04-27"), y: 0 },
  { x: new Date("2024-04-28"), y: 2 },
  { x: new Date("2024-04-29"), y: 5 },
  { x: new Date("2024-04-30"), y: 2 },
];

export const Chart: FC<{}> = () => {
  return (
    <div>
      <svg width="100%">
        <rect x={0} y={0} width="100%" />
      </svg>
    </div>
  );
};
//
