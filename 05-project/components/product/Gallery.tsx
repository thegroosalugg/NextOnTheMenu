"use client";
import { ProdImage } from "@/lib/types/prod_image";
import Image from "next/image";
import ImageTile from "../ui/image/ImageTile";

export default function Gallery({ images, name }: { images: ProdImage[]; name: string }) {
  return (
    <div className="flex-[1_1_50%] min-w-0 max-w-full">
      <div className="relative aspect-square h-100 max-w-full mx-auto">
        <Image
          className="object-cover shadow-xl"
          src={"/shop/" + images[0].src}
          alt={name + images[0].color}
          priority
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>
      <ul
        className="
          flex gap-2 py-6 mx-auto
          border-x-20 border-x-transparent
          overflow-x-scroll w-fit max-w-full
        "
      >
        {images.map(({ src, color }) => (
          <li key={color} className="h-20 w-20 shrink-0">
            <ImageTile
              href={`?color=${color}`}
               src={`/shop/${src}`}
               alt={`${name}${color}`}
              priority
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
