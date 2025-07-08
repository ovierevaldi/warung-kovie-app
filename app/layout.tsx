import type { Metadata } from "next";
import { Lexend} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lexendFont = Lexend({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Warung Kovie App",
  description: "Order Your Coffee Here From Apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexendFont.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
