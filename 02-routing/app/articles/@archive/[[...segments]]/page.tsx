import styles from './page.module.css';
import { notFound } from 'next/navigation';
import News from '@/models/News';
import List from '@/components/list/List';
import NewsItem from '@/components/list/NewsItem';

export default async function ArticlesArchiveYear({
  params,
}: {
  params: Promise<{ segments: string[] }>;
}) {
  let content = <p>Select an archive</p>;

  const { segments } = await params;
  if (segments) {
    const [year] = segments;
    const news = await News.findByYear(year);
    if (news.length < 1) notFound();
    content = (
      <>
        <h1>
          Articles from <span className='highlight'>{year}</span>
        </h1>
        <List<News> row keyFn={({ id }) => id} items={news}>
          {(news) => <NewsItem {...{ news }} />}
        </List>
      </>
    );
  }

  return <div className={styles['articles-archive-year']}>{content}</div>;
}
