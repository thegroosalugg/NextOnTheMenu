import { notFound } from 'next/navigation';
import News from '@/models/News';
import ImageView from '@/components/image/ImageView';

export default async function ImagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news = await News.find(slug);
  if (!news) notFound();
  const { image, title } = news;

  return <ImageView src={`/news/${image}`} alt={title} />;
}
