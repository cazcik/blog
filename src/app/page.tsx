import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zac Wojcik",
  openGraph: {
    title: "Zac Wojcik",
    images: [
      {
        url: "https://cazcik.me/og?title=Zac Wojcik",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "Zac Wojcik",
    images: ["https://cazcik.me/og?title=Zac Wojcik"],
  },
};

const socials = [
  {
    name: "Twitter",
    link: "https://twitter.com/cazcik",
  },
  {
    name: "GitHub",
    link: "https://github.com/cazcik",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/cazcik",
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@cazcik",
  },
  {
    name: "Twitch",
    link: "https://twitch.tv/cazcik",
  },
  {
    name: "Threads",
    link: "https://threads.net/@cazcik",
  },
  {
    name: "Bluesky",
    link: "https://bsky.app/profile/cazcik.bsky.social",
  },
];

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
            Husband, father of two, beer league champion, bourbon sipper,
            mountain biker, and security engineer from Detroit.
          </p>
          <p className="mt-4 text-neutral-500">
            I'm an application security engineer at PMG helping developers write
            secure code, design secure systems, and build for resiliency.
          </p>
          <p className="mt-4 text-neutral-500">
            Currently I'm building a security platform called Somnum, providing
            an out of the box security program to help companies with
            assessments, pentests, training, and more.
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
          {socials.map((s) => (
            <div key={s.name}>
              <p className="text-sm text-neutral-400 dark:text-neutral-600">
                {s.name}
              </p>
              <Link
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline-offset-4 hover:underline dark:text-white"
              >
                {s.link}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
