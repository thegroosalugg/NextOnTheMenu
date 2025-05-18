import styles from './page.module.css';

export default async function NewsSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className={styles['news-slug']}>
      <h1>NewsSlug page</h1>
      <p>ID: {slug}</p>
    </div>
  );
}
