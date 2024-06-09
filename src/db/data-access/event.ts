"use server";
import { db } from "../constants";

export const getEventsGtePeriod = async (projectId: string, period: Date) => {
  return await db.event.findMany({
    where: {
      projectId,
      createdAt: {
        gte: period,
      },
    },
    orderBy: { createdAt: "desc" },
  });
};
