import { clients } from "@/data/content";
import LineDivider from "@/components/LineDivider";

export const metadata = {
  title: "Clients & Partners",
  description:
    "20 institutional clients trust KASI Technical Services, including Bank of Uganda, UETCL, UEDCL, UNBS, UCAA, UCC, NWSC, KCCA and district local governments across Uganda.",
};

export default function ClientsPage() {
  return (
    <div>
      <div className="bg-navydeep text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-amber mb-4">Prequalified with</p>
          <h1 className="font-display font-700 text-4xl max-w-2xl">
            Clients &amp; Partners
          </h1>
          <p className="mt-5 text-paper/75 max-w-xl leading-relaxed">
            We are proud to have worked with a wide range of reputable
            organisations in both the public and private sector.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <LineDivider label={`${clients.length} institutions`} />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
          {clients.map((c) => (
            <div
              key={c.abbr}
              className="border border-line bg-paper p-5 flex flex-col items-center text-center gap-3 hover:border-green/40 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-full border border-line flex items-center justify-center">
                <span className="font-display font-700 text-navy text-xs">{c.abbr}</span>
              </div>
              <p className="text-xs text-ink/70 leading-snug">{c.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
