/**
 * SMS abstraction. With SMS_PROVIDER=console (default for local dev) messages
 * are logged to the server console instead of being sent. Swap to "twilio" and
 * fill the Twilio env vars to send real messages.
 */

type SendResult = { success: boolean; error?: string };

async function sendViaTwilio(to: string, body: string): Promise<SendResult> {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_PHONE_NUMBER;

  if (!sid || !token || !from) {
    return { success: false, error: "Twilio env vars are not configured" };
  }

  const url = `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`;
  const auth = Buffer.from(`${sid}:${token}`).toString("base64");
  const params = new URLSearchParams({ To: to, From: from, Body: body });

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });
    if (!res.ok) {
      const text = await res.text();
      return { success: false, error: `Twilio responded ${res.status}: ${text}` };
    }
    return { success: true };
  } catch (err) {
    return { success: false, error: (err as Error).message };
  }
}

export async function sendSms(to: string, body: string): Promise<SendResult> {
  const provider = process.env.SMS_PROVIDER ?? "console";

  if (provider === "twilio") {
    return sendViaTwilio(to, body);
  }

  // console provider
  console.log("\n────────── SMS (stub) ──────────");
  console.log(`  to:   ${to}`);
  console.log(`  body: ${body}`);
  console.log("────────────────────────────────\n");
  return { success: true };
}
