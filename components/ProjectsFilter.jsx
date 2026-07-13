"use client";

import { useState } from "react";
import { projectCategories } from "@/data/content";
import LineDivider from "@/components/LineDivider";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsFilter({ projects }) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-wrap gap-2 mb-10">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 text-sm font-medium border transition-colors focus-ring ${
              active === cat
                ? "bg-navy text-paper border-navy"
                : "bg-paper text-ink/70 border-line hover:border-navy/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <LineDivider label={`${filtered.length} of ${projects.length} projects`} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filtered.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-steel py-10 text-center">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
