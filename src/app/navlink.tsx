"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  name,
  link,
}: {
  name: string;
  link: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <Link
      href={link}
      className={clsx(
        isActive
          ? "font-black text-black dark:text-white"
          : "font-semibold text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400",
        "text-sm uppercase",
      )}
    >
      {name}
    </Link>
  );
}
