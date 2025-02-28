import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://schutzenhealth.com", lastModified: new Date() },
    { url: "https://schutzenhealth.com/about", lastModified: new Date() },
    { url: "https://schutzenhealth.com/contact", lastModified: new Date() },
  ];
}
