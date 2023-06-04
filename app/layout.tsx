"use client";
import { RecoilRoot } from "recoil";
import Navigation from "@/components/ui/navigation";

import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RecoilRoot>
        <body className={inter.className}>
          <Navigation />
          {children}
        </body>
      </RecoilRoot>
    </html>
  );
}
