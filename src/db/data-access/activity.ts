"use server";
import { db } from "../constants";

export const getActivityGtePeriod = async (
  projectName: string,
  period: Date
) => {
  const data = await db.project.findUnique({
    where: {
      name: projectName,
    },
    include: {
      activity: {
        where: { createdAt: { gte: period } },
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (data == null) throw new Error("project not found");

  return data;
};
