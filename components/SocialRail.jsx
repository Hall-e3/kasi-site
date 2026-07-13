import SocialIcon from "@/components/SocialIcon";
import { socials } from "@/data/content";

const items = [
  { platform: "whatsapp", href: socials.whatsapp, label: "WhatsApp" },
  { platform: "mail", href: socials.email, label: "Email" },
  { platform: "linkedin", href: socials.linkedin, label: "LinkedIn" },
];

export default function SocialRail() {
  return (
    <div className="hidden md:flex flex-col gap-3 fixed right-6 top-1/2 -translate-y-1/2 z-40">
      {items.map((s) => (
        <a
          key={s.platform}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          className="w-10 h-10 rounded-full shadow-md overflow-hidden hover:scale-110 transition-transform"
        >
          <SocialIcon platform={s.platform} size={40} className="w-full h-full" />
        </a>
      ))}
    </div>
  );
}
