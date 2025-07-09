import type { Metadata } from "next";
import { Lexend} from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Toaster } from "react-hot-toast";
import { UserOrderProvider } from "@/context/UserOrderContext";

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
        <Toaster />
        <UserOrderProvider>
          <Header />
          <div className="p-12">
              {children}
           
          </div>
        </UserOrderProvider>
        <Footer />
      </body>
    </html>
  );
}
