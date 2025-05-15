import Meal from '@/models/Meal';
import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise<void>(
    (resolve, reject) =>
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve();
        } else {
          reject(new Error('Fetching meals failed')); // simulate errors
        }
      }, 2000) // simulate data fetching
  );

  return db.prepare('SELECT * FROM meals').all() as Meal[];
}
