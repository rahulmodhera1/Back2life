import type { Metadata } from "next";
import { Anton, Archivo, Pirata_One } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const pirata = Pirata_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pirata",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://back2life.vercel.app"),
  title: {
    default: "Back2Life — One Brand. Two Crafts.",
    template: "%s — Back2Life",
  },
  description:
    "Back2Life: grooming that resets you, ink that marks a new chapter. Back2Life Studios barbershop and Back2Life Ink tattoo studio under one roof.",
  openGraph: {
    title: "Back2Life — One Brand. Two Crafts.",
    description:
      "Grooming that resets you. Ink that marks a new chapter. Pick your side.",
    siteName: "Back2Life",
    type: "website",
    images: [{ url: "/photos/split-ink.jpg", width: 1200, height: 1600 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${archivo.variable} ${pirata.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
