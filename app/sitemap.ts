import { getAllTools } from "../lib/data";

export default function sitemap() {
  const tools = getAllTools();

  const toolUrls = tools.map((tool) => ({
    url: `https://your-vercel-site.com/tools/${tool.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://your-vercel-site.com",
      lastModified: new Date(),
    },
    {
      url: "https://your-vercel-site.com/tools",
      lastModified: new Date(),
    },
    ...toolUrls,
  ];
}
