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
  const percentage = ((newValue - valueBefore) / 1) * 100;

  return (
    <BoxContainer
      title="Visitors"
      h400desktop
      visitorsCase={{ value: visitors, percentage }}
    >
      <div className={styles.Wrapper_ChartContainer}>
        <Chart data={data} clockType={clockType} />
      </div>
    </BoxContainer>
  );
};
