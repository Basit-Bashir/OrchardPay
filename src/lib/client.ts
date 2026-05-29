export type ApiEnvelope<T> = { success: true; data: T } | { success: false; error: string };

/** Calls an internal API route and unwraps the { success, data } envelope. */
export async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(path, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });
  const json = (await res.json()) as ApiEnvelope<T>;
  if (!json.success) throw new Error(json.error);
  return json.data;
}
