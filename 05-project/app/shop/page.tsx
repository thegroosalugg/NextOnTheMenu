import TileList from "@/components/product/TileList";
import FilterMenu from "@/components/ui/menu/FilterMenu";
import Product from "@/model/product";
import { Metadata } from "next";

export const metadata: Metadata = {
        title: "Browse Shop",
  description: "All Products",
};

export default async function ShopPage() {
  const products = await Product.getAll();

  return (
    <section
      className="
        grid grid-cols-1 md:grid-cols-[auto_1fr_auto]
        gap-2 md:gap-0
        max-w-screen-xl mx-auto px-2
      "
    >
      <FilterMenu label="categories" menu={["hoodies", "coats"]} />
      <div className="order-last md:order-none min-w-0">
        <TileList {...{ products }} />
      </div>
      <FilterMenu
        label="sort by"
        menu={["latest", "name", "price-ascending", "price-descending"]}
      />
    </section>
  );
}
