import Product from "@/model/product";
import ProductList from "@/components/product/list/ProductList";

export default async function FeaturedProducts() {
  const products = await Product.getFeatured();
  if (!products) return null;

  return <ProductList hero {...{ products }} />;
}
