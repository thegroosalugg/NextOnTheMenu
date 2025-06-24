import ProductList from "@/components/product/list/ProductList";
import { getProducts } from "@/lib/actions/product";

export default async function ProductCatalogue() {
  const products = await getProducts();
  if (!products) return null;
  // clone list for better scroll effect
  products.push(...products.map((p, i) => ({ ...p, _id: p._id + i })));

  return <ProductList scroll animate {...{ products }} />;
}
