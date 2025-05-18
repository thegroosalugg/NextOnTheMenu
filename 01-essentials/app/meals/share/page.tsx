import MealForm from '@/components/form/MealForm';
import styles from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
        title: 'Share your recipe',
  description: 'Submit recipe form',
};

export default function MealsShare() {
  return (
    <div className={styles['meals-share']}>
      <header>
        <h1>
          Share your <span className='highlight'>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <MealForm />
    </div>
  );
}
