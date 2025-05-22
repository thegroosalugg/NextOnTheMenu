import News from '@/models/News';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function ImagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news = await News.find(slug);
  if (!news) notFound();
  const { image, title } = news;

  return (
    <Image
      priority
      src={`/news/${image}`}
      alt={title}
      width={0} // skips lazy sizing
      height={0}
      sizes='100vw' // tells next how big to make image
      style={{ width: '100%', height: 'auto' }} // set w/h with style
    />
  );
}
