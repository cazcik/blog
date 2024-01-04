"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  link,
  title,
}: {
  link: string;
  title: string;
}) {
  const path = usePathname();
  const active = path === link;

  return (
    <Link
      href={link}
      className={clsx(
        active
          ? "text-black dark:text-white"
          : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300",
        "md:text-lg",
      )}
    >
      {title}
    </Link>
  );
}
