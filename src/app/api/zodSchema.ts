import { z } from "zod";

export const zodSchema = z.object({
  userTimeZone: z.string().optional(),
  projectName: z.string().min(1),
});
