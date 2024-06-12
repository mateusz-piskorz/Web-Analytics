import React, { FC, Suspense } from "react";
import { ActivityGraph } from "@/src/features/ActivityGraph";
import { ActivityList } from "./_features/ActivityList";
import { PERIODS_AGO } from "@/src/constants";
import { Period } from "@/src/types";
import { countAnalytics } from "./utils";
import style from "./styles.module.scss";
import { getActivity } from "@/src/db/data-access/activity";

const DashboardPage: FC<DashboardPageProps> = async ({
  params,
  searchParams: { analyticPeriod },
}) => {
  if (!PERIODS_AGO[analyticPeriod as Period]) {
    analyticPeriod = "7";
  }
  return (
    <Suspense key={analyticPeriod} fallback={<h1>Loading...</h1>}>
      <Dashboard params={params} analyticPeriod={analyticPeriod as Period} />
    </Suspense>
  );
};

const Dashboard: FC<DashboardProps> = async ({
  params: { projectName },
  analyticPeriod,
}) => {
  const [period, onePeriodAgo] = PERIODS_AGO[analyticPeriod];
  const { activity, onePeriodAgoCount } = await getActivity(
    projectName,
    period,
    onePeriodAgo
  );

  const { countries, browsers, OSs } = countAnalytics(activity);

  return (
    <>
      <ActivityGraph
        data={activity}
        period={analyticPeriod}
        total={activity.length}
        totalPeriodAgo={onePeriodAgoCount}
      />
      <div className={style.ActivityListContainer}>
        <ActivityList title="Countries" list={countries} />
        <ActivityList title="Browsers" list={browsers} />
        <ActivityList title="Operating Systems" list={OSs} />
      </div>
    </>
  );
};

type DashboardPageProps = {
  params: { projectName: string };
  searchParams: { analyticPeriod: string | undefined };
};

type DashboardProps = {
  params: { projectName: string };
  analyticPeriod: Period;
};

export default DashboardPage;
