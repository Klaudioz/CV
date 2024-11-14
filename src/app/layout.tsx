import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SunlitEffect } from "@/components/sunlit-effect";

import "./globals.css";
import "./sunlit.css";

export const metadata: Metadata = {
  title: "Sunlit Effect",
  description: "A recreation of the sunlit effect",
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
      </body>
    </html>
  );
}
