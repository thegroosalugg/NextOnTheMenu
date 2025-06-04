import styles from './page.module.css';
import Training from '@/models/training';
import List from '@/components/list/List';
import ImageBoxed from '@/components/image/ImageBoxed';

export default function TrainingPage() {
  const trainingSessions = Training.getAll();

  return (
    <div className={styles['training']}>
      <h1>Training Page</h1>
      <List items={trainingSessions} keyFn={({ id }) => id}>
        {({ title, image, desc }) => (
          <article>
            <ImageBoxed src={`/trainings${image}`} alt={title} round={5} />
            <h2>{title}</h2>
            <p>{desc}</p>
          </article>
        )}
      </List>
    </div>
  );
}
