"use server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export const getProject = async (projectName: string) => {
  return await db.project.findUnique({
    where: { name: projectName },
  });
};

export const getAllProjects = async () => {
  return await db.project.findMany();
};
