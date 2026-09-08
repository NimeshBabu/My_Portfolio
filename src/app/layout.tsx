import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const spacegrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const tanker = localFont({
  src: './fonts/Tanker-Regular.woff2',
  variable: '--font-tanker',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: "#1C1B21",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Nimesh Babu Thapa | UI/UX & Graphic Designer",
    template: "%s | Nimesh Babu Thapa",
  },

  description:
    "Nimesh Babu Thapa is a UI/UX and Graphic Designer passionate about crafting human-centered digital experiences, brand identities, and interactive web projects. Skilled in UI/UX design, visual identity, and building intuitive interfaces.",

  keywords: [
    "Nimesh Babu Thapa",
    "UI UX Designer",
    "Graphic Designer",
    "UI/UX & Graphic Designer",
    "Brand Designer",
    "Visual Designer",
    "Product Designer",
    "Figma Designer",
    "Interactive Web Design",
    "Human Centered Design",
    "Front-end Design",
    "Next.js Portfolio",
    "Nepal Designer"
  ],

  authors: [{ name: "Nimesh Babu Thapa" }],
  creator: "Nimesh Babu Thapa",

  metadataBase: new URL("https://nimeshbabuthapa.com.np"), // replace with your real domain

  openGraph: {
    title: "Nimesh Babu Thapa | UI/UX & Graphic Designer",
    description:
      "Explore the portfolio of Nimesh Babu Thapa — UI/UX and Graphic Designer crafting human-centered digital experiences, visual identities, and interactive web projects.",
    url: "https://nimeshbabuthapa.com.np",
    siteName: "Nimesh Babu Thapa Portfolio",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Nimesh Babu Thapa - UI/UX & Graphic Designer Portfolio",
      },
    ],
    locale: "en_NP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nimesh Babu Thapa | UI/UX & Graphic Designer",
    description:
      "Nimesh Babu Thapa is a UI/UX and Graphic Designer crafting human-centered digital experiences, brand identities, and interactive web projects.",
    images: ["/api/og"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/logo.svg"],
    apple: [
      { url: "/logo.svg" },
    ],
  },

  category: "design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nimesh Babu Thapa",
    "jobTitle": "UI/UX & Graphic Designer",
    "url": "https://nimeshbabuthapa.com.np",
    "description":
      "Nimesh Babu Thapa is a UI/UX and Graphic Designer passionate about crafting human-centered digital experiences, brand identities, and interactive web projects.",
    "knowsAbout": [
      "UI/UX Design",
      "Graphic Design",
      "User Experience",
      "User Interface",
      "Visual Design",
      "Brand Identity",
      "Web Design"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spacegrotesk.variable} ${tanker.variable} antialiased relative min-h-screen selection:bg-yellow-400 selection:text-black`}
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="none"><g clip-path="url(%23a)"><path fill="%231C1B21" d="M0 0h150v150H0z"/><path stroke="%2319181D" stroke-width="10" d="M35 150V0m80 150V0M0 35h150M0 115h150"/></g><defs><clipPath id="a"><path fill="%23fff" d="M0 0h150v150H0z"/></clipPath></defs></svg>')`,
          backgroundRepeat: "repeat",
          backgroundSize: "75px",
          backgroundPosition: "top left",
        }}
      >
        {children}
      </body>
    </html>
  );
}


