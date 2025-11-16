import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.css';
import "../amplifyConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'MERN Next Scan',
  description: 'Scan your product with Rapier & save to Mongo'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
