export type Lead = {
  postcode: string;
  huisnummer: string;
  typeVastgoed: string;
  verhuurd: string;
  timing: string;
  naam: string;
  email: string;
  telefoon: string;
  ontvangenOp: string;
};

/**
 * Verwerkt een binnengekomen aanvraag. De 24-uursbelofte begint hier:
 * de inkoper moet direct een notificatie krijgen.
 *
 * TODO fase 1-afronding: e-mailnotificatie naar de inkoper (bijv. Resend via
 * Vercel Marketplace) en opslag in een database (bijv. Neon Postgres).
 * Bewaartermijn conform privacybeleid: niet-geconverteerde leads na 12 maanden wissen.
 */
export async function verwerkLead(lead: Lead): Promise<void> {
  console.log("[LEAD]", JSON.stringify(lead));
}
