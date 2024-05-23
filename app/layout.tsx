import type { Metadata } from "next";
import { Montserrat as Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
