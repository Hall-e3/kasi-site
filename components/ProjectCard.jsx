import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <article className="border border-line bg-paper flex flex-col h-full hover:border-navy/40 transition-colors overflow-hidden">
      {project.images && project.images.length > 0 && (
        <div className={`grid ${project.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-px bg-line`}>
          {project.images.map((src) => (
            <div key={src} className="relative aspect-[4/3] bg-line">
              <Image
                src={src}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-3">
          <span className="eyebrow text-green">{project.client}</span>
          <div className="flex gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] text-green border border-green/40 px-1.5 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <h3 className="font-display font-600 text-lg text-navy leading-snug mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-ink/75 leading-relaxed">{project.description}</p>
        {project.schemes && (
          <div className="mt-4 pt-4 border-t border-line">
            <p className="eyebrow text-steel mb-2">Schemes covered</p>
            <ul className="text-xs text-ink/70 grid grid-cols-2 gap-x-3 gap-y-1">
              {project.schemes.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
