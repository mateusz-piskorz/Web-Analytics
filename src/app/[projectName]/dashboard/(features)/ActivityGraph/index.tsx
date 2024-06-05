"use client";
import React, { FC } from "react";
import { Chart } from "./components/Chart";
import styles from "./styles.module.scss";
import { ClockType, GraphData } from "./types";

type ActivityGraphProps = {
  data: GraphData;
  clockType: ClockType;
};

export const ActivityGraph: FC<ActivityGraphProps> = ({ data, clockType }) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Wrapper_Header}>
        <div className={styles.Wrapper_Visitors}>
          <span className={styles.Wrapper_VisitorsText}>Visitors</span>
          <span className={styles.Wrapper_VisitorsNumber}>42</span>
        </div>
        <span className={styles.Wrapper_Percentages}>+3.94%</span>
      </div>
      <div className={styles.Wrapper_ChartContainer}>
        <Chart data={data} clockType={clockType} />
      </div>
    </div>
  );
};
