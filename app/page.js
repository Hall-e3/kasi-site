import Link from "next/link";
import Image from "next/image";
import {
  company,
  coreBusiness,
  projects,
  services,
  whyChooseUs,
} from "@/data/content";
import LineDivider from "@/components/LineDivider";
import CapabilityLadder from "@/components/CapabilityLadder";
import ClientStrip from "@/components/ClientStrip";
import Icon from "@/components/Icon";

export default function Home() {
  const featuredProjects = projects.filter((p) =>
    ["NWSC", "UNBS", "UCAA"].includes(p.client),
  );
  const quickServices = services.slice(0, 5);

  return (
    <>
      <section className="relative overflow-hidden min-h-[560px] md:min-h-[640px] flex items-end">
        <Image
          src="/projects/tbea-transformer.jpg"
          alt="KASI team installing a transformer during a rural electrification project"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navydeep via-navydeep/75 to-navydeep/25"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-navydeep via-navydeep/10 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-16 md:pb-20 w-full">
          <p className="eyebrow text-amber mb-5">
            Uganda &middot; Est. {company.founded}
          </p>
          <h1 className="font-display font-700 text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-paper max-w-2xl">
            Powering Uganda. Building the future.
          </h1>
          <p className="mt-5 eyebrow text-paper/70 normal-case tracking-normal text-sm font-body">
            Electrical Engineering &middot; Civil Works &middot; Solar Solutions
            &middot; Maintenance &middot; Supplies
          </p>
          <p className="mt-5 text-lg text-paper/80 leading-relaxed max-w-xl">
            {coreBusiness} Prequalified contractor to Bank of Uganda, UETCL,
            UNBS, UCAA and district local governments across the country.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/quote"
              className="bg-amber text-navydeep px-6 py-3 text-sm font-medium hover:brightness-95 transition-all focus-ring"
            >
              Request a quote
            </Link>
            <Link
              href="/contact"
              className="border border-paper/40 text-paper px-6 py-3 text-sm font-medium hover:bg-paper/10 transition-colors focus-ring"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-navy text-paper">
        <div className="mx-auto max-w-6xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            [
              `${new Date().getFullYear() - company.founded}+`,
              "Years in business",
            ],
            ["33kV", "Core voltage capability"],
            ["20", "Institutional clients"],
            [projects.length.toString(), "Executed projects shown"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-mono text-2xl text-amber">{n}</p>
              <p className="text-xs text-paper/70 mt-1">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <p className="eyebrow text-green mb-3">
          Welcome to KASI Technical Services Ltd
        </p>
        <h2 className="font-display font-700 text-3xl text-navy max-w-3xl mx-auto leading-snug">
          A leading Ugandan engineering company delivering electrical works,
          civil works, solar solutions, maintenance, supplies and general
          engineering services.
        </h2>
        <p className="mt-5 text-ink/70 max-w-2xl mx-auto">
          We are committed to safety, quality and client satisfaction on every
          contract, from single-site installations to multi-district power line
          programmes.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-14">
          {whyChooseUs.map((w) => (
            <div
              key={w.title}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full border border-green/30 flex items-center justify-center mb-3">
                <Icon name={w.icon} size={22} className="text-green" />
              </div>
              <p className="font-display font-600 text-sm text-navy">
                {w.title}
              </p>
              <p className="text-xs text-steel mt-1 leading-snug">
                {w.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <LineDivider label="Our core services" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <h2 className="font-display font-700 text-3xl text-navy">
            Our core services
          </h2>
          <Link
            href="/services"
            className="text-sm font-medium text-green hover:text-navy transition-colors focus-ring"
          >
            View all services &rarr;
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {quickServices.map((s) => (
            <Link
              href={`/services#${s.id}`}
              key={s.id}
              className="group border border-line bg-paper p-6 hover:border-green/40 hover:shadow-md transition-all"
            >
              <div className="w-11 h-11 rounded-full bg-green/10 flex items-center justify-center mb-4 group-hover:bg-green group-hover:text-paper transition-colors">
                <Icon
                  name={s.icon}
                  size={20}
                  className="text-green group-hover:text-paper"
                />
              </div>
              <h3 className="font-display font-600 text-navy">{s.title}</h3>
              <p className="text-sm text-ink/70 mt-2 leading-relaxed line-clamp-2">
                {s.description}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-green mt-4">
                Read more <Icon name="arrow-right" size={13} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <LineDivider label="Featured work" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="eyebrow text-steel mb-2">Executed contracts</p>
            <h2 className="font-display font-700 text-3xl text-navy">
              Real-world engineering, delivered.
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-medium text-green hover:text-navy transition-colors flex items-center gap-1 group focus-ring"
          >
            Explore all {projects.length} projects
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              &rarr;
            </span>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="border border-line bg-paper flex flex-col h-full hover:border-green/40 hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              <div className="h-56 w-full overflow-hidden border-b border-line relative bg-line">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navydeep/30 to-transparent" />
                <span className="absolute top-4 left-4 bg-paper px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-navy border border-line shadow-sm">
                  {project.client}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg text-navy font-600 group-hover:text-green transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ink/75 mt-3 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-line/60 text-navy text-[10px] font-mono px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <LineDivider label="Capability" />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-14 items-start">
          <div>
            <h2 className="font-display font-700 text-3xl text-navy">
              One contractor, the full voltage range.
            </h2>
            <p className="mt-4 text-ink/75 leading-relaxed">
              From high-voltage transmission works down to domestic wiring and
              general civil supply — KASI covers the full chain most clients
              need a single prequalified contractor for.
            </p>
            <Link
              href="/services"
              className="inline-block mt-6 text-sm font-medium text-navy underline underline-offset-4 focus-ring"
            >
              See all services &rarr;
            </Link>
          </div>
          <CapabilityLadder />
        </div>
      </section>

      <LineDivider label="Trusted by leading organisations" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display font-700 text-3xl text-navy mb-2">
          Trusted by Uganda&rsquo;s public institutions.
        </h2>
        <p className="text-ink/75 max-w-2xl mb-10">
          Prequalified and delivering across banking, power, aviation,
          standards, water and district government sectors.
        </p>
        <ClientStrip />
        <Link
          href="/clients"
          className="inline-block mt-6 text-sm font-medium text-navy underline underline-offset-4 focus-ring"
        >
          View full client list &rarr;
        </Link>
      </section>

      <section className="border-t border-line bg-navydeep text-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-700 text-2xl">
              Have a scope of work to tender?
            </h2>
            <p className="text-paper/70 mt-2 max-w-md">
              Get in touch with our procurement and technical team directly.
            </p>
          </div>
          <Link
            href="/quote"
            className="bg-amber text-navydeep px-6 py-3 text-sm font-medium hover:brightness-95 transition-all focus-ring whitespace-nowrap"
          >
            Request a Quotation
          </Link>
        </div>
      </section>
    </>
  );
}
