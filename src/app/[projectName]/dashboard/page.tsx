import React, { FC, Suspense } from "react";
import { ActivityGraph } from "@/src/features/ActivityGraph";
import { ActivityList } from "./_features/ActivityList";
import { PERIODS_AGO } from "@/src/constants";
import { Period } from "@/src/types";
import { countAnalytics } from "./_features/DashboardClient/utils";
import style from "./styles.module.scss";
import { getActivity } from "@/src/db/data-access/activity";
import { DashboardClient } from "./_features/DashboardClient";

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
  const data = await getActivity(projectName, period, onePeriodAgo);

  return (
    <DashboardClient
      analyticPeriod={analyticPeriod}
      initData={data}
      projectName={projectName}
    />
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
