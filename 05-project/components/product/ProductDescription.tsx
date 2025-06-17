import Product from "@/model/product";
import Link from "next/link";
import { ReactNode } from "react";

function Buttons({
     items,
    params,
       font = "capitalize",
  children,
}: {
     items: string[];
    params: string;
     font?: "uppercase" | "capitalize";
  children: ReactNode;
}) {
  return (
    <>
      <h2 className="uppercase font-bold text-lg">{children}</h2>
      <ul className="flex flex-wrap gap-2 mt-1 mb-4">
        {items.map((item) => (
          <li key={item}>
            <Link
              href={`${params}${item}`}
              className={
               `border-2 border-transparent rounded-2xl
                bg-neutral-200 dark:bg-neutral-600
                hover:border-sky-700 hover:text-sky-700
                dark:hover:border-sky-500 dark:hover:text-sky-400
                transition duration-500
                px-2 py-1 ` + font
              }
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function ProductDescription({ name, price, desc, images, sizes }: Product) {
  return (
    <div className="flex flex-col flex-[0_1_40%] p-6 wrap-break-word max-w-full overflow-x-scroll">
      <h1 className="text-5xl font-mono">{name}</h1>
      <span className="w-fit my-4 bg-sky-700 text-white py-0.5 px-1 md:py-1 md:px-2 rounded-3xl">
        ${price}USD
      </span>
      <Buttons items={images.map(({ color }) => color)} params="?color=">
        Color
      </Buttons>
      {sizes && (
        <Buttons items={sizes} params="?size=" font="uppercase">
          Size
        </Buttons>
      )}
      <p className="max-h-50 overflow-y-scroll">{`${desc} `.repeat(100)}</p>
      <ul className="list-disc marker:text-stone-400 pl-8 my-4">
        {Array.from({ length: 4 }, (_, i) => (
          <li key={i} className="leading-relaxed">
            {"Lorem Ipsum ".repeat(i + 1)}
          </li>
        ))}
      </ul>
      <button
        className="
          bg-sky-700 text-white
          w-2/3
          mx-auto py-1 px-2
          rounded-2xl
          hover:opacity-90
        "
      >
        + Add to Cart
      </button>
    </div>
  );
}
