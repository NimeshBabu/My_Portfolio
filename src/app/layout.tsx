import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const spacegrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});


const tanker = localFont({
  src: './fonts/Tanker-Regular.woff2',
  variable: '--font-tanker',
});


export const metadata: Metadata = {
  title: {
    default: "Nimesh Babu Thapa | UI/UX Designer & Creative Developer",
    template: "%s | Nimesh Babu Thapa",
  },

  description:
    "Nimesh Babu Thapa is a UI/UX Designer and Creative Developer passionate about crafting human-centered digital experiences and interactive web projects. Skilled in design, web technologies, and building intuitive interfaces.",

  keywords: [
    "Nimesh Babu Thapa",
    "UI UX Designer",
    "Creative Developer",
    "Web Developer",
    "Interactive Web Design",
    "Human Centered Design",
    "Front-end Development",
    "Next.js Portfolio",
    "Tailwind CSS Designer",
    "College Projects Portfolio"
  ],

  authors: [{ name: "Nimesh Babu Thapa" }],
  creator: "Nimesh Babu Thapa",

  metadataBase: new URL("https://yourdomain.com"), // replace with your real domain

  openGraph: {
    title: "Nimesh Babu Thapa | UI/UX Designer & Creative Developer",
    description:
      "Explore the portfolio of Nimesh Babu Thapa — blending UI/UX design with coding skills to create interactive, human-centered digital experiences and web projects.",
    url: "https://yourdomain.com",
    siteName: "Nimesh Babu Thapa Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nimesh Babu Thapa - UI/UX Designer & Creative Developer Portfolio",
      },
    ],
    locale: "en_NP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nimesh Babu Thapa | UI/UX Designer & Creative Developer",
    description:
      "UI/UX Designer and Creative Developer building human-centered interfaces and interactive web projects.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  category: "design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spacegrotesk.variable} ${tanker.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
