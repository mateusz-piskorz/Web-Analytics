"use client";
import React, { FC } from "react";
import { Chart } from "./components/Chart";
import styles from "./styles.module.scss";
import { ClockType, GraphData } from "./types";
import { BoxContainer } from "@/src/features/BoxContainer";

type ActivityGraphProps = {
  data: GraphData;
  clockType: ClockType;
  visitors: number;
};

export const ActivityGraph: FC<ActivityGraphProps> = ({
  data,
  clockType,
  visitors,
}) => {
  return (
    <BoxContainer
      title="Visitors"
      visitorsCase={{ value: visitors, percentage: "+3.94%" }}
    >
      <div className={styles.Wrapper_ChartContainer}>
        <Chart data={data} clockType={clockType} />
      </div>
    </BoxContainer>
  );
};
