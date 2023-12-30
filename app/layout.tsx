import type { Metadata, Viewport } from "next";
import PlausibleProvider from "next-plausible";

import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://cazcik.me"),
  title: {
    default: "Zac Wojcik",
    template: "%s － Zac Wojcik",
  },
  description: "My humble home on the vasteness of tubes we call the internet.",
  icons: {
    icon: "/images/ice.png",
    shortcut: "/images/ice.png",
    apple: "/images/ice.png",
  },
  manifest: "https://cazcik.me/manifest.json",
  openGraph: {
    title: {
      default: "Zac Wojcik",
      template: "%s － Zac Wojcik",
    },
    description:
      "My humble home on the vasteness of tubes we call the internet.",
    url: "https://cazcik.me",
    siteName: "Zac Wojcik",
    images: [
      {
        url: "https://cazcik.me/images/ice.png",
        width: 500,
        height: 500,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "Somnum",
      template: "%s － Somnum",
    },
    description:
      "My humble home on the vasteness of tubes we call the internet.",
    siteId: "1379188894961438720",
    creator: "@cazcik",
    creatorId: "1379188894961438720",
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
      className="bg-neutral-100 dark:bg-neutral-900 antialiased scroll-smooth selection:bg-neutral-300 dark:selection:bg-neutral-700"
    >
      <head>
        <PlausibleProvider domain="cazcik.me" />
      </head>
      <body>{children}</body>
    </html>
  );
}
