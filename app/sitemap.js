import { siteUrl } from "@/lib/site";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/projects", priority: 0.9, changeFrequency: "monthly" },
  { path: "/clients", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/quote", priority: 0.8, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/certifications", priority: 0.5, changeFrequency: "yearly" },
  { path: "/structure", priority: 0.4, changeFrequency: "yearly" },
  { path: "/policies", priority: 0.4, changeFrequency: "yearly" },
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${siteUrl}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
