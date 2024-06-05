import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function POST(
  request: NextRequest,
  { params: { projectName } }: { params: { projectName: string } }
) {
  const {
    country = "unknown",
    OS = "unknown",
    browser = "unknown",
  } = await request.json();

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

const throwError = (status: 404) => {
  return NextResponse.json(
    {
      message: "No project found for the given project name",
    },
    { status: status }
  );
};
