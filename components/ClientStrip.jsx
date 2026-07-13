import { clients } from "@/data/content";

export default function ClientStrip() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-6">
      {clients.slice(0, 8).map((c) => (
        <div key={c.abbr} className="flex flex-col items-center text-center gap-2" title={c.name}>
          <div className="w-16 h-16 rounded-full border border-line bg-paper flex items-center justify-center hover:border-green/50 hover:shadow-md transition-all">
            <span className="font-display font-700 text-navy text-xs tracking-tight">
              {c.abbr}
            </span>
          </div>
          <span className="text-[10px] text-steel leading-tight max-w-[80px]">{c.abbr}</span>
        </div>
      ))}
    </div>
  );
}
