import Product from '@/model/product';
import { notFound } from 'next/navigation';
import { Param } from '@/lib/types/param';
import Gallery from '@/components/product/Gallery';
import ProductDescription from '@/components/product/ProductDescription';

type Params = { params: Param<"handle"> };

export const generateMetadata = async ({ params }: Params) => {
  const { handle } = await params;
  const product = await Product.findById(handle);
  if (!product) notFound();

  return {
          title: product.name,
    description: product.desc,
  };
};

export default async function ProductDetails({ params }: Params) {
  const { handle } = await params;
  const product = await Product.findById(handle);
  if (!product) notFound();

  const { name, images } = product;

  return (
    <div
      className="
        flex flex-col md:flex-row
        items-center md:items-start
        mx-auto my-6 px-2 py-4 md:p-6 gap-6
        max-w-md md:max-w-screen-md
        shadow-xl
        border border-stone-700 dark:border-stone-400
        bg-stone-100 dark:bg-stone-700
      "
    >
      <Gallery {...{ images, name }} />
      <ProductDescription {...product} />
    </div>
  );
}
