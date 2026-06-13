import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({ component: AppLayout });

function AppLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 mx-auto w-full max-w-4xl border-b border-neutral-200 bg-neutral-50 px-5 py-4 sm:border-x dark:border-neutral-700 dark:bg-neutral-900">
        <nav className="flex items-center justify-between">
          <Link to="/">
            <img src="/images/icon.png" className="size-8 rounded-full" />
          </Link>
          <div></div>
          <div></div>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-4xl flex-1 border-neutral-200 px-5 py-10 sm:border-x dark:border-neutral-700">
        <Outlet />
      </main>
      <footer className="mx-auto flex w-full max-w-4xl items-center justify-center border-t border-neutral-200 p-4 sm:border-x dark:border-neutral-700">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
