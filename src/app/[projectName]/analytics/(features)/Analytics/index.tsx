import React, { FC } from "react";
import { PERIODS_AGO, Period } from "../../../dashboard/constants";
import { PrismaClient } from "@prisma/client";
import { myFunction } from "./test";
import { EventList } from "../EventList";

const db = new PrismaClient();

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

  const project = await db.project.findUnique({
    where: { name: projectName },
  });

  if (!project) throw new Error("project not found");

  const analytic = await db.event.findMany({
    where: {
      projectId: project.id,
      createdAt: {
        gte: PERIODS_AGO[period][0],
      },
    },
    orderBy: { createdAt: "desc" },
  });

  const list = myFunction(analytic);

  return <EventList list={list} title="events" />;
};
