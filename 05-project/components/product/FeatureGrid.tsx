import Product from "@/model/product";
import ProductTile from "./ProductTile";

export default function FeatureGrid({ products }: { products: Product[] }) {
  return (
    <section
      className="
        max-w-screen-2xl
        p-4 mx-auto
        grid gap-4
        md:grid-cols-6 md:grid-rows-2
      "
    >
      {products.map((prod, i) => (
        <ProductTile key={prod._id} {...prod} full={i === 0} />
      ))}
    </section>
  );
}
