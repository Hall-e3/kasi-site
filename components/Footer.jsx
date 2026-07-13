import Image from "next/image";
import Link from "next/link";
import { company, services, socials } from "@/data/content";
import Icon from "@/components/Icon";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects Portfolio" },
  { href: "/clients", label: "Clients & Partners" },
  { href: "/certifications", label: "Certifications" },
  { href: "/policies", label: "Policies" },
  { href: "/structure", label: "Organizational Structure" },
  { href: "/contact", label: "Contact Us" },
  { href: "/quote", label: "Request a Quotation" },
];

export default function Footer() {
  return (
    <footer className="bg-navydeep text-paper/80 mt-24">
      <div className="relative w-full h-2.5 overflow-hidden" aria-hidden="true">
        <Image src="/wave.png" alt="" fill className="object-cover object-left" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-paper p-1 shrink-0">
              <Image src="/logo.png" alt="" width={34} height={37} />
            </div>
            <p className="font-display font-700 text-base text-paper leading-tight">{company.name}</p>
          </div>
          <p className="text-sm max-w-xs">
            Your trusted partner in engineering excellence. We deliver safe,
            quality and reliable solutions.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a href={socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-8 h-8 rounded-full border border-paper/20 flex items-center justify-center hover:bg-greenbright hover:border-greenbright transition-colors">
              <Icon name="message-circle" size={14} />
            </a>
            <a href={socials.email} aria-label="Email" className="w-8 h-8 rounded-full border border-paper/20 flex items-center justify-center hover:bg-greenbright hover:border-greenbright transition-colors">
              <Icon name="mail" size={14} />
            </a>
            <a href={socials.linkedin} aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-paper/20 flex items-center justify-center hover:bg-greenbright hover:border-greenbright transition-colors">
              <Icon name="linkedin" size={14} />
            </a>
          </div>
        </div>

        <div className="text-sm">
          <p className="eyebrow text-paper/50 mb-3">Quick Links</p>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-greenbright transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm">
          <p className="eyebrow text-paper/50 mb-3">Our Services</p>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.id}>
                <Link href={`/services#${s.id}`} className="hover:text-greenbright transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm space-y-1.5">
          <p className="eyebrow text-paper/50 mb-3">Contact Us</p>
          <p>{company.address}</p>
          <p>{company.poBox}</p>
          {company.phones.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>{company.email}</p>
          <p className="eyebrow text-amber mt-4">TIN {company.tin}</p>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-paper/40 flex flex-col sm:flex-row justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span className="flex gap-4">
            <span className="font-mono">Est. {company.founded}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
