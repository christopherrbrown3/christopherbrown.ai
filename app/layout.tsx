import type { Metadata } from "next";
import "./globals.css";

const title = "christopherbrown.ai | Software Built for Small Businesses";
const description = "Practical custom software, workflow automation, and software integration for small businesses across Washington, DC, Northern Virginia, and Maryland.";

export const metadata: Metadata = {
  metadataBase: new URL("https://christopherbrown.ai"),
  title,
  description,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title,
    description,
    url: "https://christopherbrown.ai",
    siteName: "christopherbrown.ai",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "christopherbrown.ai — Software built for your business." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
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
  serviceType: ["Custom business software", "Software integration", "Workflow automation", "Customer portals"],
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
