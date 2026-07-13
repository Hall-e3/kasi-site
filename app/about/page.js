import Link from "next/link";
import { company } from "@/data/content";
import LineDivider from "@/components/LineDivider";

export const metadata = {
  title: "About",
  description:
    "KASI Technical Services Ltd is a Ugandan engineering company founded in 2013 and incorporated in 2014, delivering electrical, civil and solar works to Bank of Uganda, UETCL, UNBS and government agencies nationwide.",
};

export default function AboutPage() {
  return (
    <div>
      <div className="bg-navydeep text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-amber mb-4">About us</p>
          <h1 className="font-display font-700 text-4xl max-w-2xl">
            Building Uganda&rsquo;s infrastructure since {company.founded}.
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="eyebrow text-steel mb-3">Company background</p>
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-14">
          <div className="space-y-5 text-ink/80 leading-relaxed">
            <p>
              KASI Technical Services Ltd was established in {company.founded} and
              officially incorporated on {company.incorporated}. It has grown
              progressively into one of the country&rsquo;s leading reputable
              business houses, sourcing the right technology to be a partner
              for success.
            </p>
            <p>
              Over more than a decade, KASI has built an enviable reputation
              for quality electrical installations, maintenance services,
              civil works, solar street lights and power line construction.
              The company specialises in all aspects of general engineering
              works, supplies and services.
            </p>
            <p>
              Our offices and workshops are centrally and strategically
              positioned to enable fast access to supplies and major clients
              within and around Kampala &mdash; easily accessible by clients,
              workers and partners alike.
            </p>
          </div>

          <div className="border border-line p-6 h-fit">
            <p className="eyebrow text-steel mb-4">Company facts</p>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-line pb-2">
                <dt className="text-ink/60">Founded</dt>
                <dd className="font-mono">{company.founded}</dd>
              </div>
              <div className="flex justify-between border-b border-line pb-2">
                <dt className="text-ink/60">Incorporated</dt>
                <dd className="font-mono">{company.incorporated}</dd>
              </div>
              <div className="flex justify-between border-b border-line pb-2">
                <dt className="text-ink/60">TIN</dt>
                <dd className="font-mono">{company.tin}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink/60">HQ</dt>
                <dd className="text-right">{company.address}</dd>
              </div>
            </dl>
          </div>
        </div>

        <LineDivider label="Mission & Vision" />

        <div className="grid md:grid-cols-2 gap-12 py-4">
          <div>
            <p className="eyebrow text-steel mb-3">Mission</p>
            <p className="font-display text-xl text-navy leading-snug">
              &ldquo;{company.mission}&rdquo;
            </p>
          </div>
          <div>
            <p className="eyebrow text-steel mb-3">Vision</p>
            <p className="font-display text-xl text-navy leading-snug">
              &ldquo;{company.vision}&rdquo;
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 mt-4">
          {company.values.map((v) => (
            <span key={v} className="eyebrow text-green">
              {v}
            </span>
          ))}
        </div>

        <div className="mt-14 border border-line p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-ink/75">
            See how the team is organised, from the Board down to field crews.
          </p>
          <Link
            href="/structure"
            className="bg-navy text-paper px-6 py-2.5 text-sm font-medium hover:bg-green transition-colors focus-ring whitespace-nowrap"
          >
            View organizational structure &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
