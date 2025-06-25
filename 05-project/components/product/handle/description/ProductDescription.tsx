import Product from "@/model/product";
import ButtonRow from "./ButtonRow";
import CartAddButton from "./CartAddButton";
import { randomParagraph } from "@/lib/util/word_generator";

export default function ProductDescription({ _id, name, price, desc, images, sizes }: Product) {
  return (
    <div className="flex flex-col flex-[0_1_40%] p-6 wrap-break-word max-w-full overflow-x-scroll">
      <h1 className="text-5xl font-mono">{name}</h1>
      <span className="w-fit my-4 bg-sky-700 text-white py-0.5 px-1 md:py-1 md:px-2 rounded-3xl">
        ${price}USD
      </span>
      <ButtonRow items={images.map(({ color }) => color)} query="color">
        Color
      </ButtonRow>
      {sizes && (
        <ButtonRow items={sizes} query="size" font="uppercase">
          Size
        </ButtonRow>
      )}
      <p className="max-h-40 overflow-y-scroll">
        <span className="font-medium">{desc}</span> <em>{randomParagraph(100)}</em>
      </p>
      <ul className="list-disc marker:text-stone-400 pl-8 my-4">
        {Array.from({ length: 4 }, (_, i) => (
          <li key={i} className="leading-relaxed">
            {randomParagraph(3)}
          </li>
        ))}
      </ul>
      <CartAddButton prodId={_id} />
    </div>
  );
}
