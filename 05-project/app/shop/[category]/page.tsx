import ProductList from "@/components/product/list/ProductList";
import { checkCategory } from "@/lib/actions/category";
import { getProducts } from "@/lib/actions/product";
import { Param } from "@/lib/types/param";
import { notFound } from "next/navigation";

type Params = {
        params: Param<"category">;
  searchParams: Param<"sort">;
};

export const generateMetadata = async ({ params }: Params) => {
  const { category } = await params;
  const isValid = await checkCategory(category);
  if (!isValid) notFound();

  const title = category.charAt(0).toUpperCase() + category.slice(1);
  return { title, description: "search by category" };
};

export default async function ShopCategoryPage({ params, searchParams }: Params) {
  const { category } = await params;
  const isValid = await checkCategory(category);
  if (!isValid) notFound();

  const { sort } = await searchParams;
  const products = await getProducts({ category, sort });
  if (!products) notFound();

  return <ProductList {...{ products }} />;
}
