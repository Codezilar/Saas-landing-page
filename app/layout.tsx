import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Sora, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AGENTCLI — SaaS, Websites, Apps, and Creative Services",
  description:
    "Build SaaS products, websites, mobile apps, creative assets, SEO campaigns, social media packages, animations, and 3D models with AGENTCLI.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
