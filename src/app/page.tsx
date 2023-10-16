import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zac Wojcik",
  openGraph: {
    title: "Zac Wojcik",
    images: [
      {
        url: "https://somnum.io/og?title=Zac Wojcik",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "Zac Wojcik",
    images: ["https://somnum.io/og?title=Zac Wojcik"],
  },
};

export default function Home() {
  return (
    <div className="space-y-10">
      <section>
        <div>
          <h1 className="text-sm font-black uppercase text-black dark:text-white">
            Zac Wojcik
          </h1>
        </div>
        <div className="mt-4 flex flex-col pl-6">
          <p className="text-neutral-500">
            I'm an application security engineer helping developers write secure
            code, design secure systems, and build for resiliency.
          </p>
        </div>
      </section>
      <section>
        <div>
          <h1 className="text-sm font-black uppercase text-black dark:text-white">
            Links
          </h1>
        </div>
        <div className="mt-4 flex flex-col space-y-4 pl-6">
          <div>
            <p className="text-sm text-neutral-400 dark:text-neutral-600">
              Twitter
            </p>
            <Link
              href="https://twitter.com/cazcik"
              className="text-black underline-offset-4 hover:underline dark:text-white"
            >
              https://twitter.com/cazcik
            </Link>
          </div>
          <div>
            <p className="text-sm text-neutral-400 dark:text-neutral-600">
              GitHub
            </p>
            <Link
              href="https://github.com/cazcik"
              className="text-black underline-offset-4 hover:underline dark:text-white"
            >
              https://github.com/cazcik
            </Link>
          </div>
          <div>
            <p className="text-sm text-neutral-400 dark:text-neutral-600">
              LinkedIn
            </p>
            <Link
              href="https://www.linkedin.com/in/cazcik"
              className="text-black underline-offset-4 hover:underline dark:text-white"
            >
              https://www.linkedin.com/in/cazcik
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
