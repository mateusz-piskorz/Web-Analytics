import React, { FC } from "react";

import { PERIODS_AGO } from "@/src/constants";
import { Period } from "@/src/types";
import { myFunction } from "./test";
import { EventList } from "../EventList";
import { getProject } from "@/src/db//data-access/project";
import { getEventsGtePeriod } from "@/src/db//data-access/event";
import { ActivityGraph } from "@/src/features/ActivityGraph";
import { countEvents } from "./utils";
import { EventsProvider } from "../../_context";
import { ChartWrapper } from "../ChartWrapper";

type AnalyticsProps = {
  params: { projectName: string };
  analyticPeriod: string;
};

export const Analytics: FC<AnalyticsProps> = async ({
  analyticPeriod,
  params: { projectName },
}) => {
  if (!PERIODS_AGO[analyticPeriod as Period]) analyticPeriod = "7";
  const period: Period = analyticPeriod as Period;

  const events = await getEventsGtePeriod(projectName, PERIODS_AGO[period][0]);

  return (
    <>
      <EventsProvider EventsArr={events}>
        <ChartWrapper />
        <EventList title="events" />
      </EventsProvider>
    </>
  );
};
