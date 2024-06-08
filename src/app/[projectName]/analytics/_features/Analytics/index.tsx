import React, { FC } from "react";

import { PERIODS_AGO } from "@/src/constants";
import { Period } from "@/src/types";
import { myFunction } from "./test";
import { EventList } from "../EventList";
import { getProject } from "@/src/db//data-access/project";
import { getEventsGtePeriod } from "@/src/db//data-access/event";

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

  const project = await getProject(projectName);

  if (!project) throw new Error("project not found");

  const analytic = await getEventsGtePeriod(project.id, PERIODS_AGO[period][0]);

  const list = myFunction(analytic);

  return <EventList list={list} title="events" />;
};
