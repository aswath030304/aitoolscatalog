"use client";

import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { Tool } from "../../lib/types";
import { ToolGrid } from "../components/ToolCard";

export default function SearchClient({ tools, categories }: { tools: Tool[]; categories: string[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [pricing, setPricing] = useState("All");
  const [sort, setSort] = useState("relevance");

  useEffect(() => {
    // initialize from URL params so tag links and external links can pre-filter
    try {
      const params = new URLSearchParams(window.location.search);
      const tag = params.get("tag");
      const q = params.get("q");
      const cat = params.get("category");

      if (tag) setQuery(tag);
      if (q) setQuery(q);
      if (cat) setCategory(cat);
    } catch (e) {
      // ignore in non-browser environments
    }
  }, []);

  const fuse = new Fuse(tools, {
    keys: ["name", "category", "description", "tags"],
    threshold: 0.4,
  });

  const searched: Tool[] = query ? fuse.search(query).map((r: any) => r.item as Tool) : tools;

  let filtered: Tool[] = searched.filter((tool: Tool) => {
    return (category === "All" || tool.category === category) && (pricing === "All" || tool.pricing === pricing);
  });

  if (sort === "name") filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "rating") filtered = [...filtered].sort((a, b) => (b.rating || 0) - (a.rating || 0));

  // No module store: render the grid using props so React updates correctly.

  return (
    <div className="flex flex-col gap-4 bg-slate-900/40 backdrop-blur-md p-6 rounded-xl border border-slate-800/50 shadow-lg">
      <input
        type="text"
        placeholder="Search tools, categories, or tags — try ‘image’ or ‘chat’"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-3 w-full rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:ring-2 focus:ring-purple-500 outline-none"
      />

      <div className="flex flex-wrap gap-3">
        <select className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-700" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <select className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-700" value={pricing} onChange={(e) => setPricing(e.target.value)}>
          <option value="All">All Pricing</option>
          <option value="Free">Free</option>
          <option value="Freemium">Freemium</option>
          <option value="Paid">Paid</option>
        </select>

        <select className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-700" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="relevance">Relevance</option>
          <option value="name">Name A-Z</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <ToolGrid tools={filtered} />
      </div>

      {filtered.length === 0 && <div className="text-slate-400 mt-6">No tools match your search. Try a different term or clear filters.</div>}
    </div>
  );
}
