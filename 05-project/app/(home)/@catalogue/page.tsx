import ProductList from "@/components/product/list/ProductList";
import Product from "@/model/product";

export default async function ProductCatalogue() {
  const products = await Product.getAll();
  if (!products) return null;
  // clone list for better scroll effect
  products.push(...products.map((p, i) => ({ ...p, _id: p._id + i })));

  return <ProductList scroll animate {...{ products }} />;
}
