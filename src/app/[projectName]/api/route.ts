import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const allowedOrigins = process.env.CORS?.split(",");

export async function POST(
  request: NextRequest,
  { params: { projectName } }: { params: { projectName: string } }
) {
  const origin = request.headers.get("origin");
  if (!origin || !allowedOrigins?.includes(origin)) {
    return sendResponse(400, { message: "origin not allowed" });
  }

  const {
    country = "unknown",
    OS = "unknown",
    browser = "unknown",
  } = await request.json();

  try {
    const project = await db.project.findUnique({
      where: { name: projectName },
    });
    if (!project) return sendResponse(404, { message: "project not found" });

    const analytic = await db.analytic.create({
      data: { browser, country, OS, projectId: project.id },
    });

    return sendResponse(200, { analytic });
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
