import Meal from '@/models/Meal';
import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise<void>(
    (resolve, reject) =>
      setTimeout(() => {
        if (Math.random() > 0.02) {
          resolve();
        } else {
          reject(new Error('Fetching meals failed')); // simulate errors
        }
      }, 1500) // simulate data fetching
  );

  return db.prepare('SELECT * FROM meals').all() as Meal[];
}

export async function getMeal(slug: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500)); // dummy promise
  // ? placeholder to avoid injection attacks
  const meal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as Meal;
  meal.instructions = JSON.parse(meal.instructions as unknown as string); // pasrse JSON string to array
  return meal;
}
