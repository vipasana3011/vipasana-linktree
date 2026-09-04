import type { Metadata, Viewport } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "../components/analytics/GoogleAnalytics";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vipasana — Digital Scrapbook & Creative Hub",
  description:
    "Official interactive 3D digital scrapbook of Vipasana. Creative Technologist, Fashion Curator, and Aesthetic Designer.",
  keywords: [
    "Vipasana",
    "Portfolio",
    "Creative Technologist",
    "Pinterest",
    "Fashion",
    "Developer",
    "Instagram",
    "GitHub",
  ],
  authors: [{ name: "Vipasana" }],
  creator: "Vipasana",
  metadataBase: new URL("https://vipasana.me"),
  openGraph: {
    title: "Vipasana — Digital Scrapbook & Creative Hub",
    description:
      "Official interactive 3D digital scrapbook of Vipasana — Creative Technologist, Fashion Curator, and Aesthetic Designer.",
    url: "https://vipasana.me",
    siteName: "Vipasana",
    images: [
      {
        url: "/profile.pic.jpg",
        width: 1200,
        height: 630,
        alt: "Vipasana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipasana — Digital Scrapbook & Creative Hub",
    description: "Interactive 3D digital scrapbook of Vipasana.",
    images: ["/profile.pic.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF6F0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable}`}>
      <body className="bg-[#FAF6F0] text-[#221619] antialiased selection:bg-[#FCE7F3] selection:text-[#8B1E3F]">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
