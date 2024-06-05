import React, { FC, Suspense } from "react";
import { Dashboard } from "./(features)/Dashboard";

type DashboardProps = {
  params: { projectName: string };
  searchParams: { analyticPeriod: string | undefined };
};

const DashboardPage: FC<DashboardProps> = async ({ params, searchParams }) => {
  return (
    <Suspense
      key={searchParams.analyticPeriod}
      fallback={<h1 style={{ color: "white" }}>Loading...</h1>}
    >
      <Dashboard params={params} searchParams={searchParams} />
    </Suspense>
  );
};

export default DashboardPage;
