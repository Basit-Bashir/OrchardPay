import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://orchardpay.com";
  const routes = [
    "",
    "/login",
    "/signup",
    "/terms-of-service",
    "/privacy-policy",
    "/refund-policy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : (route === "/login" || route === "/signup" ? 0.8 : 0.5),
  }));
}
