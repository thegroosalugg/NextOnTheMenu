import Product from "@/model/product";
import ProductTile from "./ProductTile";

interface GridProps {
  products: Product[];
   scroll?: boolean;
}

export default function GridList({ products, scroll }: GridProps) {
  let styles = "grid gap-4 p-4 ";

  if (scroll) {
    styles += `
      grid-flow-col auto-cols-[minmax(150px,_1fr)]
      overflow-x-scroll [&>li]:animate-scroll
    `;
  } else {
    styles += `
      max-w-screen-2xl
      mx-auto
      md:grid-cols-6 md:grid-rows-2
    `;
  }

  return (
    <ul className={styles}>
      {products.map((prod, i) => (
        <ProductTile
          key={prod._id}
          {...prod}
          full={scroll ? false : i === 0}
          priority={!scroll}
        />
      ))}
    </ul>
  );
}
