import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { CalendarModal } from "@/components/ui/calendar-modal";
import { BookingModal } from "@/components/ui/booking-modal";

export const metadata: Metadata = {
  title: "Skill Samurai Winnipeg | Coding & STEM Classes for Kids Ages 6–18",
  description:
    "Skill Samurai Winnipeg offers weekly coding, robotics, and STEM classes for kids ages 6–18. Two locations: North East & Seven Oaks. Flexible month-to-month membership. Book a free trial class today!",
  keywords: [
    "coding classes kids Winnipeg",
    "STEM classes Winnipeg",
    "kids robotics Winnipeg",
    "coding academy Winnipeg",
    "after school coding Winnipeg",
    "Skill Samurai Winnipeg",
    "kids programming classes",
  ],
  authors: [{ name: "Skill Samurai Winnipeg" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://winnipeg.skillsamurai.com",
    siteName: "Skill Samurai Winnipeg",
    title: "Skill Samurai Winnipeg | Coding & STEM Classes for Kids Ages 6–18",
    description:
      "Weekly coding, robotics, and STEM classes for kids ages 6–18 in Winnipeg. Two locations. Flexible month-to-month. Book a free trial!",
    images: [
      {
        url: "https://winnipeg.skillsamurai.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Skill Samurai Winnipeg — Coding & STEM for Kids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skill Samurai Winnipeg | Coding & STEM Classes for Kids Ages 6–18",
    description:
      "Weekly coding, robotics, and STEM classes for kids ages 6–18 in Winnipeg. Two locations. Book a free trial!",
    images: ["https://winnipeg.skillsamurai.com/og-image.jpg"],
  },
  other: {
    "geo.region": "CA-MB",
    "geo.placename": "Winnipeg",
    "geo.position": "49.8951;-97.1384",
    ICBM: "49.8951, -97.1384",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex min-h-[100dvh] flex-col overflow-x-clip">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CalendarModal />
          <BookingModal />
        </Providers>
      </body>
    </html>
  );
}
