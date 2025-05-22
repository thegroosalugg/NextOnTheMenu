import News from '@/models/News';
import styles from './page.module.css';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ImageBoxed from '@/components/image/ImageBoxed';

type Params = { params: Promise<{ slug: string }> };

// reserved function names allows Next to locate dynamic metadata
export const generateMetadata = async ({ params }: Params) => {
  const { slug } = await params;
  const news = await News.find(slug);
  if (!news) notFound(); // ensures correct data displayed

  return {
          title: news.title,
    description: news.title,
  };
};

export default async function NewsSlug({ params }: Params) {
  const { slug } = await params;
  const news = await News.find(slug);
  if (!news) notFound();
  const { title, image, content } = news;

  return (
    <article className={styles['news-slug']}>
      <h1>{title}</h1>
      <time>{news.formatDate()}</time>
      <Link href={`/news/${slug}/image`}>
        <ImageBoxed src={`/news/${image}`} alt={title} maxWidth={500} height={400} />
      </Link>
      <p>{content}</p>
    </article>
  );
}
