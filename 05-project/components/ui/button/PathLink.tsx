"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes } from "react";

export default function PathLink({
      href,
  children,
   classes = "hover:font-bold hover:text-sky-600 dark:hover-text-sky-500",
  ...props
}: {
      href: string;
  classes?: string;
  children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const path = usePathname();

  let styles = `transition-all duration-500 ease-in-out text-shadow-sky-500 ${classes}`
  if (path === href && href.length > 1) // active class
    styles += " text-sky-700 dark:text-sky-300 underline underline-offset-3"

  return (
    <Link href={href} className={styles} {...props}>
      {children}
    </Link>
  );
}
