import type { Metadata } from "next";
import { Lexend} from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

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
          <div className="p-12">
            {children}
          </div>
        <Footer />
      </body>
    </html>
  );
}
