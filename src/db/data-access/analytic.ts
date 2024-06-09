"use server";
import { db } from "../constants";

export const getActivityGtePeriod = async (projectId: string, period: Date) => {
  return await db.activity.findMany({
    where: {
      projectId,
      createdAt: {
        gte: period,
      },
    },
    orderBy: { createdAt: "desc" },
  });
};
