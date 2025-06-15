import TileList from "@/components/product/TileList";
import { Param } from "@/lib/types/param";
import Product from "@/model/product";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Param<"sort">;
}) {
  const { sort } = await searchParams;
  const products = await Product.getAll(sort);

  return <TileList {...{ products }} />;
}
