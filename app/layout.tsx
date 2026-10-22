import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { company } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const description =
  "AISyntax Studio designs, deploys, and scales production-grade AI, autonomous automation, and high-performance backend infrastructure for enterprise workloads.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
  title: {
    default: "AISyntax Studio | Automate. Optimize. Scale With AI.",
    template: "%s | AISyntax Studio",
  },
  description,
  keywords: [
    "AISyntax Studio",
    "enterprise AI",
    "RAG",
    "LLM applications",
    "MLOps",
    "AWS",
    "automation",
  ],
  openGraph: {
    title: "AISyntax Studio",
    description,
    siteName: company.name,
    type: "website",
    images: ["/brand/banner.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AISyntax Studio",
    description,
    images: ["/brand/banner.jpeg"],
  },
  icons: {
    icon: "/brand/logo.jpeg",
    apple: "/brand/logo.jpeg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    email: company.email,
    url: company.linkedin,
    sameAs: [company.linkedin],
    description,
  };

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
