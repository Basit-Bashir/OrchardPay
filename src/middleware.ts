import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const PROTECTED_PREFIXES = [
  "/dashboard",
  "/transactions",
  "/growers",
  "/migration",
  "/reports",
  "/settings",
];

const SESSION_COOKIE = "hortitrack_session";

async function getSessionPayload(token: string | undefined) {
  if (!token) return null;
  try {
    const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload as unknown as { role: string };
  } catch {
    return null;
  }
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  const session = await getSessionPayload(token);

  // Check if accessing admin-protected pages
  const isProtected = PROTECTED_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );

  if (isProtected) {
    if (!session) {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
    // Block Hamaals from accessing buyer pages
    if (session.role === "hamaal") {
      const url = req.nextUrl.clone();
      url.pathname = "/hamaal";
      return NextResponse.redirect(url);
    }
  }

  // Check Hamaal page access
  if (pathname === "/hamaal" || pathname.startsWith("/hamaal/")) {
    if (!session) {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("next", pathname);
      return NextResponse.redirect(url);
    }
    // Block non-hamaals from accessing hamaal page
    if (session.role !== "hamaal") {
      const url = req.nextUrl.clone();
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/transactions/:path*",
    "/growers/:path*",
    "/migration/:path*",
    "/reports/:path*",
    "/settings/:path*",
    "/hamaal/:path*",
  ],
};
