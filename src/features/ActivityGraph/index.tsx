"use client";
import React, { FC } from "react";
import { Chart } from "./components/Chart";
import styles from "./styles.module.scss";
import { GraphData } from "./types";
import { BoxContainer } from "@/src/features/BoxContainer";
import { countActivity } from "./utils";
import { Period } from "@/src/types";

type ActivityGraphProps = {
  data: GraphData;
  period: Period;
  total: number;
  totalPeriodAgo: number;
};

export const ActivityGraph: FC<ActivityGraphProps> = ({
  data,
  period,
  total,
  totalPeriodAgo,
}) => {
  const percentage = ((total - totalPeriodAgo) / 1) * 100;
  const clockType = period === "24" ? "hours" : "days";
  const countedData = countActivity(period, data);

  return (
    <BoxContainer title="Visitors" chartCase={{ value: total, percentage }}>
      <div className={styles.Wrapper_ChartContainer}>
        <Chart data={countedData} clockType={clockType} />
      </div>
    </BoxContainer>
  );
};
