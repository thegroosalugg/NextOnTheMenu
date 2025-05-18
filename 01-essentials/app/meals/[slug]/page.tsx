import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Meal from '@/models/Meal';
import Image from 'next/image';

// params is now aync, for the Functional component must be async
export default async function MealsSlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meal = await Meal.find(slug);
  if (!meal) notFound(); // searches for closest not-found.tsx

  return (
    <div className={styles['meals-slug']}>
      <header>
        <div className={styles['image']}>
          {/* fill must have parent div with position: relative */}
          <Image src={meal.image} alt={meal.title} fill sizes='100%' priority />
        </div>
        <div className={styles['summary']}>
          <h1>{meal.title}</h1>
          <a href={`mailto:${meal.creator_email}`}>
            by <span className='highlight'>{meal.creator}</span>
          </a>
          <p>{meal.summary}</p>
        </div>
      </header>
      <ol className={styles['instructions']}>
        {meal.instructions
          .split('.')
          .filter((v) => v)
          .map((instruction, i) => (
            <li key={i}>{instruction}.</li>
          ))}
      </ol>
    </div>
  );
}
