import styles from './default.module.css';
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

// default.tsx is a reserved name. Allows parallel routes to have nested slug routes
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
