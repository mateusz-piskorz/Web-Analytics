import { coerceNumber } from "@visx/scale";
import { ClockType } from "./types";

export const getMinMax = (vals: (number | { valueOf(): number })[]) => {
  const numericVals: any = vals.map(coerceNumber);
  return [Math.min(...numericVals), Math.max(...numericVals)];
};

export const parseDate = (clockType: ClockType, date: Date) => {
  if (clockType === "hours") {
    const [hour, min] = date.toLocaleTimeString().split(":");
    return `${hour}:${min}`;
  } else {
    return date.toLocaleDateString();
  }
};

export const percentage = (percent: number, total: number) => {
  return ((percent / 10) * total).toFixed(2);
};
