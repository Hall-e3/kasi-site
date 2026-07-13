import { capabilityLadder } from "@/data/content";

export default function CapabilityLadder() {
  return (
    <div className="relative">
      <div
        className="absolute left-[27px] top-3 bottom-3 w-px bg-navy/25"
        aria-hidden="true"
      />
      <ol className="space-y-7">
        {capabilityLadder.map((rung, i) => (
          <li key={rung.level} className="relative pl-16">
            <div
              className="absolute left-0 top-0 w-14 h-14 rounded-full border border-navy/25 bg-paper flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="font-mono text-[11px] text-navy font-medium leading-none text-center">
                {rung.level}
              </span>
            </div>
            <p className="text-ink/85 pt-3.5">{rung.label}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
