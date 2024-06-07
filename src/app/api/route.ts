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

// export async function POST(request: NextRequest) {
//   try {
//     const { name, href, hrefLabel } = await request.json();

//     const project = await db.project.create({
//       data: { name, href, hrefLabel },
//     });

//     return NextResponse.json({ project });
//   } catch (error: any) {
//     return NextResponse.json({ message: error.message });
//   }
// }
