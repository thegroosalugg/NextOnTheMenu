import Product from "@/model/product";
import ProductTile from "./ProductTile";

export default function FeatureGrid({
  products,
}: {
  products: [Product, Product, Product];
}) {
  return (
    <section
      className="
        max-w-screen-2xl
        p-4
        mx-auto
        grid
        md:grid-cols-6 md:grid-rows-2
        gap-4
      "
    >
      <ProductTile {...products[0]} full />
      <ProductTile {...products[1]} />
      <ProductTile {...products[2]} />
    </section>
  );
}
