import styles from './page.module.css';
import { Metadata } from 'next';
import { Suspense } from 'react';
import News from '@/models/News';
import List from '@/components/list/List';
import NewsItem from '@/components/list/NewsItem';
import Loader from '@/components/boundary/Loader';

const NewsFeed = async () => {
  const news = await News.getLatest();
  return (
    <List<News> row keyFn={({ id }) => id} items={news}>
      {(news) => <NewsItem {...{ news }} />}
    </List>
  );
};

export const metadata: Metadata = {
        title: 'Latest News',
  description: 'List of latest articles',
};


export default function ArticlesLatest() {
  return (
    <div className={styles['articles-latest']}>
      <h1>Latest Articles</h1>
      <Suspense fallback={<Loader size='sm' />}>
        <NewsFeed />
      </Suspense>
    </div>
  );
}
