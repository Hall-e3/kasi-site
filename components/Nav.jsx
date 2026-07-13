"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Icon from "@/components/Icon";
import { company, socials, services } from "@/data/content";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/clients", label: "Clients & Partners" },
  { href: "/certifications", label: "Certifications" },
  { href: "/structure", label: "Structure" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden md:block bg-navydeep text-paper/80 text-xs">
        <div className="mx-auto max-w-6xl px-6 h-9 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Icon name="phone" size={13} /> {company.phones[0]}
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="mail" size={13} /> {company.email}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href={socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hover:text-greenbright transition-colors">
              <Icon name="message-circle" size={14} />
            </a>
            <a href={socials.email} aria-label="Email" className="hover:text-greenbright transition-colors">
              <Icon name="mail" size={14} />
            </a>
            <a href={socials.linkedin} aria-label="LinkedIn" className="hover:text-greenbright transition-colors">
              <Icon name="linkedin" size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-paper/95 backdrop-blur border-b border-line">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 focus-ring shrink-0">
            <Image src="/logo.png" alt="KASI Technical Services Ltd" width={38} height={41} priority />
            <span className="font-display font-700 text-base leading-tight tracking-tight text-navy">
              KASI <span className="block text-steel font-normal text-[11px] hidden sm:block">Technical Services Ltd</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            <Link href="/" className="text-sm text-ink/80 hover:text-navy transition-colors focus-ring">
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-sm text-ink/80 hover:text-navy transition-colors focus-ring flex items-center gap-1">
                Our Services <Icon name="chevron-down" size={14} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72">
                  <div className="bg-paper border border-line shadow-lg py-2">
                    {services.map((s) => (
                      <Link
                        key={s.id}
                        href={`/services#${s.id}`}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-ink/80 hover:bg-navy/5 hover:text-navy transition-colors"
                      >
                        <Icon name={s.icon} size={16} className="text-green shrink-0" />
                        {s.title}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="block px-4 pt-2.5 mt-1 border-t border-line text-sm font-medium text-green"
                    >
                      View all services &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-ink/80 hover:text-navy transition-colors focus-ring"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/quote"
              className="bg-navy text-paper px-5 py-2.5 text-sm font-medium hover:bg-green transition-colors focus-ring"
            >
              Request a Quote
            </Link>
          </div>

          <button
            className="md:hidden focus-ring"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <Icon name={open ? "x" : "menu"} className="text-navy" />
          </button>
        </div>

        {open && (
          <nav className="md:hidden border-t border-line bg-paper px-6 py-4 flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)} className="text-sm text-ink/80">
              Home
            </Link>
            <Link href="/services" onClick={() => setOpen(false)} className="text-sm text-ink/80">
              Our Services
            </Link>
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-ink/80">
                {l.label}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="bg-navy text-paper px-5 py-2.5 text-sm font-medium text-center"
            >
              Request a Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
