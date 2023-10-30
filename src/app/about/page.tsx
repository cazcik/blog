import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "About",
  openGraph: {
    title: "About",
    images: [
      {
        url: "https://cazcik.me/og?title=About",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "About",
    images: ["https://cazcik.me/og?title=About"],
  },
};

export default function BlogPage() {
  return (
    <div className="space-y-10">
      <section>
        <div>
          <h1 className="text-sm font-black uppercase text-black dark:text-white">
            About
          </h1>
        </div>
        <div className="mt-4 flex flex-col">
          <p className="text-neutral-500">
            Currently I'm an application security engineer at PMG, previously I
            worked at NTT in security operations and engineering.
          </p>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <Image
            width={250}
            height={250}
            alt="headshot of zac"
            src="/images/me-co.jpg"
            className="rounded-md"
          />
        </div>
        <div className="mt-4 flex flex-col">
          <p className="mt-2 text-neutral-500">
            I love learning new web technologies on both the frontend and
            backend. I consider myself to be very passionate about design and
            creating awesome user experiences.
          </p>
        </div>
        <div className="mt-4 flex">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://somnum.io"
            className="flex w-full items-center justify-between rounded-md border border-neutral-200 p-4 hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700"
          >
            <div className="flex items-center space-x-4">
              <Image
                height={30}
                width={30}
                alt="somnum s icon"
                src="/images/somnum-square-black.png"
                className="rounded-full"
              />
              <span className="text-lg font-black text-black dark:text-white">
                Somnum
              </span>
            </div>
            <div className="h-5 w-5 dark:text-white">
              <ArrowUpRightIcon />
            </div>
          </Link>
        </div>
        <div className="mt-4 flex flex-col">
          <p className="mt-2 text-neutral-500">
            Currently I'm building a security platform called Somnum which
            provides small software companies an out of the box security program
            to help with assessments, penetration tests, employee trainings, and
            more.
          </p>
        </div>
      </section>
    </div>
  );
}
