import { projects } from "@/data/content";
import ProjectsFilter from "@/components/ProjectsFilter";

export const metadata = {
  title: "Projects",
  description:
    "12 executed engineering contracts across Uganda — power line construction, solar street lighting, civil works and institutional supply for UETCL, Bank of Uganda, UNBS, NWSC and district governments.",
};

export default function ProjectsPage() {
  return (
    <div>
      <div className="bg-navydeep text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-amber mb-4">Executed work</p>
          <h1 className="font-display font-700 text-4xl max-w-2xl">
            Projects delivered across Uganda.
          </h1>
          <p className="mt-5 text-paper/75 max-w-xl leading-relaxed">
            A selection of completed contracts spanning power infrastructure,
            water supply, civil works and institutional supply.
          </p>
        </div>
      </div>

      <ProjectsFilter projects={projects} />
    </div>
  );
}
