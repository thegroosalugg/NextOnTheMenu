import Product from "@/model/product";
import FeatureGrid from "@/components/product/FeatureGrid";

export default async function FeaturePage() {
  const products = await Product.getFeatured();

  return <FeatureGrid products={products} />;
}
