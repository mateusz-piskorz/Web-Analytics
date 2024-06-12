import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import data from "moment-timezone/data/meta/latest.json";
import { getBrowser, getOS } from "./utils";
const { countries, zones } = data;

const db = new PrismaClient();

type CountryObj = { [key in keyof typeof zones]: string };
let countryObj: CountryObj = {} as CountryObj;
Object.values(zones).forEach((value) => {
  const { name } = value;
  // @ts-ignore
  countryObj[name] = countries[value.countries[0]].name;
});

export async function POST(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "unknown";
  const browser = getBrowser(userAgent);
  const OS = getOS(userAgent);

  try {
    const { userTimeZone, projectName } = await request.json();

    // @ts-ignore
    const country = countryObj[userTimeZone] || "unknown";
    const project = await db.project.findUnique({
      where: { name: projectName },
    });
    if (!project) return sendResponse(404, { message: "project not found" });

    const analytic = await db.activity.create({
      data: { browser, country, OS, projectName },
    });

    return sendResponse(200, { analytic });
  } catch (error: any) {
    return sendResponse(400, { message: error.message });
  }
}

// post events

const sendResponse = (status: number, message: any) => {
  return new Response(JSON.stringify(message), {
    status: status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },
  });
};
