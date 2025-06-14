import FilterMenu from "@/components/ui/menu/FilterMenu";
import { Metadata } from "next";

export const metadata: Metadata = {
        title: "Browse Shop",
  description: "All Products",
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="
        grid grid-cols-1 md:grid-cols-[auto_1fr_auto]
        max-w-screen-xl mx-auto px-2
      "
    >
      <FilterMenu label="categories" params="/shop/" menu={["hoodies", "coats"]} />
      <div className="order-last md:order-none min-w-0">
        {children}
      </div>
      <FilterMenu
        label="sort by"
        params="?search="
        menu={["latest", "name", "price-ascending", "price-descending"]}
      />
    </section>
  );
}
