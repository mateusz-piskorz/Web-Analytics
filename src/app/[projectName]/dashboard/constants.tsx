import { Period } from "@/src/types";
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
