import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Janani M · AI Engineer",
  description:
    "Dynamic portfolio of Janani M — AI Engineer building intelligent full-stack solutions with machine learning, computer vision, and MERN.",
  openGraph: {
    title: "Janani M · AI Engineer",
    description:
      "AI Engineer building intelligent full-stack solutions with machine learning, computer vision, and MERN.",
    images: [{ url: "/images/hero.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--ink)] text-[var(--foreground)]">{children}</body>
    </html>
  );
}
