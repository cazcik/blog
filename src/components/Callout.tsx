import type { ReactNode } from "react";

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="my-4 border-l-2 border-blue-400 bg-blue-50 px-4 py-3 text-sm text-neutral-700 dark:border-amber-300 dark:bg-neutral-800 dark:text-neutral-300">
      {children}
    </div>
  );
}
