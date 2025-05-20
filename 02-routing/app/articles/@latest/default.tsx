import styles from './default.module.css';
import { Suspense } from 'react';
import Loader from '@/components/boundary/Loader';
import NewsFeed from '@/components/list/NewsFeed';

// default.tsx is a reserved name. Allows parallel routes to have nested slug routes
export default function ArticlesLatest() {
  return (
    <div className={styles['articles-latest']}>
      <h1>Latest Articles</h1>
      <Suspense fallback={<Loader size='sm' />}>
        <NewsFeed row query='getLatest' />
      </Suspense>
    </div>
  );
}
