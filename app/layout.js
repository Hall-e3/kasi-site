import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SocialRail from "@/components/SocialRail";
import { company } from "@/data/content";
import { siteUrl } from "@/lib/site";

const title = "KASI Technical Services Ltd | Electrical Engineering & Civil Works, Uganda";
const description =
  "KASI Technical Services Ltd — electrical engineering works, supplies & services up to 33kV, power line construction, solar street lighting and civil works. Trusted by Bank of Uganda, UETCL, UNBS and government agencies across Uganda.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | KASI Technical Services Ltd",
  },
  description,
  keywords: [
    "electrical contractor Uganda",
    "power line construction Uganda",
    "33kV contractor",
    "solar street lighting Uganda",
    "civil works contractor Kampala",
    "generator installation Uganda",
    "KASI Technical Services",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: siteUrl,
    siteName: company.name,
    title,
    description,
    images: [{ url: "/logo.png", width: 335, height: 362, alt: company.name }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1E1B1B",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: company.name,
  description: company.mission,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  foundingDate: company.incorporated,
  telephone: company.phones[0],
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address,
    addressLocality: "Kampala",
    addressCountry: "UG",
  },
  areaServed: "Uganda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body bg-paper text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <SocialRail />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
