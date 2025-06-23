"use client";
import { ProdImage } from "@/lib/types/prod_image";
import Image from "next/image";
import ImageTile from "@/components/ui/image/ImageTile";
import { useSearchParams } from "next/navigation";

export default function Gallery({ images, name }: { images: ProdImage[]; name: string }) {
  const searchParams = useSearchParams().get('color');

  let activeImg = images[0];
  if (searchParams) {
    const selectedImg = images.find(({ color }) => searchParams === color);
    if (selectedImg) activeImg = selectedImg;
  }
  const { src, color } = activeImg;

  return (
    <div className="flex-auto min-w-0 max-w-full mx-auto">
      <div className="relative aspect-square min-h-120 max-w-full md:max-w-4/5 mx-auto">
        <Image
          className="object-cover shadow-xl animate-fadeIn"
          src={"/shop/" + src}
          alt={`${name} ${color}`}
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
        {images.map(({ src, color }, i) => (
          <li key={color} className="h-20 w-20 shrink-0">
            <ImageTile
              href={{ query: "color", value: color, isDefault: i === 0 }}
               src={`/shop/${src}`}
               alt={`${name} ${color}`}
              priority
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
