import Meal from '@/models/Meal';
import styles from './MealItem.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function MealItem({ title, image, creator, summary, slug }: Meal) {
  return (
    <article className={styles['meal']}>
      <div className={styles['image']}>
        {/* statically served images, with unknown w/h - must set fill & sizes
          fill requires parent wrapper with relative position
          sizes also accepts media queries */}
        <Image src={image} alt={title} fill sizes='100%' priority />
      </div>
      <h2>{title}</h2>
      <p>by {creator}</p>
      <p>{summary}</p>
      <Link href={`/meals/${slug}`}>View Details</Link>
    </article>
  );
}
