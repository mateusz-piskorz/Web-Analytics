import { PERIODS_AGO } from "./constants";

export type Period = keyof typeof PERIODS_AGO;

export type ActivityDataObj = { createdAt: Date };
