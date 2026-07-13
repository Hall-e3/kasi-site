import { services, coreBusiness } from "@/data/content";
import LineDivider from "@/components/LineDivider";
import Icon from "@/components/Icon";
import Link from "next/link";

export const metadata = {
  title: "Services",
  description:
    "Power line construction up to 33kV, generator and motor works, industrial and domestic installations, solar street lighting, HVAC, civil works and general materials supply across Uganda.",
};

export default function ServicesPage() {
  return (
    <div>
      <div className="bg-navydeep text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-amber mb-4">What we do</p>
          <h1 className="font-display font-700 text-4xl max-w-2xl">
            General engineering works, supplies &amp; services.
          </h1>
          <p className="mt-5 text-paper/75 max-w-xl leading-relaxed">
            {coreBusiness} Capable of taking on anything from light building
            works to designing and installing multi-megawatt power supply
            systems.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-px bg-line border border-line">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className="bg-paper p-8 hover:bg-navy/5 transition-colors scroll-mt-24"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-full bg-green/10 flex items-center justify-center">
                  <Icon name={s.icon} size={20} className="text-green" />
                </div>
                <span className="font-mono text-[10px] text-green border border-green/40 px-2 py-0.5">
                  {s.voltage}
                </span>
              </div>
              <h2 className="font-display font-600 text-xl text-navy">{s.title}</h2>
              <p className="mt-3 text-sm text-ink/75 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <LineDivider label="Have a project in mind?" />

        <div className="flex items-center justify-between flex-wrap gap-4 py-6">
          <p className="text-ink/75 max-w-md">
            Tell us the scope of work and we&rsquo;ll come back with a quote.
          </p>
          <Link
            href="/quote"
            className="bg-navy text-paper px-6 py-3 text-sm font-medium hover:bg-green transition-colors focus-ring"
          >
            Request a quote
          </Link>
        </div>
      </div>
    </div>
  );
}
