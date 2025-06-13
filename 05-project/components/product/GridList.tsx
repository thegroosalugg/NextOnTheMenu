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
      grid-flow-col auto-cols-[minmax(150px,1fr)]
      overflow-x-scroll [&>li]:animate-scroll
    `;
  } else {
    styles += "mx-auto ";
    if (hero) {
      styles += "md:grid-cols-6 md:grid-rows-2 max-w-screen-2xl";
    } else {
      styles += `
        grid-cols-[repeat(auto-fit,minmax(160px,1fr))]
        md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]
        [&>li]:col-span-1 max-w-screen-md
      `;
    }
  }

  return (
    <ul className={styles}>
      {products.map((prod, i) => (
        <ProductTile key={prod._id} {...prod} hero={hero && i === 0} priority={!scroll} />
      ))}
    </ul>
  );
}
