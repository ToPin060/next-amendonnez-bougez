import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils";
import { Header } from "@/components/common/Header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}
      >
        <Header />
        <div
          id="home"
          className="
            bg-gray-100
            px-3 py-5 md:px-[10%] xl:px-[20%]
            flex flex-col items-center"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
