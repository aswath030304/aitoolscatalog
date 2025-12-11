import { getToolById, getAllTools } from "../../../lib/data";
import type { PageProps, Metadata } from "next";

export function generateStaticParams() {
  return getAllTools().map((tool) => ({
    id: tool.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<{ id: string }>): Promise<Metadata> {
  const tool = getToolById(params.id);
  if (!tool) {
    return { title: "Not Found", description: "Tool not found" };
  }
  return {
    title: tool.name,
    description: tool.description,
  };
}

export default function ToolPage({
  params,
}: PageProps<{ id: string }>) {
  const tool = getToolById(params.id);

  if (!tool) return <div>Tool not found</div>;

  return (
    <div>
      <h1>{tool.name}</h1>
      <p>{tool.description}</p>
    </div>
  );
}
