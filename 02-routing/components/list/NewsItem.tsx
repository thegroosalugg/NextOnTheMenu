import styles from './NewsItem.module.css';
import Link from 'next/link';
import News from '@/models/News';
import DynamicImage from '../image/DynamicImage';

export default function NewsItem({ news }: { news: News }) {
  const { title, image, slug } = news;
  return (
    <Link href={'/news/' + slug} className={styles['news-item']}>
      <time>{news.getDate()}</time>
      <DynamicImage src={`/news/${image}`} alt={title} rounded />
      <h1>{title}</h1>
    </Link>
  );
}
