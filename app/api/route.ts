import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function POST(request: NextRequest) {
  const { projectName, country, OS, browser } = await request.json();

  if (!projectName) {
    return NextResponse.json(
      { message: "projectName must be a string" },
      { status: 400 }
    );
  }

  try {
    const project = await db.project.findUnique({
      where: { name: projectName },
    });
    if (!project) {
      return NextResponse.json(
        { message: "No project found for the given project name" },
        { status: 404 }
      );
    }
    const analytic = await db.analytic.create({
      data: { browser, country, OS, projectId: project.id },
    });

    return NextResponse.json(analytic);
  } catch (error: any) {
    return NextResponse.json({ hello: error.message });
  }
}
