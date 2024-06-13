import { NextRequest } from "next/server";
import { zodSchema, zodSchemaGetEvents } from "./zodSchema";
import { getProject } from "@/src/db/data-access/project";
import {
  getEvent,
  createEvent,
  createLabel,
  getEvents,
} from "@/src/db/data-access/event";
import { sendResponse } from "../../api/utils";
import { PERIODS_AGO } from "@/src/constants";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parseResult = zodSchema.parse(body);

    const { projectName, eventName, label } = parseResult;

    await getProject(projectName);

    if (!(await getEvent(eventName))) {
      await createEvent(eventName, projectName);
    }

    const eventLabel = await createLabel(label, eventName);

    return sendResponse(200, { eventLabel });
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
    const events = await getEvents(projectName, period, onePeriodAgo);
    return sendResponse(200, events);
  } catch (error: any) {
    return sendResponse(400, { message: error.message });
  }
}
