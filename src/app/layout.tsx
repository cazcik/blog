import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import NavLink from "./navlink";

export const metadata: Metadata = {
  metadataBase: new URL("https://cazcik.me"),
  title: {
    default: "Zac Wojcik",
    template: "%s – Zac Wojcik",
  },
  description: "My humble home on the vastness of tubes we call the internet.",
  icons: {
    icon: "/images/ice.png",
    shortcut: "/images/ice.png",
    apple: "/images/ice.png",
  },
  openGraph: {
    title: {
      default: "Zac Wojcik",
      template: "%s － Zac Wojcik",
    },
    description:
      "My humble home on the vastness of tubes we call the internet.",
    url: "https://cazcik.me",
    siteName: "Zac Wojcik",
    images: [
      {
        url: "https://cazcik.me/og?title=Zac Wojcik",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Zac Wojcik",
      template: "%s － Zac Wojcik",
    },
    description:
      "My humble home on the vastness of tubes we call the internet.",
    images: ["https://cazcik.me/og?title=Zac Wojcik"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth bg-neutral-50 text-neutral-700 antialiased selection:bg-neutral-300 selection:text-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 dark:selection:bg-neutral-700 dark:selection:text-neutral-200"
    >
      <body className="mx-auto flex min-h-screen max-w-lg flex-col p-5">
        <header className="flex flex-col pt-12">
          <nav className="mt-2 flex items-center space-x-4">
            <Link href="/">
              <Image src="/images/ice.png" height={30} width={30} alt="ice" />
            </Link>
            <NavLink name="Blog" link="/blog" />
          </nav>
        </header>
        <main className="py-20">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
