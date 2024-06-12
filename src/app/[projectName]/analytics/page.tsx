import React, { FC, Suspense } from "react";
import { PERIODS_AGO } from "@/src/constants";
import { Period } from "@/src/types";
import { EventList } from "./_features/EventList";
import { getEvents } from "@/src/db//data-access/event";
import { EventsProvider } from "./_context";
import { Chart } from "./_features/Chart";

const AnalyicsPage: FC<DashboardProps> = async ({
  params,
  searchParams: { analyticPeriod },
}) => {
  if (!PERIODS_AGO[analyticPeriod as Period]) {
    analyticPeriod = "7";
  }

  return (
    <Suspense key={analyticPeriod} fallback={<h1>Loading...</h1>}>
      <Analytics params={params} analyticPeriod={analyticPeriod as Period} />
    </Suspense>
  );
};

const Analytics: FC<AnalyticsProps> = async ({
  analyticPeriod,
  params: { projectName },
}) => {
  const [period, onePeriodAgo] = PERIODS_AGO[analyticPeriod];
  const events = await getEvents(projectName, period, onePeriodAgo);

  return (
    <EventsProvider events={events}>
      <Chart />
      <EventList title="events" />
    </EventsProvider>
  );
};

type DashboardProps = {
  params: { projectName: string };
  searchParams: { analyticPeriod: string | undefined };
};

type AnalyticsProps = {
  params: { projectName: string };
  analyticPeriod: Period;
};

export default AnalyicsPage;
