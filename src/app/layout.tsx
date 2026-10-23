import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Amiri } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display-custom",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-arabic-custom",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://adnan-shamna-wedding.vercel.app"),
  title: "Mohammad Adnan & Shamna — Wedding Invitation",
  description: "Join us in celebrating the Wedding of Mohammad Adnan & Shamna on 30 & 31 October 2026.",
  openGraph: {
    title: "Mohammad Adnan & Shamna — Wedding Invitation",
    description: "Join us in celebrating the Wedding of Mohammad Adnan & Shamna on 30 & 31 October 2026.",
    images: [{ url: "/assets/images/og-image.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Adnan & Shamna — Wedding Invitation",
    description: "Join us in celebrating the Wedding of Mohammad Adnan & Shamna on 30 & 31 October 2026.",
    images: ["/assets/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${amiri.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="locked">
        {/* Paper grain overlay */}
        <svg className="grain" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={2} stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>

        {children}
      </body>
    </html>
  );
}
