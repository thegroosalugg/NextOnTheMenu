import ProductList from "@/components/product/list/ProductList";
import { getProducts } from "@/lib/actions/product";
import { Param } from "@/lib/types/param";
import { notFound } from "next/navigation";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Param<"sort"> & Param<"q">;
}) {
  const { sort, q } = await searchParams;
  const products = await getProducts({ sort, search: q });
  if (!products?.length) notFound();

  return <ProductList {...{ products }} />;
}
