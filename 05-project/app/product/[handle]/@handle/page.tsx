import Product from '@/model/product';
import { notFound } from 'next/navigation';
import { Param } from '@/lib/types/param';
import Gallery from '@/components/product/handle/gallery/Gallery';
import ProductDescription from '@/components/product/handle/description/ProductDescription';

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

  Product.updateViews(product._id); // non blocking
  const { name, images } = product;

  return (
    <div
      className="
        flex flex-col md:flex-row
        items-center md:items-start
        mx-auto my-6 px-2 py-4 md:p-12 gap-2
        max-w-screen-xl shadow-xl
        border border-stone-700 dark:border-stone-400
        bg-stone-100 dark:bg-stone-700
      "
    >
      <Gallery {...{ images, name }} />
      <ProductDescription {...product} />
    </div>
  );
}
