"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes } from "react";

export default function PathLink({
      href,
  children,
     hover = "hover:text-shadow-xs",
  ...props
}: {
      href: string;
    hover?: string;
  children: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const path = usePathname();
  let classes = `transition-all text-shadow-sky-500 ${hover}`;
  if (path === href && href.length > 1)
    classes +=
      " text-sky-600 dark:text-sky-300 hover:text-shadow-xs underline underline-offset-3";

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
