"use server";
import { db } from "../constants";

export const getAllProjects = async () => {
  return await db.project.findMany();
};
