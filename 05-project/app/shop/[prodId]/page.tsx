type Params = { params: Promise<{ prodId: string }> };

export const generateMetadata = async ({ params }: Params) => {
  const { prodId } = await params;
  return {
          title: prodId,
    description: '',
  };
};

export default async function ShopProdIdPage({ params }: Params) {
  const { prodId } = await params;
  return (
    <div>
      <h1>ShopProdId Page</h1>
      <p>ID: {prodId}</p>
    </div>
  );
}
