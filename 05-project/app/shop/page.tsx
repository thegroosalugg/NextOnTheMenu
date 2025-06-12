import GridList from "@/components/product/GridList";
import Product from "@/model/product";
import { Metadata } from "next";

export const metadata: Metadata = {
        title: 'Browse Shop',
  description: 'All Products',
};

export default async function ShopPage() {
  const products = await Product.getAll();

  return (
    <section>
      <GridList {... { products }} />
    </section>
  );
}
