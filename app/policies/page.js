import Link from "next/link";
import { policies } from "@/data/content";
import LineDivider from "@/components/LineDivider";

export const metadata = {
  title: "Policies",
  description:
    "The full text of KASI Technical Services Ltd's Health & Safety, Environmental and Quality policies, dated 2 January 2026.",
};

export default function PoliciesPage() {
  return (
    <div>
      <div className="bg-navydeep text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-amber mb-4">Governance</p>
          <h1 className="font-display font-700 text-4xl max-w-2xl">
            Policies &amp; compliance.
          </h1>
          <p className="mt-5 text-paper/75 max-w-xl leading-relaxed">
            Signed statements covering health &amp; safety, environmental
            performance and quality management, for and on behalf of KASI
            Technical Services Ltd.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-14">
          {policies.map((p) => (
            <div key={p.id} id={p.id} className="grid md:grid-cols-[1fr_2fr] gap-6 scroll-mt-24">
              <div>
                <h2 className="font-display font-600 text-2xl text-navy">{p.title}</h2>
                <p className="font-mono text-xs text-steel mt-2">Dated {p.date}</p>
                <p className="text-xs text-ink/60 mt-3">
                  Signed by Nansereko Hadijah, Director
                </p>
              </div>
              <ul className="space-y-3">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-sm text-ink/80 leading-relaxed">
                    <span className="text-green shrink-0">&#9642;</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <LineDivider />

        <div className="mt-10 border border-line p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-ink/75">
            Corporate registration, tax and regulatory documents are listed
            separately.
          </p>
          <Link
            href="/certifications"
            className="bg-navy text-paper px-6 py-2.5 text-sm font-medium hover:bg-green transition-colors focus-ring whitespace-nowrap"
          >
            View certifications &amp; compliance &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
