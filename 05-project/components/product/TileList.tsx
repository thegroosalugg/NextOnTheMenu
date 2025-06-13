import Product from "@/model/product";
import ProductTile from "./ProductTile";

interface ListProps {
  products: Product[];
   scroll?: boolean;
     hero?: boolean;
}

export default function TileList({ products, scroll, hero }: ListProps) {
  let styles = "gap-4 p-4 mx-auto ";

  if (hero) {
    styles += "grid md:grid-cols-6 md:grid-rows-2 max-w-screen-2xl";
  } else {
    styles += "flex ";
    if (scroll) {
      styles += "overflow-x-scroll [&>li]:animate-scroll [&>li]:w-xs [&>li]:shrink-0";
    } else {
      styles += "flex-wrap px-0 [&>li]:flex-auto [&>li]:basis-[clamp(160px,30%,300px)]";
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
