import { Link } from "@tanstack/react-router";

type NotFoundProps = {
  message?: string;
  to?: string;
  label?: string;
};

export function NotFound({
  message = "The page you're looking for doesn't exist.",
  to = "/",
  label = "Back home",
}: NotFoundProps) {
  return (
    <div className="flex flex-col items-start">
      <h1 className="mb-2 text-xl font-semibold text-black dark:text-white">
        404
      </h1>
      <p className="mb-4 text-neutral-600 dark:text-neutral-400">{message}</p>
      <Link
        to={to}
        className="text-sm text-blue-500 hover:text-blue-700 dark:text-amber-200 dark:hover:text-amber-400"
      >
        &larr; {label}
      </Link>
    </div>
  );
}
