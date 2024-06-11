import React, { FC, Suspense } from "react";
import { Dashboard } from "./_features/Dashboard";
import { DashboardPlaceholder } from "./_features/Dashboard/DashboardPlaceholder";

type DashboardProps = {
  params: { projectName: string };
  searchParams: { analyticPeriod: string | undefined };
};

const DashboardPage: FC<DashboardProps> = async ({
  params,
  searchParams: { analyticPeriod = "7" },
}) => {
  return (
    <Suspense key={analyticPeriod} fallback={<h1>Loading...</h1>}>
      <Dashboard params={params} analyticPeriod={analyticPeriod} />
    </Suspense>
  );
};

export default DashboardPage;
