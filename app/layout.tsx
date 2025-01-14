import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer"
import "./globals.css";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});



export const metadata: Metadata = {
  title: "XYZ Law Firm",
  description: "XYZ LAWFIRM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased `}>
        <div className="relative overflow-hidden bg-gray-100">
          <Navbar />
          <div className="relative">
            {children}
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
