import { NextResponse } from "next/server";

export type ApiResponse<T> = { success: true; data: T } | { success: false; error: string };

export function ok<T>(data: T, status = 200) {
  return NextResponse.json({ success: true, data } satisfies ApiResponse<T>, { status });
}

export function fail(error: string, status = 400) {
  return NextResponse.json({ success: false, error } satisfies ApiResponse<never>, { status });
}

/** Wraps a route handler, converting thrown errors into JSON responses. */
export function handle(fn: () => Promise<Response>): Promise<Response> {
  return fn().catch((err: unknown) => {
    const message = err instanceof Error ? err.message : "Unknown error";
    if (message === "UNAUTHORIZED") return fail("Unauthorized", 401);
    console.error("[api error]", err);
    return fail(message, 500);
  });
}
