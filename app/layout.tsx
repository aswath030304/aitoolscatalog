import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer"; // <-- ADD THIS

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Tools Catalog",
  description: "Browse the best AI tools for text, image, code, research, audio, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {/* Neon Header */}
        <Header />

        {/* Page Content */}
        <main className="pt-24 max-w-6xl mx-auto px-6">
          {children}
        </main>

        {/* Footer (ADDED) */}
        <Footer />
      </body>
    </html>
  );
}
