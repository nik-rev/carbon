import "@/css/code-block.css";
import "@/css/theme.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#40a02b" },
    { media: "(prefers-color-scheme: dark)", color: "#a6e3a1" },
  ],
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  title: "nikitarevenco",
  description: "Nikita Revenco's Blog",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  twitter: { creator: "@nikitarevenco1" },
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: `icon-light.ico`,
        href: `icon-light.ico`,
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: `icon-dark.ico`,
        href: `icon-dark.ico`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex min-h-screen min-w-fit flex-col justify-between bg-base text-text`}
      >
        <ThemeProvider disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
