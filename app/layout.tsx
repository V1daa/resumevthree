import type { Metadata } from "next";
import { Oswald as Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Cursor } from "@/components/Cursor";

const inter = Inter({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume",
  description: "Created by Volia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor className=' dark:bg-white' />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
