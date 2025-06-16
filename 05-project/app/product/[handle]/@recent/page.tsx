import ProductList from "@/components/product/ProductList";
import Product from "@/model/product";

export default async function RecentlyViewed() {
  const products = await Product.getAll();
  if (!products) return null;

  return <ProductList scroll {...{ products }} />;
}
