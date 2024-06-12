import { z } from "zod";

export const zodSchema = z.object({
  projectName: z.string().min(1),
  eventName: z.string().min(1),
  label: z.string().min(1),
});
