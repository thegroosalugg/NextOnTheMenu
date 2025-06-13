import Product from "@/model/product";
import Image from "next/image";
import Link from "next/link";

export default function ProductTile({
       _id,
      name,
     price,
    images,
      hero,
  priority,
}: Product & { hero?: boolean, priority?: boolean }) {
  return (
    <li
      className={
        `relative
        aspect-square
        overflow-hidden
        border border-transparent rounded-2xl
        group
        hover:border-sky-600 ` +
        (hero ? "md:col-span-4 md:row-span-2" : "md:col-span-2 md:row-span-1")
      }
    >
      <Link href={`/shop/${_id}`} className="absolute inset-0">
        <label
          className="
            max-w-[90%]
            absolute z-10 left-[5%] bottom-[5%]
            flex gap-2 items-center
            bg-white/70 dark:bg-black/70
            text-xs md:text-sm font-extrabold
            leading-none tracking-tight
            py-1 pl-2 pr-1 md:py-2 md:pl-4 md:pr-2
            backdrop-blur-xl rounded-3xl
          "
        >
          <span className="line-clamp-2">{name}</span>
          <span className="bg-sky-700 text-white py-0.5 px-1 md:py-1 md:px-2 rounded-3xl">
            ${price}
            {hero && <span className="hidden md:inline"> USD</span>}
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
          sizes={hero ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
        />
      </Link>
    </li>
  );
}
