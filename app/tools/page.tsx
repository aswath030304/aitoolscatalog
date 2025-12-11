import { getAllTools, getCategories } from "../../lib/data";
import SearchClient from "./search-client";

export const revalidate = 60;

export default function ToolsPage() {
  const tools = getAllTools();
  const categories = getCategories();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6">
      <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        Explore AI Tools — curated and searchable
      </h1>

      <SearchClient tools={tools} categories={categories} />
    </div>
  );
}
