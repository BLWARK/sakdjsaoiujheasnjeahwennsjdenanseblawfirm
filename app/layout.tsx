import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Metadata API (SEO Optimization)
export const metadata: Metadata = {
  title: "XYZ Law Firm - Konsultan Hukum Profesional",
  description: "XYZ Law Firm menyediakan layanan hukum terbaik untuk kebutuhan hukum Anda di bidang perdata, pidana, bisnis, dan litigasi.",
  keywords: ["Pengacara Jakarta", "Firma Hukum", "Konsultan Hukum", "Layanan Hukum", "Hukum Perdata", "Hukum Pidana", "Hukum Bisnis"],
  authors: [{ name: "XYZ Law Firm", url: "https://xyzlawfirm.id" }],
  generator: "Next.js",
  applicationName: "XYZ Law Firm",
  creator: "XYZ Law Firm",
  publisher: "XYZ Law Firm",
  metadataBase: new URL("https://xyzlawfirm.id"),

  // Canonical URL
  alternates: {
    canonical: "https://xyzlawfirm.id",
  },

  // Open Graph untuk Media Sosial
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://xyzlawfirm.id",
    title: "XYZ Law Firm - Konsultan Hukum Profesional",
    description: "Firma hukum terbaik yang siap membantu Anda dalam berbagai permasalahan hukum.",
    siteName: "XYZ Law Firm",
    images: [
      {
        url: "https://xyzlawfirm.id/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "XYZ Law Firm",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "XYZ Law Firm - Konsultan Hukum Profesional",
    description: "Kami siap memberikan solusi hukum terbaik untuk Anda.",
    creator: "@xyzlawfirm",
    images: ["https://xyzlawfirm.id/images/twitter-card.jpg"],
  },

  // Tambahan SEO
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },

  category: "Legal",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} antialiased`}>
        <div className="relative overflow-hidden bg-gray-100">
          <Navbar />
          <div className="relative">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
