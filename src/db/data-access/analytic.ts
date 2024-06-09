"use server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

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
