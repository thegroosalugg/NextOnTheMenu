import ProductList from "@/components/product/list/ProductList";
import { getProducts } from "@/lib/actions/product";

export default async function RecentlyViewed() {
  const products = await getProducts();
  if (!products) return null;

  return <ProductList scroll {...{ products }} />;
}
