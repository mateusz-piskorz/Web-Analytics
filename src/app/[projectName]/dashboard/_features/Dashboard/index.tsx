import React, { FC } from "react";
import { ActivityGraph } from "@/src/features/ActivityGraph";
import { ActivityList } from "../../_features/ActivityList";
import { PERIODS_AGO } from "@/src/constants";
import { Period } from "@/src/types";
import { countAnalytics, countActivity } from "./utils";
import style from "./styles.module.scss";
import { getProject } from "@/src/db/data-access/project";
import { getActivityGtePeriod } from "@/src/db/data-access/analytic";

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

  const project = await getProject(projectName);

  const analytic = await getActivityGtePeriod(
    project.id,
    PERIODS_AGO[period][0]
  );

  const myLastIndex = analytic.findIndex(
    (e) => e.createdAt.getTime() < PERIODS_AGO[period][0].getTime()
  );

  const newestAnalytic =
    myLastIndex === -1 ? analytic : analytic.slice(0, myLastIndex);

  const analyticOnePeriodAgo =
    myLastIndex === -1 ? [] : analytic.slice(myLastIndex);

  const { countries, browsers, OSs } = countAnalytics(newestAnalytic);

  const newVisitors = countActivity(period, newestAnalytic, isHour);
  return (
    <>
      <ActivityGraph
        visitors={newestAnalytic.length}
        visitorsOnePeriodAgo={analyticOnePeriodAgo.length}
        data={newVisitors}
        clockType={isHour ? "hours" : "days"}
      />
      <div className={style.ActivityListContainer}>
        <ActivityList title="Countries" list={countries} />
        <ActivityList title="Browsers" list={browsers} />
        <ActivityList title="Operating Systems" list={OSs} />
      </div>
    </>
  );
};
