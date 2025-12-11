import { getToolById, getAllTools } from "../../../lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// SSG paths
export function generateStaticParams() {
  return getAllTools().map((tool) => ({
    id: tool.id,
  }));
}

// SEO metadata
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const tool = getToolById(params.id);

  if (!tool) {
    return {
      title: "Not Found",
      description: "Tool not found",
    };
  }

  return {
    title: tool.name,
    description: tool.description,
  };
}

// PAGE COMPONENT — NO PageProps TYPE ANYWHERE
export default function ToolDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const tool = getToolById(params.id);

  if (!tool) return notFound();

  return (
    <div>
      <h1>{tool.name}</h1>
      <p>{tool.description}</p>
    </div>
  );
}
