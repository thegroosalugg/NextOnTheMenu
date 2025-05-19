import News from '@/models/News';
import styles from './page.module.css';
import { Suspense } from 'react';
import { Metadata } from 'next';
import NewsItem from '@/components/list/NewsItem';
import List from '@/components/list/List';

const NewsFeed = async () => {
  const news = await News.getAll();
  return (
    <List<News> keyFn={({ id }) => id} items={news}>
      {(news) => <NewsItem {...{ news }} />}
    </List>
  );
};

export const metadata: Metadata = {
        title: 'News',
  description: 'Articles around the world',
};

export default function NewsPage() {
  return (
    <div className={styles['news']}>
      <h1>News Page</h1>
      <Suspense fallback={<p className={styles['loading']}>Loading data...</p>}>
        <NewsFeed />
      </Suspense>
    </div>
  );
}
