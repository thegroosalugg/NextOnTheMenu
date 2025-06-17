"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";

export default function VariantButton({
     query,
     value,
      font = "capitalize",
  children,
}: {
     query: string;
     value: string;
     font?: "uppercase" | "capitalize";
  children: ReactNode;
}) {
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());
  newParams.set(query, value);

  const isActive =
    searchParams.get(query) === value
      ? `border-sky-700 dark:border-sky-400
           text-sky-700   dark:text-sky-400`
      : "border-transparent";

  return (
    <Link
      href={`?${newParams.toString()}`}
      className={`
        border-2 rounded-2xl
        bg-neutral-200 dark:bg-neutral-600
        hover:border-sky-700 hover:text-sky-700
        dark:hover:border-sky-500 dark:hover:text-sky-400
        transition duration-500
        px-2 py-1 ${font} ${isActive}
      `}
    >
      {children}
    </Link>
  );
}
