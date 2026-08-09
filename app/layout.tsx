import type { Metadata } from "next";
import "./globals.css";

const title = "Websites & Business Tools for DMV Local Businesses | Christopher Brown";
const description = "Websites, scheduling, customer follow-up, estimates, local SEO, and practical business tools for owner-run companies across Washington, DC, Maryland, and Northern Virginia.";

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
  serviceType: ["Small business websites", "Local search and SEO", "Scheduling and booking", "Customer relationship management", "Estimates and approvals", "Business software integrations"],
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Local business owners in Washington, DC, Maryland, and Northern Virginia",
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
