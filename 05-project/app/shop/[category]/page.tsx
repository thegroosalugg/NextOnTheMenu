import { ProductsByCategory } from "@/components/shop/Shop";

type Params = { params: Promise<{ category: string }> };

export const generateMetadata = async ({ params }: Params) => {
  const { category } = await params;
  return {
          title: category,
    description: '',
  };
};

export default async function ShopCategoryPage({ params }: Params) {
  const { category } = await params;
  console.log('SHOP SLUG', category)
  return <ProductsByCategory {...{ category }} />
}
