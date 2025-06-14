import TileList from "@/components/product/TileList";
import Product from "@/model/product";

export default async function ShopPage() {
  const products = await Product.getAll();

  return <TileList {...{ products }} />;
}
