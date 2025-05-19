import News from '@/models/News';
import styles from './layout.module.css';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loader from '@/components/boundary/Loader';
import Link from 'next/link';

const ArchiveYears = async () => {
  const years = await News.getYears();
  return (
    <nav>
      {years.map(({ year }) =>
        <Link key={year} href={`/articles/${year}`}>{year}</Link>
      )}
    </nav>
  );
};

export const metadata: Metadata = {
        title: 'Archives',
  description: 'Collection of articles',
};

// @parallel-routes - @folder name passed as params to rootLooyout as children
export default function RootLayout({
  archive,
   latest,
}: Readonly<{
  archive: React.ReactNode;
   latest: React.ReactNode;
}>) {
  return (
    <div className={styles['articles']}>
      <h1>List of Archives</h1>
      <Suspense fallback={<Loader size='xs' />}>
        <ArchiveYears />
      </Suspense>
      <div>{archive}</div>
      <div>{latest}</div>
    </div>
  );
}
