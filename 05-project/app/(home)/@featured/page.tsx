import Product from "@/model/product";
import ProductList from "@/components/product/ProductList";

export default async function FeaturedProducts() {
  const products = await Product.getFeatured();
  if (!products) return null;

  return <ProductList hero {...{ products }} />;
}
