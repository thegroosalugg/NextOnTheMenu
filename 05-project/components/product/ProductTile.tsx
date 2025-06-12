import Product from "@/model/product";
import Image from "next/image";
import Link from "next/link";

export default function ProductTile({
       _id,
      name,
     price,
    images,
      full,
  priority,
}: Product & { full?: boolean, priority?: boolean }) {
  return (
    <li
      className={
        `relative
        aspect-square
        overflow-hidden
        border border-transparent rounded-2xl
        group
        hover:border-sky-600 ` +
        (full ? "md:col-span-4 md:row-span-2" : "md:col-span-2 md:row-span-1")
      }
    >
      <Link href={`/shop/${_id}`} className="absolute inset-0">
        <label
          className="
            max-w-3/4
            absolute z-10 left-6 bottom-6
            flex gap-2 items-center
            bg-white/70 dark:bg-black/70
            text-xs font-extrabold
            leading-none tracking-tight
            py-2 pl-4 pr-2 rounded-3xl
            backdrop-blur-xl
          "
        >
          <span className="line-clamp-2">{name}</span>
          <span className="bg-sky-700 text-white py-1 px-2 rounded-3xl">
            ${price}
            {full && <span className="hidden md:inline"> USD</span>}
          </span>
        </label>
        <Image
          src={"/shop" + images[0].src}
          alt={name}
          className="
            object-contain
            group-hover:scale-105
            transition duration-300 ease-in-out
          "
          {...{ priority }}
          fill
          sizes={full ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
        />
      </Link>
    </li>
  );
}
