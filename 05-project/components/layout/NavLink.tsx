"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
      href,
  children,
}: {
      href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
  let classes = "transition-all hover:text-shadow-sm text-shadow-sky-500";
  if (path.startsWith(href) && href.length > 1)
    classes += " text-sky-600 dark:text-sky-300 underline underline-offset-3";

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
