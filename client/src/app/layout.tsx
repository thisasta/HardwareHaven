import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HardwareHaven",
  description: "Your one-stop shop for all your PC hardware needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
          <html lang="en">
          <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
          </body>
          </html>
      </>
  );
}
