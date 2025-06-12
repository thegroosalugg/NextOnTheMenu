import GridList from "@/components/product/GridList";
import Product from "@/model/product";

export default async function ScrollPage() {
  const products = await Product.getAll();
  products.push(...products.map((p, i) => ({ ...p, _id: p._id + i }))); // clone list for better scroll effect

  return <GridList {...{ products }} scroll />;
}
