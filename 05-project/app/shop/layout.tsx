import FilterMenu from "@/components/ui/menu/FilterMenu";
import { SortTypes } from "@/lib/types/sort_types";
import Category from "@/model/category";
import { Metadata } from "next";

export const metadata: Metadata = {
        title: "Browse Shop",
  description: "All Products",
};

export default async function ShopLayout({ children }: { children: React.ReactNode }) {
  const categories = await Category.getAll();

  return (
    <section
      className="
        grid grid-cols-1 md:grid-cols-[auto_1fr_auto]
        max-w-screen-xl mx-auto px-2
      "
    >
      <FilterMenu label="Categories" params="/shop/" menu={categories} />
      <div className="order-last md:order-none min-w-0 min-h-screen">
        {children}
      </div>
      <FilterMenu
         label="Sort by"
        params="?sort="
          menu={SortTypes}
      />
    </section>
  );
}
