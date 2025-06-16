import { Param } from '@/lib/types/param';
import Product from '@/model/product';
import { notFound } from 'next/navigation';

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

  return (
    <div>
      <h1>ProductHandle Page</h1>
      <p>handle: {product.name}</p>
    </div>
  );
}
