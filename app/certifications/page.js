import Link from "next/link";
import { legalDocuments, policies } from "@/data/content";
import LineDivider from "@/components/LineDivider";
import Icon from "@/components/Icon";

export const metadata = {
  title: "Certifications & Compliance",
  description:
    "KASI Technical Services Ltd's Health & Safety, Environmental and Quality policy statements, plus corporate and regulatory documentation on file for prequalification and tendering.",
};

export default function CertificationsPage() {
  return (
    <div>
      <div className="bg-navydeep text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-amber mb-4">Compliance</p>
          <h1 className="font-display font-700 text-4xl max-w-2xl">
            Certifications &amp; Compliance
          </h1>
          <p className="mt-5 text-paper/75 max-w-xl leading-relaxed">
            Corporate, regulatory and policy documents held on file. Verified
            copies are made available to clients and procurement offices on request.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="eyebrow text-steel mb-4">Policy statements — dated</p>
        <div className="border border-line overflow-x-auto">
          <table className="w-full text-sm min-w-[560px]">
            <thead>
              <tr className="bg-line/40 text-left">
                <th className="px-4 py-3 font-display font-600 text-navy">Document</th>
                <th className="px-4 py-3 font-display font-600 text-navy">Signed</th>
                <th className="px-4 py-3 font-display font-600 text-navy">Signatory</th>
                <th className="px-4 py-3 font-display font-600 text-navy text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {policies.map((p) => (
                <tr key={p.id} className="border-t border-line">
                  <td className="px-4 py-3 text-ink/85">{p.title}</td>
                  <td className="px-4 py-3 font-mono text-xs text-steel">{p.date}</td>
                  <td className="px-4 py-3 text-ink/70">Nansereko Hadijah, Director</td>
                  <td className="px-4 py-3 text-right">
                    <Link href={`/policies#${p.id}`} className="inline-flex items-center gap-1 text-green text-xs font-medium hover:text-navy transition-colors">
                      View <Icon name="arrow-right" size={12} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <LineDivider label="Corporate & regulatory documents" />

        <p className="text-sm text-ink/70 max-w-xl mb-6">
          The following are held on file. Specific issue/expiry dates and
          verified copies are provided directly to clients and procurement
          offices during tender evaluation.
        </p>
        <div className="border border-line overflow-x-auto">
          <table className="w-full text-sm min-w-[500px]">
            <thead>
              <tr className="bg-line/40 text-left">
                <th className="px-4 py-3 font-display font-600 text-navy">Document</th>
                <th className="px-4 py-3 font-display font-600 text-navy">Status</th>
                <th className="px-4 py-3 font-display font-600 text-navy text-right">Availability</th>
              </tr>
            </thead>
            <tbody>
              {legalDocuments.map((doc) => (
                <tr key={doc} className="border-t border-line">
                  <td className="px-4 py-3 text-ink/85 flex items-center gap-2.5">
                    <Icon name="file-text" size={15} className="text-green shrink-0" />
                    {doc}
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1.5 text-xs text-green">
                      <Icon name="check-circle" size={13} /> On file
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right text-xs text-steel">On request</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 border border-line p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-ink/75 max-w-md">
            Need copies of any of these documents for a tender submission?
          </p>
          <Link
            href="/contact"
            className="bg-navy text-paper px-6 py-2.5 text-sm font-medium hover:bg-green transition-colors focus-ring whitespace-nowrap"
          >
            Request documents
          </Link>
        </div>
      </div>
    </div>
  );
}
