import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/base/Header";
import GridPattern from "@/components/ui/grid-pattern";
import { Theme } from "@radix-ui/themes";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tomasz Tłusty - portfolio",
  description: "moje osobiste portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col bg-mintcream text-black">
        <Theme>
          <GridPattern />
          {children}
        </Theme>
      </body>
    </html>
  );
}
