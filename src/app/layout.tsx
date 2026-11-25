import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat, Alex_Brush } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://sruman-engagement.vercel.app")
  ),
  title: {
    default: "SruMan | Celebration Portal • Srushti & Aman",
    template: "%s | SruMan",
  },
  description: "Official Celebration Portal of Srushti & Aman. Explore joyous ring ceremony memories and join us in celebrating our royal wedding festivities.",
  applicationName: "SruMan",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "SruMan | Celebration Portal • Srushti & Aman",
    description: "Official Celebration Portal of Srushti & Aman. Explore joyous ring ceremony memories and join us in celebrating our royal wedding festivities.",
    url: "/",
    siteName: "SruMan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SruMan | Srushti & Aman Royal Ring Ceremony & Wedding Celebration",
      },
    ],
    locale: "en_US",
    alternateLocale: ["gu_IN", "hi_IN"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SruMan | Celebration Portal • Srushti & Aman",
    description: "Official Celebration Portal of Srushti & Aman. Explore joyous ring ceremony memories and join us in celebrating our royal wedding festivities.",
    images: ["/og-image.png"],
  },
};

import { LanguageProvider } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${cormorant.variable} ${montserrat.variable} ${alexBrush.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#fbf9fb] text-[#2d142c] antialiased min-h-screen">
        <LanguageProvider>
          <LanguageSwitcher />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
