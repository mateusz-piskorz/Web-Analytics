const visitorsData = [
  { x: new Date("2024-04-24"), y: 0 },
  { x: new Date("2024-04-25"), y: 0 },
  { x: new Date("2024-04-26"), y: 5 },
  { x: new Date("2024-04-27"), y: 0 },
  { x: new Date("2024-04-28"), y: 2 },
  { x: new Date("2024-04-29"), y: 5 },
  { x: new Date("2024-04-30"), y: 2 },
];

const now = new Date();
const oneHour = 3600000;
const oneDay = 86400000;

const visitorsData2 = [
  { x: new Date(new Date().getTime() - oneDay * 30), y: 5 },
  { x: new Date(new Date().getTime() - oneDay * 29), y: 5 },
  { x: new Date(new Date().getTime() - oneDay * 28), y: 5 },
  { x: new Date(new Date().getTime() - oneDay * 27), y: 5 },
  { x: new Date(new Date().getTime() - oneDay * 26), y: 5 },
  { x: new Date(new Date().getTime() - oneDay * 25), y: 5 },
  { x: new Date(new Date().getTime() - oneDay * 24), y: 5 },
  { x: new Date(new Date().getTime() - oneDay * 23), y: 5 },
  { x: new Date(new Date().getTime() - oneDay * 22), y: 0 },
  { x: new Date(new Date().getTime() - oneDay * 21), y: 2 },
  { x: new Date(new Date().getTime() - oneDay * 20), y: 5 },
  { x: new Date(new Date().getTime() - oneDay * 19), y: 2 },
  { x: new Date(new Date().getTime() - oneDay * 18), y: 2 },
  { x: new Date(new Date().getTime() - oneDay * 17), y: 2 },
  { x: new Date(new Date().getTime() - oneDay * 16), y: 2 },
  { x: new Date(new Date().getTime() - oneDay * 15), y: 2 },
  { x: new Date(new Date().getTime() - oneDay * 14), y: 2 },
  { x: new Date(new Date().getTime() - oneDay * 13), y: 0 },
  { x: new Date(new Date().getTime() - oneDay * 12), y: 0 },
  { x: new Date(new Date().getTime() - oneDay * 11), y: 5 },
  { x: new Date(new Date().getTime() - oneDay * 10), y: 0 },
  { x: new Date(new Date().getTime() - oneDay * 9), y: 2 },
  { x: new Date(new Date().getTime() - oneDay * 8), y: 5 },
  { x: new Date(new Date().getTime() - oneDay * 7), y: 2 },
  { x: new Date(new Date().getTime() - oneDay * 6), y: 2 },
  { x: new Date(new Date().getTime() - oneDay * 5), y: 2 },
  { x: new Date(new Date().getTime() - oneDay * 4), y: 2 },
  { x: new Date(new Date().getTime() - oneDay * 3), y: 2 },
  { x: new Date(new Date().getTime() - oneDay * 2), y: 2 },
  { x: new Date(new Date().getTime() - oneDay * 1), y: 2 },
  { x: new Date(new Date().getTime() - oneDay * 0), y: 2 },
];

const visitorsData3 = [
  { x: new Date(new Date().getTime() - oneHour * 23), y: 5 },
  { x: new Date(new Date().getTime() - oneHour * 22), y: 0 },
  { x: new Date(new Date().getTime() - oneHour * 21), y: 2 },
  { x: new Date(new Date().getTime() - oneHour * 20), y: 5 },
  { x: new Date(new Date().getTime() - oneHour * 19), y: 2 },
  { x: new Date(new Date().getTime() - oneHour * 18), y: 2 },
  { x: new Date(new Date().getTime() - oneHour * 17), y: 2 },
  { x: new Date(new Date().getTime() - oneHour * 16), y: 2 },
  { x: new Date(new Date().getTime() - oneHour * 15), y: 2 },
  { x: new Date(new Date().getTime() - oneHour * 14), y: 2 },
  { x: new Date(new Date().getTime() - oneHour * 13), y: 0 },
  { x: new Date(new Date().getTime() - oneHour * 12), y: 0 },
  { x: new Date(new Date().getTime() - oneHour * 11), y: 5 },
  { x: new Date(new Date().getTime() - oneHour * 10), y: 0 },
  { x: new Date(new Date().getTime() - oneHour * 9), y: 2 },
  { x: new Date(new Date().getTime() - oneHour * 8), y: 5 },
  { x: new Date(new Date().getTime() - oneHour * 7), y: 2 },
  { x: new Date(new Date().getTime() - oneHour * 6), y: 2 },
  { x: new Date(new Date().getTime() - oneHour * 5), y: 2 },
  { x: new Date(new Date().getTime() - oneHour * 4), y: 2 },
  { x: new Date(new Date().getTime() - oneHour * 3), y: 2 },
  { x: new Date(new Date().getTime() - oneHour * 2), y: 2 },
  { x: new Date(new Date().getTime() - oneHour * 1), y: 2 },
  { x: new Date(new Date().getTime() - oneHour * 0), y: 2 },
];

export const generateArr = (arrayType: 24 | 7 | 30) => {
  const timeXOne = arrayType === 24 ? oneHour : oneDay;
  const myArr = Array.from(Array(arrayType)).map((i, index) => {
    return { x: new Date(new Date().getTime() - timeXOne * index), y: 0 };
  });

  return myArr;
};
