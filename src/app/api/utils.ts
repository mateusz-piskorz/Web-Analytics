import data from "moment-timezone/data/meta/latest.json";
const { countries, zones } = data;

export const sendResponse = (status: number, message: any) => {
  return new Response(JSON.stringify(message), {
    status: status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },
  });
};

export const getCountryObj = () => {
  type CountryObj = { [key in keyof typeof zones]: string };
  let countryObj: CountryObj = {} as CountryObj;
  Object.values(zones).forEach((value) => {
    const { name } = value;
    // @ts-ignore
    countryObj[name] = countries[value.countries[0]].name;
  });

  return countryObj;
};

export const getBrowser = (userAgent: string) => {
  let browser = "unkown";
  // Detect browser name
  browser = /ucbrowser/i.test(userAgent) ? "UCBrowser" : browser;
  browser = /edg/i.test(userAgent) ? "Edge" : browser;
  browser = /googlebot/i.test(userAgent) ? "GoogleBot" : browser;
  browser = /chromium/i.test(userAgent) ? "Chromium" : browser;
  browser =
    /firefox|fxios/i.test(userAgent) && !/seamonkey/i.test(userAgent)
      ? "Firefox"
      : browser;
  browser =
    /; msie|trident/i.test(userAgent) && !/ucbrowser/i.test(userAgent)
      ? "IE"
      : browser;
  browser =
    /chrome|crios/i.test(userAgent) &&
    !/opr|opera|chromium|edg|ucbrowser|googlebot/i.test(userAgent)
      ? "Chrome"
      : browser;
  browser =
    /safari/i.test(userAgent) &&
    !/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i.test(
      userAgent
    )
      ? "Safari"
      : browser;
  browser = /opr|opera/i.test(userAgent) ? "Opera" : browser;

  return browser;
};

export const getOS = (userAgent: string) => {
  const os = /linux/i.test(userAgent)
    ? "Linux"
    : /macintosh|mac os x/i.test(userAgent)
    ? "Mac OS"
    : /windows|win32/i.test(userAgent)
    ? "Windows"
    : /android/i.test(userAgent)
    ? "Android"
    : /cros/i.test(userAgent)
    ? "Chrome OS"
    : /ipad|iphone|ipod/i.test(userAgent)
    ? "iOS"
    : "unknown";
  return os;
};
