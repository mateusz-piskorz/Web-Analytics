import { Period } from "@/src/types";
import { oneDay, oneHour } from "@/src/constants";
import { Activity } from "@prisma/client";

export const countActivity = (
  arrayType: Period,
  activityArray: Activity[],
  isHour?: boolean
) => {
  const array = generateActivityArr(arrayType);
  return array.map((item) => {
    let visitors = 0;
    const divider = isHour ? oneHour : oneDay;
    const { x, y } = item;
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

export const countAnalytics = (array: any[]) => {
  const { countries, browsers, OSs } = array.reduce(
    (acc, item) => {
      const { country, browser, OS } = item;
      const { countries, browsers, OSs } = acc;

      countries[country] = (countries[country] || 0) + 1;
      OSs[OS] = (OSs[OS] || 0) + 1;
      browsers[browser] = (browsers[browser] || 0) + 1;

      return acc;
    },
    { countries: {}, browsers: {}, OSs: {} }
  );

  return {
    countries: objToArray(countries),
    browsers: objToArray(browsers),
    OSs: objToArray(OSs),
  };
};

const objToArray = (obj: any) => {
  return Object.entries(obj).map(([name, quantity]) => ({
    name,
    quantity: quantity as number,
  }));
};

const generateActivityArr = (arrayType: Period) => {
  const timeXOne = arrayType === "24" ? oneHour : oneDay;
  const myArr = Array.from(Array(+arrayType)).map((i, index) => {
    const newDate = new Date(new Date().getTime() - timeXOne * index);
    newDate.setMinutes(newDate.getMinutes() + 30);
    newDate.setMinutes(0);
    return { x: newDate, y: 0 };
  });

  return myArr;
};
