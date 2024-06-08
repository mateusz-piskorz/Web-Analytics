export const PERIODS_AGO = {
  "7": [
    new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
  ],
  "24": [new Date(Date.now() - 86400000), new Date(Date.now() - 172800000)],
  "30": [
    new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
  ],
};

export const oneHour = 3600000;
export const oneDay = 86400000;
