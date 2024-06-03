import { coerceNumber } from "@visx/scale";

export const getMinMax = (vals: (number | { valueOf(): number })[]) => {
  const numericVals: any = vals.map(coerceNumber);
  return [Math.min(...numericVals), Math.max(...numericVals)];
};
