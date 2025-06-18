"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes } from "react";

export default function NavLink({
      href,
  children,
  ...props
}: {
      href: string;
  children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const path = usePathname();
  let classes = "transition-all hover:text-shadow-sm text-shadow-sky-500";
  if (path === href && href.length > 1)
    classes += " text-sky-600 dark:text-sky-300 underline underline-offset-3";

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
