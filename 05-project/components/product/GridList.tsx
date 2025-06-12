import Product from "@/model/product";
import ProductTile from "./ProductTile";

interface GridProps {
  products: Product[];
  scroll?: boolean;
  hero?: boolean;
}

export default function GridList({ products, scroll, hero }: GridProps) {
  let styles = "grid gap-4 p-4 ";

  if (scroll) {
    styles += `
      grid-flow-col auto-cols-[minmax(150px,_1fr)]
      overflow-x-scroll [&>li]:animate-scroll
    `;
  } else {
    styles += "mx-auto md:grid-cols-6 md:grid-rows-2 ";
    styles += hero ? "max-w-screen-2xl" : "max-w-screen-md";
  }

  return (
    <ul className={styles}>
      {products.map((prod, i) => (
        <ProductTile key={prod._id} {...prod} hero={hero && i === 0} priority={!scroll} />
      ))}
    </ul>
  );
}
