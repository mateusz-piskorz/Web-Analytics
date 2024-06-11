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
    value: quantity as number,
  }));
};
