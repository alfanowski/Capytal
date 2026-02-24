import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capytal Tech — Full Stack & Cybersecurity",
  description:
    "Capytal Tech è il team di sviluppo web full stack e cybersecurity di Andrea Alfano (alfanowski). Build what matters. Secure what's critical.",
  keywords: ["full stack", "cybersecurity", "web development", "next.js", "react", "hacking etico"],
  authors: [{ name: "Andrea Alfano", url: "https://github.com/alfanowski" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Capytal Tech — Full Stack & Cybersecurity",
    description: "Build what matters. Secure what's critical.",
    type: "website",
    images: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
