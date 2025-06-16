import ProductList from "@/components/product/ProductList";
import { Param } from "@/lib/types/param";
import Product from "@/model/product";
import { notFound } from "next/navigation";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Param<"sort">;
}) {
  const { sort } = await searchParams;
  const products = await Product.getAll(sort);
  if (!products) notFound();

  return <ProductList {...{ products }} />;
}
