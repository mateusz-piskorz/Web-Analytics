import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { zodSchema } from "./zodSchema";

const db = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parseResult = zodSchema.parse(body);

    const { projectName, eventName, label } = parseResult;

    const project = await db.project.findUnique({
      where: { name: projectName },
    });

    if (!project) return sendResponse(404, { message: "project not found" });

    const event = await db.event.findUnique({ where: { name: eventName } });

    if (!event) {
      await db.event.create({ data: { name: eventName, projectName } });
    }

    const newEventLabel = await db.eventLabel.create({
      data: { name: label, eventName },
    });

    return sendResponse(200, { newEventLabel });
  } catch (error: any) {
    return sendResponse(400, { message: error.message });
  }
}

const sendResponse = (status: number, message: any) => {
  return new Response(JSON.stringify(message), {
    status: status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },
  });
};
