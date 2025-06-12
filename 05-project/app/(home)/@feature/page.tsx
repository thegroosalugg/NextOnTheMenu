import Product from "@/model/product";
import GridList from "@/components/product/GridList";

export default async function FeaturePage() {
  const products = await Product.getFeatured();

  return <GridList {...{ products }} />;
}
