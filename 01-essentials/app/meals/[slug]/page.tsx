import styles from './page.module.css';

// params is now aync, for the Functional component must be async
export default async function MealsSlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className={styles['meals-slug']}>
      <h1>MealsSlug page</h1>
      <p>ID: {slug}</p>
    </div>
  );
}
