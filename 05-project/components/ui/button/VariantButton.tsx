import Link from "next/link";
import { ReactNode } from "react";

export default function VariantButton({
      href,
      font = "capitalize",
  children,
}: {
      href: string;
     font?: "uppercase" | "capitalize";
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={
       `border-2 border-transparent rounded-2xl
        bg-neutral-200 dark:bg-neutral-600
        hover:border-sky-700 hover:text-sky-700
        dark:hover:border-sky-500 dark:hover:text-sky-400
        transition duration-500
        px-2 py-1 ` + font
      }
    >
      {children}
    </Link>
  );
}
