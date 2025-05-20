import styles from './page.module.css';
import { notFound } from 'next/navigation';
import News from '@/models/News';
import List from '@/components/list/List';
import NewsItem from '@/components/list/NewsItem';

export default async function ArticlesArchiveYear({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const news = await News.findByYear(year);
  if (news.length < 1) notFound();

  return (
    <div className={styles['articles-archive-year']}>
      <h1>Articles from <span className='highlight'>{year}</span></h1>
      <List<News> row keyFn={({ id }) => id} items={news}>
        {(news) => <NewsItem {...{ news }} />}
      </List>
    </div>
  );
}
