import Link from "next/link";
import { getAllTools } from "../lib/data";

export const revalidate = 60;

export default function HomePage() {
  const tools = getAllTools().slice(0, 6); // show first 6 featured tools

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-20 px-6">
      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          AI Tools Catalog
        </h1>

        <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
          Discover the latest AI tools for text, images, audio, code, research, and more —
          built using Next.js, Tailwind CSS, and static generation (SSG).
        </p>

        <div className="mt-8">
          <Link
            href="/tools"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-lg font-semibold shadow-lg hover:opacity-90 transition"
          >
            Browse All Tools →
          </Link>
        </div>
      </section>

      {/* FEATURED TOOLS */}
      <section className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6">Featured Tools</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.id}`}
              className="group p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500 shadow-lg hover:shadow-purple-500/20 transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={tool.logo || "/images/placeholder.png"}
                  alt={tool.name}
                  className="w-14 h-14 rounded-md object-cover border border-slate-700"
                />
                <div>
                  <h3 className="font-bold text-lg group-hover:text-purple-400 transition">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-slate-400">{tool.category}</p>
                </div>
              </div>

              <p className="mt-4 text-slate-300 text-sm line-clamp-3">
                {tool.description}
              </p>

              <div className="mt-4 text-purple-400 text-sm font-medium">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
