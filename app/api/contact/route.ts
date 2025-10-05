// app/api/contact/route.ts
import { NextResponse } from "next/server";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID; // numeric id або @channelusername (краще id)

function isPhoneValid(p: string) {
  // + і 9–15 цифр (дуже проста перевірка, але краще ніж нічого)
  return /^\+?\d{9,15}$/.test(p.replace(/\s|-/g, ""));
}

export async function POST(req: Request) {
  try {
    if (!BOT_TOKEN || !CHAT_ID) {
      return NextResponse.json(
        { ok: false, error: "Telegram is not configured on server" },
        { status: 500 }
      );
    }

    const { name, phone, message } = await req.json();

    // базова валідація
    if (typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { ok: false, error: "Invalid name" },
        { status: 400 }
      );
    }
    if (typeof phone !== "string" || !isPhoneValid(phone)) {
      return NextResponse.json(
        { ok: false, error: "Invalid phone" },
        { status: 400 }
      );
    }
    if (typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { ok: false, error: "Invalid message" },
        { status: 400 }
      );
    }

    const text =
      `📩 New request from Dream Car\n` +
      `• Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      `• Message:\n${message}`;

    const tgRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // якщо у тебе група — поставь disable_notification: true за бажанням
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      }
    );

    if (!tgRes.ok) {
      const errText = await tgRes.text().catch(() => "");
      return NextResponse.json(
        { ok: false, error: `Telegram error: ${errText || tgRes.status}` },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}