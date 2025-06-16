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
       href: string;
        src: string;
        alt: string;
      hero?: boolean;
  priority?: boolean;
  children?: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        block relative aspect-square
        border border-transparent rounded-xl
        overflow-hidden
        animate-fadeIn
        group hover:border-sky-600
      "
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
