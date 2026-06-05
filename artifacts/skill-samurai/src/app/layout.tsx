import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--app-font-heading",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--app-font-sans",
  display: "swap",
});
import { Suspense } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ModalProvider } from "@/components/ui/modal-provider";
import StickyMobileCta from "@/components/ui/sticky-mobile-cta";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.skillsamuraiwinnipeg.com"),
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
    "AI classes for kids Winnipeg",
    "game development kids Winnipeg",
    "coding camp Winnipeg",
    "kids tech classes Winnipeg",
    "learn to code Winnipeg",
    "STEM after school Winnipeg",
    "coding birthday party Winnipeg",
  ],
  authors: [{ name: "Skill Samurai Winnipeg" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.skillsamuraiwinnipeg.com",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.skillsamuraiwinnipeg.com",
    siteName: "Skill Samurai Winnipeg",
    title: "Skill Samurai Winnipeg | Coding & STEM Classes for Kids Ages 6–18",
    description:
      "Weekly coding, robotics, and STEM classes for kids ages 6–18 in Winnipeg. Two locations. Flexible month-to-month. Book a free trial!",
    images: [
      {
        url: "https://www.skillsamuraiwinnipeg.com/opengraph.jpg",
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
    images: ["https://www.skillsamuraiwinnipeg.com/opengraph.jpg"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.skillsamuraiwinnipeg.com",
    name: "Skill Samurai Winnipeg",
    description:
      "After-school coding, robotics, and STEM classes for kids ages 6–18 in Winnipeg, Manitoba. Two locations: North East and Seven Oaks.",
    url: "https://www.skillsamuraiwinnipeg.com",
    telephone: "+1-204-818-2155",
    email: "Genesis@SkillSamurai.com",
    image: "https://www.skillsamuraiwinnipeg.com/opengraph.jpg",
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Credit Card",
    openingHours: ["Mo-Fr 16:00-20:00", "Sa-Su 12:00-18:00"],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "North East Winnipeg",
        addressLocality: "Winnipeg",
        addressRegion: "MB",
        addressCountry: "CA",
        name: "Skill Samurai North East",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Seven Oaks",
        addressLocality: "Winnipeg",
        addressRegion: "MB",
        addressCountry: "CA",
        name: "Skill Samurai Seven Oaks",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.8951,
      longitude: -97.1384,
    },
    sameAs: [
      "https://www.instagram.com/skillsamuraiwinnipeg/",
      "https://www.facebook.com/skillsamuraiwinnipeg/",
      "https://www.youtube.com/@SkillSamuraiWinnipeg",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Coding & STEM Programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "After-School Coding Classes",
            description: "Weekly coding classes for kids ages 6–18 using Scratch, Python, JavaScript, and game design.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Free Trial Class",
            description: "Book a free trial coding class for your child.",
          },
        },
      ],
    },
  };

  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <body>
        <Providers>
          <div className="flex min-h-[100dvh] flex-col overflow-x-clip">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </div>
          <ModalProvider />
          <StickyMobileCta />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script id="domain-redirect" strategy="beforeInteractive">
          {`if(window.location.hostname.endsWith('.replit.app')){window.location.replace('https://www.skillsamuraiwinnipeg.com'+window.location.pathname+window.location.search);}`}
        </Script>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1047679766351825');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1047679766351825&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
