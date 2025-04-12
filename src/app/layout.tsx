import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SunlitEffect } from "@/components/sunlit-effect";
import { Analytics } from "@vercel/analytics/react"

import "./globals.css";
import "./sunlit.css";

export const metadata: Metadata = {
  title: "Claudio Canales Resume",
  description: "Claudio Canales Resume",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <SunlitEffect />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
