import type { Metadata } from "next";
import "./globals.css";

const title = "Websites & Business Tools for DMV Local Businesses | Christopher Brown";
const description = "Websites, custom domains, business email, scheduling, local SEO, and practical business tools for local companies across DC, Maryland, and Northern Virginia. Free estimates and flexible support.";
const socialTitle = "Less busywork. More time for the work that pays.";
const socialDescription = "Websites and practical tools for local businesses across DC, Maryland, and Northern Virginia. Free estimates, flexible hosting, and ongoing support.";
const socialImage = "https://christopherbrown.ai/og-local-business-v3.png";
const socialImageAlt = "Less busywork. More time for the work that pays. christopherbrown.ai.";

export const metadata: Metadata = {
  metadataBase: new URL("https://christopherbrown.ai"),
  title,
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: socialTitle,
    description: socialDescription,
    url: "https://christopherbrown.ai",
    siteName: "christopherbrown.ai",
    locale: "en_US",
    type: "website",
    images: [{ url: socialImage, secureUrl: socialImage, width: 1200, height: 630, type: "image/png", alt: socialImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: socialDescription,
    images: [{ url: socialImage, width: 1200, height: 630, alt: socialImageAlt }],
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
  serviceType: ["Small business websites", "Custom domain setup", "Business email setup", "Local search and SEO", "Scheduling and booking", "Customer relationship management", "Estimates and approvals", "Business software integrations", "Website hosting and maintenance", "Ongoing website support"],
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
        <script
          type="module"
          async
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={JSON.stringify({ token: "9d77a540d1424dd0be48e806bce5d132" })}
        />
      </body>
    </html>
  );
}
