export type Period = keyof typeof PERIODS_AGO;

export const oneHour = 3600000;
export const oneDay = 86400000;

export const generateArr = (arrayType: Period) => {
  const timeXOne = arrayType === "24" ? oneHour : oneDay;
  const myArr = Array.from(Array(+arrayType)).map((i, index) => {
    const newDate = new Date(new Date().getTime() - timeXOne * index);
    newDate.setMinutes(newDate.getMinutes() + 30);
    newDate.setMinutes(0);
    return { x: newDate, y: 0 };
  });

  return myArr;
};

export const PERIODS_AGO = {
  "7": new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
  "24": new Date(Date.now() - 86400000),
  "30": new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
};
