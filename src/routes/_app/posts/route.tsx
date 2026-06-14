import { createFileRoute, Outlet } from "@tanstack/react-router";

import { NotFound } from "#/components/NotFound";

export const Route = createFileRoute("/_app/posts")({
  component: BlogLayout,
  notFoundComponent: () => (
    <NotFound message="That post doesn't exist." to="/posts" label="Back to posts" />
  ),
});

function BlogLayout() {
  return (
    <div className="blog-shell">
      {/* blog-specific chrome: post nav, sidebar, breadcrumbs, etc. */}
      <Outlet />
    </div>
  );
}
