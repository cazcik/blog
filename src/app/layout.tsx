import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

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
        url: "https://cazcik.me/images/ice.png",
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
    images: ["https://cazcik.me/images/ice.png"],
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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
