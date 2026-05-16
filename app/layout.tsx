import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ParcelTracking — Track any parcel from 1,247 carriers, free",
  description:
    "Paste your tracking number — we'll find your parcel across FedEx, UPS, DHL, USPS, China Post, AliExpress, Amazon and 1,200+ more couriers. Free, no signup.",
  openGraph: {
    title: "ParcelTracking — Track any parcel from 1,247 carriers, free",
    description:
      "One number. 1,247 couriers. Live updates, smart ETAs, push notifications on the app.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ParcelTracking — Track any parcel from 1,247 carriers, free",
    description:
      "One number. 1,247 couriers. Live updates, smart ETAs, push notifications on the app.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">{children}</body>
    </html>
  );
}
