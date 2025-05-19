import styles from './page.module.css';

export default async function ArticlesArchiveYear({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  return (
    <div className={styles['articles-archive-year']}>
      <h1>ArticlesArchiveYear Page</h1>
      <p>ID: {year}</p>
    </div>
  );
}
