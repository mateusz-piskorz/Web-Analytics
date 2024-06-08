"use server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export const getAnalyticsGtePeriod = async (
  projectId: string,
  period: Date
) => {
  return await db.analytic.findMany({
    where: {
      projectId,
      createdAt: {
        gte: period,
      },
    },
    orderBy: { createdAt: "desc" },
  });
};
