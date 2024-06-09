import React, { FC } from "react";

import { PERIODS_AGO } from "@/src/constants";
import { Period } from "@/src/types";
import { myFunction } from "./test";
import { EventList } from "../EventList";
import { getProject } from "@/src/db//data-access/project";
import { getEventsGtePeriod } from "@/src/db//data-access/event";
import { ActivityGraph } from "@/src/features/ActivityGraph";

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

  const events = await getEventsGtePeriod(project.id, PERIODS_AGO[period][0]);

  const whatIWant = {
    button_click: [
      {
        label: "product1",
        activityArr: [
          {
            id: "fgre",
            createdAt: new Date(),
            projectId: "gfregre",
            category: "gfregre",
            label: "gfregre",
          },
        ],
      },
      {
        label: "product2",
        activityArr: [
          {
            id: "fgre",
            createdAt: new Date(),
            projectId: "gfregre",
            category: "gfregre",
            label: "gfregre",
          },
        ],
      },
    ],
  };

  const list = myFunction(events);
  console.log(events);

  return (
    <>
      {/* <ActivityGraph
        visitors={newestAnalytic.length}
        visitorsOnePeriodAgo={analyticOnePeriodAgo.length}
        data={newVisitors}
        clockType={isHour ? "hours" : "days"}
      /> */}
      <EventList list={list} title="events" />
    </>
  );
};
