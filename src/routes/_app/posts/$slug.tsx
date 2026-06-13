import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { getPost } from "#/lib/posts";

export const Route = createFileRoute("/_app/posts/$slug")({
  component: Post,
  loader: ({ params }) => {
    if (!getPost(params.slug)) throw notFound();
  },
});

function Post() {
  const { slug } = Route.useParams();
  const post = getPost(slug)!;
  const Content = post.Component;
  return (
    <>
      <Link
        to="/posts"
        className="text-blue-500 hover:text-blue-700 dark:text-amber-200 dark:hover:text-amber-400"
      >
        &larr; Back to posts
      </Link>
      <header className="mt-6">
        <h1 className="text-xl font-semibold text-black dark:text-white">
          {post.title}
        </h1>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {post.author && <> &middot; {post.author}</>}
        </p>
      </header>
      <article className="post mt-6">
        <Content />
      </article>
    </>
  );
}
