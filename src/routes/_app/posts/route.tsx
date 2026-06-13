import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/posts")({ component: BlogLayout });

function BlogLayout() {
  return (
    <div className="blog-shell">
      {/* blog-specific chrome: post nav, sidebar, breadcrumbs, etc. */}
      <Outlet />
    </div>
  );
}
