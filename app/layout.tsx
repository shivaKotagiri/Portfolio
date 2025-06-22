import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeLayout from "../components/ui/themeprovider";
import Navbar from "../components/ui/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShivaKumarKotagiri - Full Stack Developer",
  description: "Hii i am shiva, check out my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ThemeLayout>
          <Navbar />
          <div className="">{children}</div>
        </ThemeLayout>
      </body>
    </html>
  );
}
