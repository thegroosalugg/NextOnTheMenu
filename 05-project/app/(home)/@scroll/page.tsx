import ProductList from "@/components/product/ProductList";
import Product from "@/model/product";

export default async function ScrollPage() {
  const products = await Product.getAll();
  if (!products) return null;
  // clone list for better scroll effect
  products.push(...products.map((p, i) => ({ ...p, _id: p._id + i })));

  return <ProductList scroll {...{ products }} />;
}
