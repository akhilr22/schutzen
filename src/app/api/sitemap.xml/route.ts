import { NextResponse } from "next/server";

export const GET = () => {
  const urls = [
    "https://schutzenhealth.com/",
    "https://schutzenhealth.com/about",
    "https://schutzenhealth.com/products",
    "https://schutzenhealth.com/contact",
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.8</priority>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
};
