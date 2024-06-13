import { NextResponse, type NextRequest } from "next/server";

const allowedOrigins = process.env.CORS?.split(",");

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const origin = request.headers.get("origin");

  const isCorsDisabled = allowedOrigins === undefined;
  const isCorsAllowAll = allowedOrigins?.includes("*");
  const isOriginAllowed = origin && allowedOrigins?.includes(origin);

  if (!isCorsAllowAll && (isCorsDisabled || !isOriginAllowed)) {
    return new Response(JSON.stringify(`${origin} - origin not allowed`), {
      status: 500,
    });
  }

  return response;
}

export const config = {
  matcher: ["/api", "/event/api"],
};
