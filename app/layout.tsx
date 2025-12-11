import type { Metadata } from "next/types";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Tools Catalog",
  description: "Browse the best AI tools for text, image, code, research, audio, and more."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-slate-950 text-slate-100 antialiased`}>
        <Header />
        <main className="pt-24 max-w-6xl mx-auto px-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
