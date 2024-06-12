import { NextRequest } from "next/server";
import { getBrowser, getOS, getCountryObj } from "./utils";
import { zodSchema } from "./zodSchema";
import { getProject } from "@/src/db/data-access/project";
import { createActivity } from "@/src/db/data-access/activity";
import { sendResponse } from "./utils";

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
