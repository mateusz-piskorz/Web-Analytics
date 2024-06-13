import { z } from "zod";

export const zodSchema = z.object({
  projectName: z.string().min(1),
  eventName: z.string().min(1),
  label: z.string().min(1),
});

export const zodSchemaGetEvents = z.object({
  projectName: z.string().min(1),
  analyticPeriod: z.union([z.literal("7"), z.literal("24"), z.literal("30")]),
});
