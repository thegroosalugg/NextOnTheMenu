import News from '@/models/News';
import Image from 'next/image';
import { notFound } from 'next/navigation';

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
      <Image
        priority
        src={`/news/${image}`}
        alt={title}
        width={0} // skips lazy sizing
        height={0}
        sizes='100vw' // tells next how big to make image
        style={{ width: '100%', height: 'auto' }} // set w/h with style
      />
    </>
  );
}
