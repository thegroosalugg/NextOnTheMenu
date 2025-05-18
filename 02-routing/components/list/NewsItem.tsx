import News from '@/models/News';
import styles from './NewsItem.module.css';
import Image from 'next/image';

export default function NewsItem({ news }: { news: News }) {
  const { title, image, date, content } = news;
  return (
    <article className={styles['news-item']}>
      <h1>{title}</h1>
      <time>{date}</time>
      <div className={styles['image']}>
        <Image src={'/news/' + image} alt={title} fill sizes='100%' />
      </div>
      <p>{content}</p>
    </article>
  );
}
