import TileList from "@/components/product/TileList";
import Category from "@/model/category";
import Product from "@/model/product";
import { notFound } from "next/navigation";

type Params = { params: Promise<{ category: string }> };

export const generateMetadata = async ({ params }: Params) => {
  const { category } = await params;
  const isValid = await Category.isValid(category);
  if (!isValid) notFound();
  const title = category.charAt(0).toUpperCase() + category.slice(1);
  return { title, description: 'search by category' };
};

export default async function ShopCategoryPage({ params }: Params) {
  const { category } = await params;
  const isValid = await Category.isValid(category);
  if (!isValid) notFound();
  const products = await Product.getByCategory(category);
  return <TileList {...{ products }} />;
}
