import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/login",
        "/signup",
        "/terms-of-service",
        "/privacy-policy",
        "/refund-policy",
      ],
      disallow: [
        "/dashboard/",
        "/transactions/",
        "/growers/",
        "/migration/",
        "/reports/",
        "/settings/",
        "/hamaal/",
        "/expenses/",
        "/grower-charges/",
        "/api/",
      ],
    },
    sitemap: "https://orchardpay.com/sitemap.xml",
  };
}
