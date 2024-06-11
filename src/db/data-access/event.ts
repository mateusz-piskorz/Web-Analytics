"use server";
import { db } from "../constants";
import { Prisma } from "@prisma/client";

export type EventWithLabels = Prisma.EventGetPayload<{
  include: { labels: true };
}>;

export const getEventsGtePeriod = async (projectName: string, period: Date) => {
  const data = await db.event.findMany({
    where: {
      projectName,
    },
    include: {
      labels: {
        where: { createdAt: { gte: period } },
        orderBy: { createdAt: "desc" },
      },
    },
  });

  return data;
};
