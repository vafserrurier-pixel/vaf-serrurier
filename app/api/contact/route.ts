import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { business } from "@/lib/business";

const PHONE_RE = /^[0-9+()\s.-]{6,20}$/;

// Rate limiting best-effort en mémoire (par instance serverless).
// Un rate limiting distribué (ex. Upstash) est prévu en phase de durcissement sécurité.
const attempts = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (attempts.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  attempts.set(ip, timestamps);
  return timestamps.length > MAX_ATTEMPTS;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Trop de tentatives, réessayez plus tard." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { name, phone, message, website } = body;

  // Honeypot : un champ rempli signale un bot.
  if (typeof website === "string" && website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
    return NextResponse.json({ error: "Nom invalide." }, { status: 400 });
  }
  if (typeof phone !== "string" || !PHONE_RE.test(phone.trim())) {
    return NextResponse.json({ error: "Numéro de téléphone invalide." }, { status: 400 });
  }
  if (
    typeof message !== "string" ||
    message.trim().length < 5 ||
    message.trim().length > 2000
  ) {
    return NextResponse.json({ error: "Message invalide." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY manquante — email non envoyé.");
    return NextResponse.json(
      { error: "Service d'envoi indisponible pour le moment." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  // Expéditeur par défaut Resend (sandbox) tant que le domaine vaf-serrurier.fr
  // n'est pas vérifié sur Resend (nécessite un accès DNS, prévu en phase hébergement).
  const fromAddress = process.env.RESEND_FROM_EMAIL || "Site VAF Serrurier <onboarding@resend.dev>";

  try {
    await resend.emails.send({
      from: fromAddress,
      to: business.email,
      subject: `Nouvelle demande de contact — ${name.trim()}`,
      text: `Nom: ${name.trim()}\nTéléphone: ${phone.trim()}\n\nMessage:\n${message.trim()}`,
    });
  } catch (err) {
    console.error("Échec envoi Resend", err);
    return NextResponse.json({ error: "Envoi impossible, réessayez." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
