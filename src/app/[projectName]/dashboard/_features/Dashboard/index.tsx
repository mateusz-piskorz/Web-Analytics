import React, { FC } from "react";
import { ActivityGraph } from "@/src/features/ActivityGraph";
import { ActivityList } from "../../_features/ActivityList";
import { PERIODS_AGO } from "@/src/constants";
import { Period } from "@/src/types";
import { countAnalytics, countActivity } from "./utils";
import style from "./styles.module.scss";
import { getActivityGtePeriod } from "@/src/db/data-access/activity";

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
  const isHour = period === "24";

  const { activity } = await getActivityGtePeriod(
    projectName,
    PERIODS_AGO[period][0]
  );

  const myLastIndex = activity.findIndex(
    (e) => e.createdAt.getTime() < PERIODS_AGO[period][0].getTime()
  );

  const newestAnalytic =
    myLastIndex === -1 ? activity : activity.slice(0, myLastIndex);

  const analyticOnePeriodAgo =
    myLastIndex === -1 ? [] : activity.slice(myLastIndex);

  const { countries, browsers, OSs } = countAnalytics(newestAnalytic);

  return (
    <>
      <ActivityGraph
        visitors={newestAnalytic.length}
        visitorsOnePeriodAgo={analyticOnePeriodAgo.length}
        data={newestAnalytic}
        period={period}
      />
      <div className={style.ActivityListContainer}>
        <ActivityList title="Countries" list={countries} />
        <ActivityList title="Browsers" list={browsers} />
        <ActivityList title="Operating Systems" list={OSs} />
      </div>
    </>
  );
};
