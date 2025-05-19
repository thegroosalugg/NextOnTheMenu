import styles from './page.module.css';
import { Metadata } from 'next';
import { Suspense } from 'react';
import News from '@/models/News';
import List from '@/components/list/List';
import NewsItem from '@/components/list/NewsItem';
import Loader from '@/components/boundary/Loader';

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
      <Suspense fallback={<Loader />}>
        <NewsFeed />
      </Suspense>
    </div>
  );
}
