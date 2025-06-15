import Product from "@/model/product";
import ProductTile from "./ProductTile";

interface ListProps {
  products: Product[];
   scroll?: boolean;
     hero?: boolean;
}

export default function TileList({ products, scroll, hero }: ListProps) {
  let styles = "grid gap-4 p-4 mx-auto overflow-x-scroll ";

  if (hero) {
    styles += "md:grid-cols-6 md:grid-rows-2 max-w-screen-2xl";
  } else if (scroll) {
    styles += "grid-flow-col auto-cols-[150px] [&>li]:animate-scroll";
  } else {
    styles += `
      grid-cols-[repeat(auto-fill,minmax(160px,1fr))]
      pointer-fine:grid-cols-[repeat(auto-fill,minmax(240px,1fr))]
      [&>li]:col-span-1
    `;
  }

  return (
    <ul className={styles}>
      {products.map((prod, i) => (
        <ProductTile key={prod._id} {...prod} hero={hero && i === 0} priority={!scroll} />
      ))}
    </ul>
  );
}
