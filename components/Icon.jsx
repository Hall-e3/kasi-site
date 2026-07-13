import {
  Users,
  BadgeCheck,
  ShieldCheck,
  Clock,
  MapPinned,
  Zap,
  Power,
  Cog,
  PlugZap,
  Sun,
  Wind,
  Hammer,
  Package,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Upload,
  CheckCircle2,
  FileText,
  Building2,
  ClipboardCheck,
  Send,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

function LinkedinGlyph({ className, size = 20 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const icons = {
  users: Users,
  "badge-check": BadgeCheck,
  "shield-check": ShieldCheck,
  clock: Clock,
  "map-pinned": MapPinned,
  zap: Zap,
  power: Power,
  cog: Cog,
  "plug-zap": PlugZap,
  sun: Sun,
  wind: Wind,
  hammer: Hammer,
  package: Package,
  phone: Phone,
  mail: Mail,
  "message-circle": MessageCircle,
  "map-pin": MapPin,
  upload: Upload,
  "check-circle": CheckCircle2,
  "file-text": FileText,
  building: Building2,
  "clipboard-check": ClipboardCheck,
  send: Send,
  menu: Menu,
  x: X,
  "chevron-down": ChevronDown,
  "arrow-right": ArrowRight,
};

export default function Icon({ name, className = "", size = 20, strokeWidth = 1.75 }) {
  if (name === "linkedin") {
    return <LinkedinGlyph className={className} size={size} />;
  }
  const Cmp = icons[name] || Zap;
  return <Cmp className={className} size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}
