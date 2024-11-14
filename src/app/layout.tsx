import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/providers/Providers";
import { Viewport } from "next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Casa Nogal",
  description: "Manejo de Inventarios y PV",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#727648",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
