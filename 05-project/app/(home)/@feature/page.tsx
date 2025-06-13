import Product from "@/model/product";
import TileList from "@/components/product/TileList";

export default async function FeaturePage() {
  const products = await Product.getFeatured();

  return <TileList hero {...{ products }} />;
}
