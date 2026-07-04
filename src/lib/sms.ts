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
    console.error("[SMS Twilio] Credentials missing. SID, Token, or Phone Number not configured in environment variables.");
    return { success: false, error: "Twilio env vars are not configured" };
  }

  console.log(`[SMS Twilio] Dispatching to: "${to}" from: "${from}"`);
  console.log(`[SMS Twilio] Message payload: "${body}"`);

  const url = `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`;
  const auth = Buffer.from(`${sid}:${token}`).toString("base64");
  const params = new URLSearchParams({ To: to, From: from, Body: body });

  try {
    console.log("[SMS Twilio] Sending POST request to Twilio API...");
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = await res.json();
    console.log(`[SMS Twilio] Raw API Response (Status: ${res.status}):`, JSON.stringify(data, null, 2));

    if (!res.ok) {
      return { success: false, error: data.message || `Twilio responded ${res.status}: ${JSON.stringify(data)}` };
    }
    return { success: true };
  } catch (err) {
    console.error("[SMS Twilio] Error during fetch request:", err);
    return { success: false, error: (err as Error).message };
  }
}

async function sendViaFast2Sms(to: string, body: string): Promise<SendResult> {
  const apiKey = process.env.FAST2SMS_API_KEY;

  if (!apiKey) {
    console.error("[SMS Fast2SMS] API key is missing from environment variables.");
    return { success: false, error: "Fast2SMS API key is not configured" };
  }

  // Format phone number to standard 10 digit format for Fast2SMS
  let formattedNumber = to.trim();
  if (formattedNumber.startsWith("+91")) {
    formattedNumber = formattedNumber.substring(3);
  } else if (formattedNumber.startsWith("91") && formattedNumber.length === 12) {
    formattedNumber = formattedNumber.substring(2);
  }

  console.log(`[SMS Fast2SMS] Formatting number: "${to}" -> "${formattedNumber}"`);
  console.log(`[SMS Fast2SMS] Message payload to dispatch: "${body}"`);

  try {
    const payload = {
      route: "q",
      message: body,
      flash: 0,
      numbers: formattedNumber,
    };

    console.log("[SMS Fast2SMS] Sending POST request to Fast2SMS...");
    const res = await fetch("https://www.fast2sms.com/dev/bulkV2", {
      method: "POST",
      headers: {
        authorization: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log(`[SMS Fast2SMS] Raw API Response (Status: ${res.status}):`, JSON.stringify(data, null, 2));

    if (!res.ok || !data.return) {
      return { success: false, error: data.message || `Fast2SMS responded ${res.status}: ${JSON.stringify(data)}` };
    }
    return { success: true };
  } catch (err) {
    console.error("[SMS Fast2SMS] Error during API fetch:", err);
    return { success: false, error: (err as Error).message };
  }
}

export async function sendSms(to: string, body: string): Promise<SendResult> {
  const provider = process.env.SMS_PROVIDER ?? "console";
  console.log(`[SMS] Initiating dispatch to ${to} using provider: "${provider}"`);
  let result: SendResult;

  if (provider === "twilio") {
    result = await sendViaTwilio(to, body);
  } else if (provider === "fast2sms") {
    result = await sendViaFast2Sms(to, body);
  } else {
    // console provider
    console.log("\n────────── SMS (stub) ──────────");
    console.log(`  to:   ${to}`);
    console.log(`  body: ${body}`);
    console.log("────────────────────────────────\n");
    result = { success: true };
  }

  if (!result.success) {
    console.error(`[SMS Error] Dispatch to ${to} failed:`, result.error);
  } else {
    console.log(`[SMS Success] Dispatch to ${to} completed successfully.`);
  }

  return result;
}
