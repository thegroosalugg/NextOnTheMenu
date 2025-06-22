"use client";
import { ReactNode } from "react";
import { QueryConfig, useSetQueryParams } from "@/lib/hooks/useSetQueryParams";
import Link from "next/link";

export default function QueryLink({
      query,
      value,
  isDefault,
       font = "capitalize",
   children,
}: QueryConfig & { font?: "uppercase" | "capitalize"; children: ReactNode }) {
  const { queryParams, isActive } = useSetQueryParams({ query, value, isDefault });

  return (
    <Link
      href={`?${queryParams}`}
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
