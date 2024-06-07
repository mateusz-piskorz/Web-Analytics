import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  const isCorsDisabled = allowedOrigins === undefined;
  const isCorsAllowAll = allowedOrigins?.includes("*");
  const isOriginAllowed = origin && allowedOrigins?.includes(origin);

  if (!isCorsAllowAll || isCorsDisabled || isOriginAllowed) {
    return sendResponse(400, { message: "origin not allowed" });
  }

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

    const analytic = await db.analytic.create({
      data: { browser, country, OS, projectId: project.id },
    });

    return sendResponse(200, { analytic });
  } catch (error: any) {
    return sendResponse(400, { message: error.message });
  }
}
