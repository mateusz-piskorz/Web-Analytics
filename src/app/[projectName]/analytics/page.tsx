import React, { FC, Suspense } from "react";
import { Analytics } from "./(features)/Analytics";
type DashboardProps = {
  params: { projectName: string };
  searchParams: { analyticPeriod: string | undefined };
};

const AnalyicsPage: FC<DashboardProps> = async ({
  params,
  searchParams: { analyticPeriod = "7" },
}) => {
  return (
    <Suspense key={analyticPeriod} fallback={<h1>Loading...</h1>}>
      <Analytics params={params} analyticPeriod={analyticPeriod} />
    </Suspense>
  );
};

export default AnalyicsPage;
