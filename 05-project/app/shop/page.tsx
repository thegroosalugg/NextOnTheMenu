import ProductList from "@/components/product/list/ProductList";
import { Param } from "@/lib/types/param";
import Product from "@/model/product";
import { notFound } from "next/navigation";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Param<"sort"> & Param<"q">;
}) {
  const { sort, q } = await searchParams;
  const products = await Product.getAll({ sort, search: q });
  if (!products?.length) notFound();

  return <ProductList {...{ products }} />;
}
