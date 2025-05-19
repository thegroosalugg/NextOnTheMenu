import styles from './layout.module.css';
import type { Metadata } from 'next';

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
      <div>{archive}</div>
      <div>{latest}</div>
    </div>
  );
}
