import { Suspense } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import List from '@/components/list/List';
import MealItem from '@/components/list/MealItem';
import Meal from '@/models/Meal';

// nextJS functions are server functions and can be async
const Meals = async () => {
  const meals = await Meal.fetchAll();
  return (
    <List<Meal> keyFn={({ id }) => id} items={meals}>
      {(meal) => <MealItem {...meal} />}
    </List>
  );
};

export default function MealsPage() {
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
        {/* displays fallback until promise in <Meals /> is resolved */}
        <Suspense fallback={<p className={styles['loading']}>Loading data...</p>}>
          <Meals />
        </Suspense>
      </main>
    </div>
  );
}
