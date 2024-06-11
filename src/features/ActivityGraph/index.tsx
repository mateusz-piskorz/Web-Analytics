"use client";
import React, { FC } from "react";
import { Chart } from "./components/Chart";
import styles from "./styles.module.scss";
import { GraphData } from "./types";
import { BoxContainer } from "@/src/features/BoxContainer";
import { countActivity } from "./utils";
import { Period } from "@/src/types";
import { PERIODS_AGO } from "@/src/constants";

type ActivityGraphProps = {
  data: GraphData;
  period: Period;
};

export const ActivityGraph: FC<ActivityGraphProps> = ({ data, period }) => {
  const firstIndexOfPreviousPeriod = data.findIndex(
    (e) => e.createdAt.getTime() < PERIODS_AGO[period][0].getTime()
  );

  const newestDat =
    firstIndexOfPreviousPeriod === -1
      ? data
      : data.slice(0, firstIndexOfPreviousPeriod);

  const dataOnePeriodAgo =
    firstIndexOfPreviousPeriod === -1
      ? []
      : data.slice(firstIndexOfPreviousPeriod);

  const visitors = newestDat.length;
  const visitorsOnePeriodAgo = dataOnePeriodAgo.length;

  const percentage = ((visitors - visitorsOnePeriodAgo) / 1) * 100;
  const clockType = period === "24" ? "hours" : "days";
  const countedData = countActivity(period, data);

  return (
    <BoxContainer
      title="Visitors"
      visitorsCase={{ value: visitors, percentage }}
    >
      <div className={styles.Wrapper_ChartContainer}>
        <Chart data={countedData} clockType={clockType} />
      </div>
    </BoxContainer>
  );
};
