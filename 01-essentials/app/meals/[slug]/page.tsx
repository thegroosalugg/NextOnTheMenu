import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Meal from '@/models/Meal';

// params is now aync, for the Functional component must be async
export default async function MealsSlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meal = await Meal.find(slug);
  if (!meal) notFound(); // searches for closest not-found.tsx
  console.log(meal);

  return (
    <div className={styles['meals-slug']}>
      <h1>MealsSlug page</h1>
      <p>ID: {meal.title}</p>
    </div>
  );
}
