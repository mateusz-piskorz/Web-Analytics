import React, { FC } from "react";
import { ActivityGraph } from "@/src/features/ActivityGraph";
import { ActivityList } from "../../_features/ActivityList";
import { generateArr } from "../../constants";
import { oneDay, oneHour } from "@/src/constants";
import { PERIODS_AGO } from "@/src/constants";
import { Period } from "@/src/types";
import { mapHelperFunc } from "./utils";
import style from "./styles.module.scss";
import { getProject } from "@/src/db/data-access/project";
import { getAnalyticsGtePeriod } from "@/src/db/data-access/analytic";

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

  const analytic = await getAnalyticsGtePeriod(
    project.id,
    PERIODS_AGO[period][0]
  );

  const myLastIndex = analytic.findIndex(
    (e) => e.createdAt.getTime() < PERIODS_AGO[period][0].getTime()
  );

  const newestAnalytic = analytic.slice(0, myLastIndex);

  const analyticOnePeriodAgo = analytic.slice(myLastIndex);

  const countriesArr = mapHelperFunc(newestAnalytic, "country");
  const browsersArr = mapHelperFunc(newestAnalytic, "browser");
  const OSArr = mapHelperFunc(newestAnalytic, "OS");

  const MyActivityArray = generateArr(period);

  const newVisitors = MyActivityArray.map((item) => {
    let visitors = 0;
    const divider = isHour ? oneHour : oneDay;
    const { x, y } = item;
    const time = x.getTime();
    const min = time - divider / 2;
    const max = time + divider / 2 + 1;
    newestAnalytic.forEach((analyticItem) => {
      const analyticTime = analyticItem.createdAt.getTime();
      if (analyticTime > min && analyticTime < max) {
        visitors++;
      }
    });

    return { x, y: visitors };
  });

  return (
    <>
      <ActivityGraph
        visitors={newestAnalytic.length}
        visitorsOnePeriodAgo={analyticOnePeriodAgo.length}
        data={newVisitors}
        clockType={isHour ? "hours" : "days"}
      />
      <div className={style.ActivityListContainer}>
        <ActivityList title="Countries" list={countriesArr} />
        <ActivityList title="Browsers" list={browsersArr} />
        <ActivityList title="Operating Systems" list={OSArr} />
      </div>
    </>
  );
};
