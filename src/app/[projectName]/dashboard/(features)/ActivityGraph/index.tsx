"use client";
import React, { FC } from "react";
import { Chart } from "./components/Chart";
import styles from "./styles.module.scss";
import { ClockType, GraphData } from "./types";
import { BoxContainer } from "@/src/features/BoxContainer";
import { percentage } from "./utils";

type ActivityGraphProps = {
  data: GraphData;
  clockType: ClockType;
  visitors: number;
  visitorsOnePeriodAgo: number;
};

export const ActivityGraph: FC<ActivityGraphProps> = ({
  data,
  clockType,
  visitors,
  visitorsOnePeriodAgo,
}) => {
  const newValue = visitors;
  const valueBefore = visitorsOnePeriodAgo;
  const percentageNumber = ((newValue - valueBefore) / 1) * 100;

  const percentage =
    percentageNumber >= 0
      ? `+${percentageNumber.toFixed(2)}%`
      : `${percentageNumber.toFixed(2)}%`;

  return (
    <BoxContainer
      title="Visitors"
      visitorsCase={{ value: visitors, percentage }}
    >
      <h1>old visitors: {visitorsOnePeriodAgo}</h1>
      <div className={styles.Wrapper_ChartContainer}>
        <Chart data={data} clockType={clockType} />
      </div>
    </BoxContainer>
  );
};
