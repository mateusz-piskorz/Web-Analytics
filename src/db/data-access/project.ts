"use server";
import { db } from "../constants";

export const getAllProjects = async () => {
  return await db.project.findMany();
};

export const getProject = async (projectName: string) => {
  const project = await db.project.findUnique({
    where: { name: projectName },
  });

  if (!project) throw new Error("project not found");

  return project;
};
