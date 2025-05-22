import styles from './page.module.css';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Loader from '@/components/boundary/Loader';
import NewsFeed from '@/components/list/NewsFeed';

export const metadata: Metadata = {
        title: 'News',
  description: 'Articles around the world',
};

export default function NewsPage() {
  return (
    <div className={styles['news']}>
      <h1>News Page</h1>
      <Suspense fallback={<Loader />}>
        <NewsFeed query='getAll' />
      </Suspense>
    </div>
  );
}
