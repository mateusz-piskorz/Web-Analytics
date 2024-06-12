import { NextRequest } from "next/server";
import { zodSchema } from "./zodSchema";
import { getProject } from "@/src/db/data-access/project";
import { getEvent, createEvent, createLabel } from "@/src/db/data-access/event";
import { sendResponse } from "../../api/utils";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parseResult = zodSchema.parse(body);

    const { projectName, eventName, label } = parseResult;

    await getProject(projectName);

    if (await getEvent(eventName)) {
      await createEvent(eventName, projectName);
    }

    const eventLabel = await createLabel(label, eventName);

    return sendResponse(200, { eventLabel });
  } catch (error: any) {
    return sendResponse(400, { message: error.message });
  }
}
