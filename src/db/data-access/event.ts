"use server";
import { db } from "../constants";

export const getEventsGtePeriod = async (projectName: string, period: Date) => {
  const data = await db.event.findMany({
    where: {
      projectName,
    },
    select: {
      name: true,
      labels: { where: { createdAt: { gte: period } } },
    },
  });

  return data;
};
