import type { MetadataRoute } from "next";
import { SITUATIES } from "@/lib/situaties";

const BASIS = "https://statevastgoed.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const vaste = [
    "",
    "/werkwijze",
    "/over-ons",
    "/veelgestelde-vragen",
    "/vertrouwelijkheid",
    "/contact",
    "/aanvraag",
    "/privacy",
  ].map((pad) => ({
    url: `${BASIS}${pad}`,
    changeFrequency: "monthly" as const,
    priority: pad === "" ? 1 : 0.7,
  }));

  const situaties = SITUATIES.map((s) => ({
    url: `${BASIS}/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...vaste, ...situaties];
}
