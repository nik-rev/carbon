import "./globals.css";
import "@catppuccin/highlightjs/css/catppuccin-latte.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nikitarevenco",
  description: "Nikita Revenco's Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen min-w-fit bg-base text-text`}
      >
        {children}
      </body>
    </html>
  );
}
