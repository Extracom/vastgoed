import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/aanvraag/bedankt"] }],
    sitemap: "https://statevastgoed.nl/sitemap.xml",
  };
}
