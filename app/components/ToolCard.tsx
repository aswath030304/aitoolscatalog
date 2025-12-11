"use client";

import { Tool } from "../../lib/types";

export function ToolGrid({ tools }: { tools: Tool[] }) {
  return (
    <>
      {tools.map((tool: Tool) => (
        <a
          key={tool.id}
          href={`/tools/${tool.id}`}
          aria-label={`Open ${tool.name} details`}
          className="group p-5 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-slate-800 hover:border-purple-500/70 shadow-xl hover:shadow-purple-500/20 transition-transform transform hover:-translate-y-1 hover:scale-105 duration-300"
        >
          <div className="flex items-center gap-4">
            <img
              src={tool.logo || "/images/placeholder.png"}
              alt={tool.name}
              className="w-14 h-14 rounded-xl border border-slate-700 object-cover"
            />

            <div>
              <h3 className="font-bold text-lg text-slate-100 group-hover:text-purple-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-slate-400">{tool.category}</p>
            </div>
          </div>

          <p className="mt-4 text-slate-300 text-sm line-clamp-4">
            {tool.description}
          </p>

          <div className="mt-4 text-purple-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            View Details →
          </div>
        </a>
      ))}
    </>
  );
}
