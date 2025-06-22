'use client';
import { QueryConfig, useSetQueryParams } from "@/lib/hooks/useSetQueryParams";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function ImageTile({
        href,
        hero,
         src,
         alt,
    priority,
    children = null,
}: {
         href: string | QueryConfig;
          src: string;
          alt: string;
        hero?: boolean;
    priority?: boolean;
    children?: ReactNode;
}) {
  const isQuery = typeof href === "object";
  const hookConfig = isQuery ? href : new QueryConfig();
  const { queryParams, isActive } = useSetQueryParams(hookConfig);

  return (
    <Link
      href={isQuery ? `?${queryParams}` : href}
      className={`
        block relative aspect-square
        border rounded-xl ${isActive}
        overflow-hidden
        animate-fadeIn
        group hover:border-sky-700 dark:hover:border-sky-400
      `}
    >
      {children}
      <Image
        className="
          object-contain
          group-hover:scale-105
          transition duration-300 ease-in-out
        "
        {...{ src, alt, priority }}
        fill                   // 768px ? 66vw : 100vw
        sizes={hero ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
      />
    </Link>
  );
}
