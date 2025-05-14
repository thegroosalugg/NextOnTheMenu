import Link from 'next/link';
import styles from './page.module.css';
import List from '@/components/List';
import { getMeals } from '@/lib/Meals';
import MealItem from '@/components/MealItem';
import Meal from '@/models/Meal';

// nextJS functions are server functions and can be async
export default async function Meals() {
  const meals = await getMeals();

  return (
    <div className={styles['meals']}>
      <header>
        <h1>
          Delicious <span className='highlight'>Meals</span>
        </h1>
        <p>Browse community recipes</p>
        <Link href='/meals/share'>Share your recipe</Link>
      </header>
      <main>
        <List<Meal> keyFn={({ id }) => id} items={meals}>
          {(meal) => (
            <MealItem {...meal} />
          )}
        </List>
      </main>
    </div>
  );
}
