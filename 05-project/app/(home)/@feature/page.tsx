import Product from "@/model/product";
import TileList from "@/components/product/TileList";

export default async function FeaturePage() {
  const products = await Product.getFeatured();
  if (!products) return null;

  return <TileList hero {...{ products }} />;
}
