import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Zac Wojcik",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-neutral-100 dark:bg-neutral-900 antialiased scroll-smooth"
    >
      <body>
        {children}
        <script
          defer
          data-domain="cazcik.me"
          data-api="/loops/api/event"
          src="/loops/js/script.js"
        ></script>
      </body>
    </html>
  );
}
