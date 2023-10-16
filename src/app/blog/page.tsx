import Link from "next/link";
import type { Metadata } from "next";
import { allPosts, Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";

export const metadata: Metadata = {
  title: "Blog",
  openGraph: {
    title: "Blog",
    images: [
      {
        url: "https://cazcik.me/og?title=Blog",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "Blog",
    images: ["https://cazcik.me/og?title=Blog"],
  },
};

const posts: Post[] = allPosts.sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date)),
);

export default function BlogPage() {
  return (
    <div className="space-y-10">
      <section>
        <div>
          <h1 className="text-sm font-black uppercase text-black dark:text-white">
            Blog
          </h1>
        </div>
        <div className="mt-4 flex flex-col pl-6">
          <p className="text-neutral-500">
            If I'm not busy reading, I'm probably writing about security,
            programming, technology, and business.
          </p>
        </div>
      </section>
      <section>
        {!posts ? (
          <p>Looks like there are literally no posts right now.</p>
        ) : null}
        {posts.length > 0 ? (
          posts.map((p: Post) => (
            <div
              key={p.title}
              className="flex items-center justify-between space-y-2"
            >
              <Link
                href={p.url}
                className="font-semibold text-black underline-offset-4 hover:underline dark:text-white"
              >
                {p.title}
              </Link>
              <p className="text-neutral-500">
                {format(parseISO(p.date), "LLLL d, yyyy")}
              </p>
            </div>
          ))
        ) : (
          <div className="rounded-md border border-dashed border-neutral-200 p-5 dark:border-neutral-800">
            <p className="text-center text-neutral-500">
              No posts yet, check back soon though.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
