import Icon from "@/components/Icon";
import { socials } from "@/data/content";

export const metadata = {
  title: "Request a Quotation",
  description:
    "Request a detailed quotation from KASI Technical Services Ltd for electrical, civil, solar or supply works — or chat with our team directly on WhatsApp for a fast, informal quote.",
};

const infoCards = [
  {
    icon: "clipboard-check",
    title: "Quotation Reference",
    body: "You'll receive a unique reference number after submission.",
  },
  {
    icon: "mail",
    title: "Email Confirmation",
    body: "A confirmation email is sent to you and our team.",
  },
  {
    icon: "clock",
    title: "Fast Response",
    body: "Our team will review your request and respond promptly.",
  },
];

export default function QuotePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="eyebrow text-green mb-4">Get started</p>
      <h1 className="font-display font-700 text-4xl text-navy max-w-2xl">
        Request a Quotation
      </h1>
      <p className="mt-5 text-ink/75 max-w-xl leading-relaxed">
        Tell us about your project and our procurement team will follow up
        with a quotation.
      </p>

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-14 mt-14">
        <form className="border border-line p-6 md:p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field id="company" label="Company Name" required />
            <Field id="contact" label="Contact Person" required />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field id="email" label="Email Address" type="email" required />
            <Field id="phone" label="Phone Number" type="tel" required />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="projectType" className="text-sm text-ink/70 block mb-1.5">
                Project Type <span className="text-green">*</span>
              </label>
              <select id="projectType" name="projectType" className="w-full border border-line bg-paper px-3 py-2.5 text-sm focus-ring">
                <option>Electrical Installation</option>
                <option>Power Line Construction</option>
                <option>Solar Street Lighting</option>
                <option>Civil Works</option>
                <option>Generator Supply & Servicing</option>
                <option>General Supply</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="serviceRequired" className="text-sm text-ink/70 block mb-1.5">
                Service Required <span className="text-green">*</span>
              </label>
              <select id="serviceRequired" name="serviceRequired" className="w-full border border-line bg-paper px-3 py-2.5 text-sm focus-ring">
                <option>New Installation</option>
                <option>Maintenance / Repair</option>
                <option>Supply Only</option>
                <option>Design & Build</option>
                <option>Consultation</option>
              </select>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field id="location" label="Project Location" required />
            <div>
              <label htmlFor="budget" className="text-sm text-ink/70 block mb-1.5">
                Budget Range
              </label>
              <select id="budget" name="budget" className="w-full border border-line bg-paper px-3 py-2.5 text-sm focus-ring">
                <option>Under UGX 5,000,000</option>
                <option>UGX 5,000,000 – 20,000,000</option>
                <option>UGX 20,000,000 – 100,000,000</option>
                <option>Above UGX 100,000,000</option>
                <option>Not sure yet</option>
              </select>
            </div>
          </div>
          <Field id="startDate" label="Preferred Start Date" type="date" />
          <div>
            <label htmlFor="description" className="text-sm text-ink/70 block mb-1.5">
              Project Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Briefly describe your project"
              className="w-full border border-line bg-paper px-3 py-2.5 text-sm focus-ring"
            />
          </div>
          <div>
            <label htmlFor="drawings" className="text-sm text-ink/70 block mb-1.5">
              Upload Drawings / Documents
            </label>
            <input
              id="drawings"
              name="drawings"
              type="file"
              className="w-full border border-line bg-paper px-3 py-2.5 text-sm file:mr-4 file:border-0 file:bg-line file:px-3 file:py-1.5 file:text-xs focus-ring"
            />
          </div>
          <button
            type="submit"
            className="bg-navy text-paper px-7 py-3 text-sm font-medium hover:bg-green transition-colors focus-ring"
          >
            Submit Request
          </button>
          <p className="text-xs text-ink/50">
            This form needs to be wired up to an email service or backend
            before it will send.
          </p>
        </form>

        <div className="space-y-5">
          {infoCards.map((c) => (
            <div key={c.title} className="border border-line p-5 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center shrink-0">
                <Icon name={c.icon} size={18} className="text-green" />
              </div>
              <div>
                <p className="font-display font-600 text-navy text-sm">{c.title}</p>
                <p className="text-xs text-steel mt-1 leading-relaxed">{c.body}</p>
              </div>
            </div>
          ))}

          <div className="bg-navydeep text-paper p-6">
            <p className="font-display font-600 mb-2">Prefer to chat?</p>
            <p className="text-sm text-paper/70 mb-4">
              Reach our team directly on WhatsApp for a fast, informal quote request.
            </p>
            <a
              href={socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-amber text-navydeep px-5 py-2.5 text-sm font-medium hover:brightness-95 transition-all"
            >
              <Icon name="message-circle" size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ id, label, type = "text", required = false }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm text-ink/70 block mb-1.5">
        {label} {required && <span className="text-green">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className="w-full border border-line bg-paper px-3 py-2.5 text-sm focus-ring"
      />
    </div>
  );
}
