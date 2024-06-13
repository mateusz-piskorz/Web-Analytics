import { NextRequest } from "next/server";
import { getBrowser, getOS, getCountryObj } from "./utils";
import { zodSchema, zodSchemaGetEvents } from "./zodSchema";
import { getProject } from "@/src/db/data-access/project";
import { createActivity, getActivity } from "@/src/db/data-access/activity";
import { sendResponse } from "./utils";
import { PERIODS_AGO } from "@/src/constants";

const countryObj = getCountryObj();

export async function POST(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "unknown";
  const browser = getBrowser(userAgent);
  const OS = getOS(userAgent);

  try {
    const body = await request.json();
    const { projectName, userTimeZone } = zodSchema.parse(body);

    // @ts-ignore
    const country = countryObj[userTimeZone] || "unknown";
    await getProject(projectName);

    const activity = await createActivity(browser, country, OS, projectName);

    return sendResponse(200, { activity });
  } catch (error: any) {
    return sendResponse(400, { message: error.message });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const { analyticPeriod, projectName } = zodSchemaGetEvents.parse({
      analyticPeriod: searchParams.get("analyticPeriod"),
      projectName: searchParams.get("projectName"),
    });

    const [period, onePeriodAgo] = PERIODS_AGO[analyticPeriod];
    const data = await getActivity(projectName, period, onePeriodAgo);

    return sendResponse(200, data);
  } catch (error: any) {
    return sendResponse(400, { message: error.message });
  }
}
