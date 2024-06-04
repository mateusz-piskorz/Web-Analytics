import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function POST(request: NextRequest) {
  const { projectName, country, OS, browser } = await request.json();

  if (!projectName) return throwError(400);

  try {
    const project = await db.project.findUnique({
      where: { name: projectName },
    });
    if (!project) return throwError(404);

    const analytic = await db.analytic.create({
      data: { browser, country, OS, projectId: project.id },
    });

    return NextResponse.json(analytic);
  } catch (error: any) {
    return NextResponse.json({ hello: error.message });
  }
}

const throwError = (status: 400 | 404) => {
  return NextResponse.json(
    {
      message:
        status === 400
          ? "projectName must be a string"
          : "No project found for the given project name",
    },
    { status: status }
  );
};
