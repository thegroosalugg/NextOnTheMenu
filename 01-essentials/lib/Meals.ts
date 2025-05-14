import Meal from '@/models/Meal';
import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate data fetching
  return db.prepare('SELECT * FROM meals').all() as Meal[];
}
