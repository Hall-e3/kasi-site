import { company, socials } from "@/data/content";
import LineDivider from "@/components/LineDivider";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Contact",
  description:
    "Contact KASI Technical Services Ltd at Plot 283, Willis Road, Namirembe Hill, Kampala — call, WhatsApp or email our procurement and technical team directly.",
};

export default function ContactPage() {
  return (
    <div>
      <div className="bg-navydeep text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-amber mb-4">Get in touch</p>
          <h1 className="font-display font-700 text-4xl max-w-xl">
            Talk to our procurement &amp; technical team.
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <p className="eyebrow text-steel mb-4">Get in touch</p>
            <div className="space-y-5">
              <ContactRow icon="map-pin" label="Office">
                {company.address}
                <br />
                {company.poBox}
              </ContactRow>
              <ContactRow icon="phone" label="Phone">
                {company.phones.map((p) => (
                  <span key={p} className="block font-mono">{p}</span>
                ))}
              </ContactRow>
              <ContactRow icon="mail" label="Email">
                <a href={`mailto:${company.email}`} className="text-navy underline underline-offset-4 focus-ring">
                  {company.email}
                </a>
              </ContactRow>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <a href={socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:bg-green hover:text-paper hover:border-green transition-colors">
                <Icon name="message-circle" size={17} />
              </a>
              <a href={socials.email} aria-label="Email" className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:bg-green hover:text-paper hover:border-green transition-colors">
                <Icon name="mail" size={17} />
              </a>
              <a href={socials.linkedin} aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:bg-green hover:text-paper hover:border-green transition-colors">
                <Icon name="linkedin" size={17} />
              </a>
            </div>

            <div className="mt-10 border border-line h-64 overflow-hidden">
              <iframe
                title="KASI Technical Services Ltd — Namirembe Hill, Kampala"
                className="w-full h-full grayscale-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=32.5620%2C0.3020%2C32.5820%2C0.3160&layer=mapnik&marker=0.3090%2C32.5720"
              />
            </div>
          </div>

          <form className="space-y-4 border border-line p-6 md:p-8 h-fit">
            <p className="eyebrow text-steel mb-2">Send us a message</p>
            <div>
              <label className="text-sm text-ink/70 block mb-1" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full border border-line bg-paper px-3 py-2.5 text-sm focus-ring"
              />
            </div>
            <div>
              <label className="text-sm text-ink/70 block mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full border border-line bg-paper px-3 py-2.5 text-sm focus-ring"
              />
            </div>
            <div>
              <label className="text-sm text-ink/70 block mb-1" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full border border-line bg-paper px-3 py-2.5 text-sm focus-ring"
              />
            </div>
            <div>
              <label className="text-sm text-ink/70 block mb-1" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="w-full border border-line bg-paper px-3 py-2.5 text-sm focus-ring"
              />
            </div>
            <div>
              <label className="text-sm text-ink/70 block mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full border border-line bg-paper px-3 py-2.5 text-sm focus-ring"
              />
            </div>
            <button
              type="submit"
              className="bg-navy text-paper px-6 py-2.5 text-sm font-medium hover:bg-green transition-colors focus-ring"
            >
              Send Message
            </button>
            <p className="text-xs text-ink/50">
              This form needs to be wired up to an email service or backend
              before it will send.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactRow({ icon, label, children }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center shrink-0">
        <Icon name={icon} size={17} className="text-green" />
      </div>
      <div>
        <p className="eyebrow text-steel mb-1">{label}</p>
        <p className="text-ink/85 text-sm leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
