import type { Metadata } from "next";
import "./globals.css";

const title = "Simple Business Tools for Service Companies | Christopher Brown";
const description = "Simple, practical business tools for contractors, home service companies, property managers, and other owner-run businesses across the Washington, DC area.";

export const metadata: Metadata = {
  metadataBase: new URL("https://christopherbrown.ai"),
  title,
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title,
    description,
    url: "https://christopherbrown.ai",
    siteName: "christopherbrown.ai",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-service-businesses.png", width: 1200, height: 630, alt: "Less busywork. More time for the work that pays." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-service-businesses.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "christopherbrown.ai",
  url: "https://christopherbrown.ai",
  description,
  areaServed: [
    { "@type": "City", name: "Washington, DC" },
    { "@type": "AdministrativeArea", name: "Northern Virginia" },
    { "@type": "AdministrativeArea", name: "Maryland" },
  ],
  email: "hello@christopherbrown.io",
  serviceType: ["Simple business tools", "Lead and follow-up organization", "Scheduling support", "Customer communication tools"],
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Service business owners",
  },
  founder: {
    "@type": "Person",
    name: "Christopher Brown",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </body>
    </html>
  );
}
