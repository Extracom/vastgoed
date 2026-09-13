import { NextResponse } from "next/server";
import { verwerkLead, type Lead } from "@/lib/leads";

const POSTCODE = /^\d{4}\s?[A-Z]{2}$/i;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ fout: "Ongeldige aanvraag." }, { status: 400 });
  }

  const veld = (naam: string) => (typeof body[naam] === "string" ? (body[naam] as string).trim() : "");

  const lead: Lead = {
    postcode: veld("postcode").toUpperCase(),
    huisnummer: veld("huisnummer"),
    typeVastgoed: veld("typeVastgoed"),
    verhuurd: veld("verhuurd"),
    timing: veld("timing"),
    naam: veld("naam"),
    email: veld("email"),
    telefoon: veld("telefoon"),
    ontvangenOp: new Date().toISOString(),
  };

  if (!POSTCODE.test(lead.postcode)) {
    return NextResponse.json({ fout: "Vul een geldige postcode in." }, { status: 400 });
  }
  if (!lead.huisnummer) {
    return NextResponse.json({ fout: "Vul een huisnummer in." }, { status: 400 });
  }
  if (!lead.naam) {
    return NextResponse.json({ fout: "Vul uw naam in." }, { status: 400 });
  }
  if (!EMAIL.test(lead.email)) {
    return NextResponse.json({ fout: "Vul een geldig e-mailadres in." }, { status: 400 });
  }

  await verwerkLead(lead);
  return NextResponse.json({ ok: true });
}
