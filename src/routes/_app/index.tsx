import { createFileRoute, Link } from "@tanstack/react-router";
import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from "@remixicon/react";

import { posts } from "#/lib/posts";

export const Route = createFileRoute("/_app/")({
  component: Home,
  loader: () => posts.slice(0, 5),
});

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Home() {
  const recentPosts = Route.useLoaderData();
  return (
    <>
      <div className="max-w-lg">
        <h1 className="mb-2 text-xl font-semibold text-black dark:text-white">
          Zac Wojcik
        </h1>
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          I'm a security engineer living in Florida helping developers write
          secure code and design secure systems.
        </p>
        <p className="mb-4 text-neutral-600 dark:text-neutral-400">
          My passion is to help secure new technologies and make security more
          accessible to all through writing and contributing to open source
          software.
        </p>
      </div>
      <div className="mt-10">
        <h2 className="mb-2 text-lg font-semibold text-black dark:text-white">
          Connect
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4">
          <a
            href="https://x.com/cazcik"
            target="_blank"
            rel="noopener noreferrer"
            className="-mt-px -ml-px flex flex-1 items-center justify-center gap-x-3 border border-neutral-200 px-4 py-3 text-neutral-600 hover:bg-white hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-950 dark:hover:text-neutral-100"
          >
            <RiTwitterXLine className="size-5" />
            <span className="text-sm">@cazcik</span>
          </a>
          <a
            href="https://github.com/cazcik"
            target="_blank"
            rel="noopener noreferrer"
            className="-mt-px -ml-px flex flex-1 items-center justify-center gap-x-3 border border-neutral-200 px-4 py-3 text-neutral-600 hover:bg-white hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-950 dark:hover:text-neutral-100"
          >
            <RiGithubLine className="size-5" />
            <span className="text-sm">cazcik</span>
          </a>
          <a
            href="https://linkedin.com/in/cazcik"
            target="_blank"
            rel="noopener noreferrer"
            className="-mt-px -ml-px flex flex-1 items-center justify-center gap-x-3 border border-neutral-200 px-4 py-3 text-neutral-600 hover:bg-white hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-950 dark:hover:text-neutral-100"
          >
            <RiLinkedinBoxLine className="size-5" />
            <span className="text-sm">cazcik</span>
          </a>
          <a
            href="https://youtube.com/@cazcik"
            target="_blank"
            rel="noopener noreferrer"
            className="-mt-px -ml-px flex flex-1 items-center justify-center gap-x-3 border border-neutral-200 px-4 py-3 text-neutral-600 hover:bg-white hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-950 dark:hover:text-neutral-100"
          >
            <RiYoutubeLine className="size-5" />
            <span className="text-sm">@cazcik</span>
          </a>
        </div>
      </div>
      <div className="mt-10 max-w-lg">
        <h2 className="mb-4 text-lg font-semibold text-black dark:text-white">
          Posts
        </h2>
        {recentPosts.length === 0 ? (
          <p className="text-neutral-500 dark:text-neutral-400">
            No posts found.
          </p>
        ) : (
          <ul className="flex flex-col gap-y-6">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  to="/posts/$slug"
                  params={{ slug: post.slug }}
                  className="group"
                >
                  <h3 className="font-medium text-black group-hover:text-blue-500 dark:text-white dark:group-hover:text-amber-200">
                    {post.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-neutral-500 dark:text-neutral-400">
                    {formatDate(post.date)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {recentPosts.length > 0 && (
          <Link
            to="/posts"
            className="mt-6 inline-block text-sm text-blue-500 hover:text-blue-700 dark:text-amber-200 dark:hover:text-amber-400"
          >
            All posts &rarr;
          </Link>
        )}
      </div>
    </>
  );
}
