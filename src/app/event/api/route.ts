import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function POST(request: NextRequest) {
  //   const origin = request.headers.get("origin");
  //   const isCorsDisabled = allowedOrigins === undefined;
  //   const isCorsAllowAll = allowedOrigins?.includes("*");
  //   const isOriginAllowed = origin && allowedOrigins?.includes(origin);

  //   if (!isCorsAllowAll || isCorsDisabled || isOriginAllowed) {
  //     return sendResponse(400, { message: "origin not allowed" });
  //   }

  try {
    const {
      projectName,
      category = "unknown",
      label = "unknown",
    } = await request.json();

    const project = await db.project.findUnique({
      where: { name: projectName },
    });

    if (!project) return sendResponse(404, { message: "project not found" });

    const event = await db.event.create({
      data: { category, label, projectId: project.id },
    });

    return sendResponse(200, { event });
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
