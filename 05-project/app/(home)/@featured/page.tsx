import ProductList from "@/components/product/list/ProductList";
import { getFeatured } from "@/lib/actions/product";

export default async function FeaturedProducts() {
  const products = await getFeatured();
  if (!products) return null;

  return <ProductList hero {...{ products }} />;
}
