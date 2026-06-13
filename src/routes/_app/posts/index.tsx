import { createFileRoute, Link } from "@tanstack/react-router";

import { posts } from "#/lib/posts";

export const Route = createFileRoute("/_app/posts/")({
  component: BlogIndex,
  loader: () => posts,
});

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogIndex() {
  const posts = Route.useLoaderData();
  return (
    <div className="max-w-lg">
      <h1 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Posts
      </h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        Writing on security, secure systems, and open source.
      </p>
      {posts.length === 0 ? (
        <p className="text-neutral-500 dark:text-neutral-400">No posts found.</p>
      ) : (
        <ul className="flex flex-col gap-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                to="/posts/$slug"
                params={{ slug: post.slug }}
                className="group"
              >
                <h2 className="text-lg font-semibold text-black group-hover:text-blue-500 dark:text-white dark:group-hover:text-amber-200">
                  {post.title}
                </h2>
                <p className="mt-0.5 text-sm text-neutral-500 dark:text-neutral-400">
                  {formatDate(post.date)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
