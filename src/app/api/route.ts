import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const project = await db.project.findMany();

    return NextResponse.json({ project });
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}

export async function POST(request: NextRequest) {
  return new Response(JSON.stringify({ message: "hello" }), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },
  });
}
