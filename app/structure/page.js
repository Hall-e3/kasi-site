import Box from "@/components/OrgBox";

export const metadata = {
  title: "Organizational Structure",
  description:
    "How KASI Technical Services Ltd is organised, from the Board of Directors and Technical Director down to project engineers, field supervisors and field technicians.",
};

export default function StructurePage() {
  return (
    <div>
      <div className="bg-navydeep text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-amber mb-4">How we&rsquo;re organised</p>
          <h1 className="font-display font-700 text-4xl max-w-2xl">
            Organizational Structure
          </h1>
          <p className="mt-5 text-paper/75 max-w-xl leading-relaxed">
            A lean, field-focused structure connecting the Board directly to
            project delivery on site.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 overflow-x-auto">
        <div className="min-w-[820px] flex flex-col items-center gap-10">
          <Box tone="dark">Board of Directors</Box>
          <Connector />
          <Box tone="dark">Technical Director</Box>
          <Connector />
          <Box tone="green">General Manager</Box>
          <Connector />

          <div className="grid grid-cols-3 gap-8 w-full">
            <Branch label="Manager, HR &amp; Administration">
              <Box small>Administrative Officer</Box>
              <Box small>Administrative Assistant</Box>
              <Box small>HR Officer</Box>
              <Box small>HR Assistant</Box>
            </Branch>

            <Branch label="Manager, Procurement &amp; Finance">
              <Box small>Accountant</Box>
              <Box small>Cashier</Box>
              <Box small>Store Keeper</Box>
            </Branch>

            <Branch label="Projects Manager">
              <Box small>Project Engineers</Box>
              <Box small>Safety Officer</Box>
              <Box small>Field Supervisors</Box>
              <Box small>Field Technicians</Box>
              <Box small>Drivers &amp; Casuals</Box>
            </Branch>
          </div>
        </div>
      </div>
    </div>
  );
}

function Connector() {
  return <div className="w-px h-6 bg-line" aria-hidden="true" />;
}

function Branch({ label, children }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-px h-6 bg-line" aria-hidden="true" />
      <Box tone="navy">{label}</Box>
      <div className="w-px h-6 bg-line" aria-hidden="true" />
      <div className="flex flex-col gap-3 w-full">{children}</div>
    </div>
  );
}
