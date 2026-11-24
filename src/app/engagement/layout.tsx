import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "SruMan | Engagement Ceremony • Srushti & Aman",
  },
  description: "Srushti અને Aman ની ભવ્ય રિંગ સેરેમની અને ડિજિટલ કંકોતરી. Sacred engagement ceremonies, digital patrika, royal palace gates & guestbook.",
  openGraph: {
    title: "SruMan | Engagement Ceremony • Srushti & Aman",
    description: "Srushti અને Aman ની ભવ્ય સગાઈ વિધિની ડિજિટલ કંકોતરી અને આમંત્રણ પત્રિકા. Sacred engagement ceremonies, digital patrika, royal palace gates & guestbook.",
    url: "/engagement",
    siteName: "SruMan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SruMan | Srushti & Aman Engagement Ceremony",
      },
    ],
    locale: "gu_IN",
    alternateLocale: ["en_US", "hi_IN"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SruMan | Engagement Ceremony • Srushti & Aman",
    description: "Srushti અને Aman ની ભવ્ય સગાઈ વિધિની ડિજિટલ કંકોતરી અને આમંત્રણ પત્રિકા.",
    images: ["/og-image.png"],
  },
};

export default function EngagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
