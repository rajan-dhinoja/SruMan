import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "SruMan | The Royal Wedding • Srushti & Aman",
  },
  description: "The Royal Wedding of Srushti & Aman. Two souls, two families, bound by sacred vows. Multi-day celebrations, sacred rituals, and grand festivities.",
  openGraph: {
    title: "SruMan | The Royal Wedding • Srushti & Aman",
    description: "The Royal Wedding celebration of Srushti & Aman. Sacred vows, royal festivities, and eternal celebration.",
    url: "/wedding",
    siteName: "SruMan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SruMan | The Royal Wedding of Srushti & Aman",
      },
    ],
    locale: "en_US",
    alternateLocale: ["gu_IN", "hi_IN"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SruMan | The Royal Wedding • Srushti & Aman",
    description: "The Royal Wedding celebration of Srushti & Aman. Two souls, two families, bound by sacred vows.",
    images: ["/og-image.png"],
  },
};

export default function WeddingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
