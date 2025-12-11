import { getToolById, getAllTools } from "../../../lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 60;

export function generateStaticParams() {
  return getAllTools().map((tool) => ({ id: tool.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const tool = getToolById(params.id);

  if (!tool) {
    return { title: "AI Tool Not Found", description: "This tool does not exist." };
  }

  return {
    title: `${tool.name} — AI Tool Details`,
    description: tool.description,
  };
}

export default function ToolDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const tool = getToolById(params.id);

  if (!tool) return notFound();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 shadow-2xl">

        <div className="flex items-center gap-6">
          <img
            src={tool.logo || "/images/placeholder.png"}
            alt={tool.name}
            className="w-28 h-28 rounded-2xl border border-slate-700 shadow-lg"
          />

          <div>
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              {tool.name}
            </h1>
            <p className="text-slate-400 text-lg mt-2">{tool.category}</p>
            <p className="mt-3 text-slate-300">
              Quick take: {tool.description.split(".")[0] || tool.description}
            </p>
          </div>
        </div>

        <p className="mt-8 text-slate-300 text-lg">{tool.description}</p>

        <a
          href={tool.website}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg hover:opacity-95 hover:translate-y-0.5 transform transition duration-200"
        >
          Visit Website →
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl shadow-lg">
            <h3 className="text-sm text-slate-400">Pricing</h3>
            <p className="text-2xl font-bold text-purple-400 mt-2">{tool.pricing}</p>
          </div>

          <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl shadow-lg">
            <h3 className="text-sm text-slate-400">Rating</h3>
            <p className="text-2xl font-bold text-yellow-400 mt-2">⭐ {tool.rating}</p>
          </div>
        </div>

        {tool.tags && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold">Tags</h3>
            <div className="flex flex-wrap gap-3 mt-4">
              {tool.tags.map((tag) => (
                <a
                  key={tag}
                  href={`/tools?tag=${encodeURIComponent(tag)}`}
                  className="px-4 py-1 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-300 hover:bg-slate-900/70 transition"
                >
                  #{tag}
                </a>
              ))}
            </div>
          </div>
        )}

        {(() => {
          const related = getAllTools()
            .filter((t) => t.category === tool.category && t.id !== tool.id)
            .slice(0, 4);

          if (related.length === 0) return null;

          return (
            <div className="mt-12">
              <h3 className="text-xl font-semibold">You might also like</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                {related.map((t) => (
                  <a
                    key={t.id}
                    href={`/tools/${t.id}`}
                    className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-purple-500/60 transition-transform transform hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={t.logo || "/images/placeholder.png"}
                        alt={t.name}
                        className="w-10 h-10 rounded-md object-cover"
                      />
                      <div>
                        <div className="font-medium text-slate-100">{t.name}</div>
                        <div className="text-sm text-slate-400">{t.category}</div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })()}

      </div>
    </div>
  );
}
