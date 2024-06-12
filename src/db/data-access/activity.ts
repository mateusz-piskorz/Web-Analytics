"use server";
import { db } from "../constants";

export const getActivity = async (
  projectName: string,
  currentPeriod: Date,
  onePeriodAgo: Date
) => {
  const [currentPeriodData, onePeriodAgoCount] = await db.$transaction([
    db.project.findUnique({
      where: {
        name: projectName,
      },
      include: {
        activity: {
          where: { createdAt: { gte: currentPeriod } },
          orderBy: { createdAt: "desc" },
        },
      },
    }),
    db.activity.count({
      where: {
        projectName,
        createdAt: { gte: onePeriodAgo, lt: currentPeriod },
      },
    }),
  ]);

  if (currentPeriodData == null) throw new Error("project not found");

  return { activity: currentPeriodData.activity, onePeriodAgoCount };
};

export const createActivity = async (
  browser: string,
  country: string,
  OS: string,
  projectName: string
) => {
  const activity = await db.activity.create({
    data: { browser, country, OS, projectName },
  });

  return activity;
};
