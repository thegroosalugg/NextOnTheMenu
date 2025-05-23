import styles from './Loading.module.css';
import Loader from '@/components/boundary/Loader';

export default function LoadingComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles['loading']}>
      <p className='highlight'>{children}</p>
      <Loader />
    </div>
  );
}
