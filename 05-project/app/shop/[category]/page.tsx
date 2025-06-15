import { ProductsByCategory } from "@/components/shop/Shop";

type Params = { params: Promise<{ category: string }> };

export const generateMetadata = async ({ params }: Params) => {
  const { category } = await params;
  const title = category.charAt(0).toUpperCase() + category.slice(1);
  return { title, description: 'search by category' };
};

export default async function ShopCategoryPage({ params }: Params) {
  const { category } = await params;
  return <ProductsByCategory {...{ category }} />
}
