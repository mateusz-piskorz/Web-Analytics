import React, { FC, Suspense } from "react";
import { PERIODS_AGO } from "@/src/constants";
import { Period } from "@/src/types";
import { EventList } from "./_features/EventList";
import { getEventsGtePeriod } from "@/src/db//data-access/event";
import { EventsProvider } from "./_context";
import { Chart } from "./_features/Chart";

type DashboardProps = {
  params: { projectName: string };
  searchParams: { analyticPeriod: string | undefined };
};

type AnalyticsProps = {
  params: { projectName: string };
  analyticPeriod: Period;
};

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
  const events = await getEventsGtePeriod(
    projectName,
    PERIODS_AGO[analyticPeriod][0]
  );

  events.map((e) => e.labels);

  const myArr = [
    { name: "label1", eventName: "event1" },
    { name: "label2", eventName: "event1" },
    { name: "label3", eventName: "event2" },
  ];

  return (
    <EventsProvider eventsArr={events}>
      <Chart />
      <EventList title="events" />
    </EventsProvider>
  );
};

export default AnalyicsPage;
