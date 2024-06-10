"use client";
import React, { FC } from "react";
import { Chart } from "./components/Chart";
import styles from "./styles.module.scss";
import { ClockType, GraphData } from "./types";
import { BoxContainer } from "@/src/features/BoxContainer";
import { countActivity } from "./utils";
import { Period } from "@/src/types";

type ActivityGraphProps = {
  data: GraphData;
  visitors: number;
  visitorsOnePeriodAgo: number;
  period: Period;
};

export const ActivityGraph: FC<ActivityGraphProps> = ({
  data,
  visitors,
  visitorsOnePeriodAgo,
  period,
}) => {
  const newValue = visitors;
  const valueBefore = visitorsOnePeriodAgo;
  const percentage = ((newValue - valueBefore) / 1) * 100;
  const clockType = period === "24" ? "hours" : "days";
  const countedData = countActivity(period, data);
  return (
    <BoxContainer
      title="Visitors"
      h400desktop
      visitorsCase={{ value: visitors, percentage }}
    >
      <div className={styles.Wrapper_ChartContainer}>
        <Chart data={countedData} clockType={clockType} />
      </div>
    </BoxContainer>
  );
};
