import { notFound } from 'next/navigation';
import News from '@/models/News';
import ImageView from '@/components/image/ImageView';

// interceptered routes - take name of route to intercept, prepend with (),
// add amount of (.) to get to route from current directory
// @parellel routes do not add additional . as path constructed per URL, not folders
export default async function InterceptedImagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = await News.find(slug);
  if (!news) notFound();
  const { image, title } = news;

  return (
    <>
      <h2>INTERCEPTED</h2>
      <ImageView src={`/news/${image}`} alt={title} />
    </>
  );
}
