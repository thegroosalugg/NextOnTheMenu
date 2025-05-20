import News from '@/models/News';
import styles from './layout.module.css';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import Loader from '@/components/boundary/Loader';
import NavLink from '@/components/header/NavLink';

const ArchiveYears = async () => {
  const years = await News.getYears();
  return years.map(({ year }) => (
    <NavLink key={year} href={`/articles/${year}`}>
      {year}
    </NavLink>
  ));
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
      <nav>
        <Suspense fallback={<Loader size='xs' />}>
          <ArchiveYears />
        </Suspense>
      </nav>
      <div className={styles['archives']}>{archive}</div>
      <div>{latest}</div>
    </div>
  );
}
