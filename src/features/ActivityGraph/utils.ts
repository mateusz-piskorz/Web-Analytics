import { coerceNumber } from "@visx/scale";
import { ClockType } from "./types";
import { Period } from "@/src/types";
import { oneDay, oneHour } from "@/src/constants";

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

export const countActivity = (
  period: Period,
  activityArray: { createdAt: Date }[]
) => {
  const array = generateActivityArr(period);
  const isHour = period === "24";
  return array.map((item) => {
    let visitors = 0;
    const divider = isHour ? oneHour : oneDay;
    const { x } = item;
    const time = x.getTime();
    const min = time - divider / 2;
    const max = time + divider / 2 + 1;
    activityArray.forEach((activityItem) => {
      const analyticTime = activityItem.createdAt.getTime();
      if (analyticTime > min && analyticTime < max) {
        visitors++;
      }
    });

    return { x, y: visitors };
  });
};

const generateActivityArr = (arrayType: Period) => {
  const timeXOne = arrayType === "24" ? oneHour : oneDay;
  return Array.from(Array(+arrayType)).map((_, index) => {
    const newDate = new Date(new Date().getTime() - timeXOne * index);
    newDate.setMinutes(newDate.getMinutes() + 30);
    newDate.setMinutes(0);
    return { x: newDate, y: 0 };
  });
};
