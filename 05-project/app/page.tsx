import "@/lib/mongo/initdb"; // create dummy data if non existent
import Product from "@/model/product";
import FeatureGrid from "@/components/product/FeatureGrid";

export default async function Home() {
  const products = await Product.getAll();
  const [a, b, c] = products;

  return (
    <>
      <FeatureGrid products={[a, b, c]} />
    </>
  );
}
