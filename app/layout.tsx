import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/_components/layout/Header";
import Footer from "@/app/_components/layout/Footer";

export const metadata: Metadata = {
  title: "Designo",
  description:
    "Designo is a creative agency crafting fully responsive websites, mobile app designs, and engaging digital branding solutions. We merge art and technology to help your business grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body>
        <Header />
        <main className="flex flex-col gap-40">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
