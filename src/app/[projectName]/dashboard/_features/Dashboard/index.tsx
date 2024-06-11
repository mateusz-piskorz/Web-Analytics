import React, { FC } from "react";
import { ActivityGraph } from "@/src/features/ActivityGraph";
import { ActivityList } from "../../_features/ActivityList";
import { PERIODS_AGO } from "@/src/constants";
import { Period } from "@/src/types";
import { countAnalytics } from "./utils";
import style from "./styles.module.scss";
import { getActivityGtePeriod } from "@/src/db/data-access/activity";
import { splitDataByDate } from "@/src/utils";

type DashboardProps = {
  params: { projectName: string };
  analyticPeriod: string;
};

export const Dashboard: FC<DashboardProps> = async ({
  params: { projectName },
  analyticPeriod,
}) => {
  if (!PERIODS_AGO[analyticPeriod as Period]) analyticPeriod = "7";
  const period: Period = analyticPeriod as Period;

  const { activity } = await getActivityGtePeriod(
    projectName,
    PERIODS_AGO[period][1]
  );

  const { newestData, dataOnePeriodAgo } = splitDataByDate(
    activity,
    PERIODS_AGO[period][0]
  );

  const { countries, browsers, OSs } = countAnalytics(newestData);

  return (
    <>
      <ActivityGraph
        data={newestData}
        period={period}
        total={newestData.length}
        totalPeriodAgo={dataOnePeriodAgo.length}
      />
      <div className={style.ActivityListContainer}>
        <ActivityList title="Countries" list={countries} />
        <ActivityList title="Browsers" list={browsers} />
        <ActivityList title="Operating Systems" list={OSs} />
      </div>
    </>
  );
};
