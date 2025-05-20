import styles from './Loading.module.css';
import Loader from "@/components/boundary/Loader";

export default function LoadingComponent({ msg }: { msg: string }) {
  return (
    <div className={styles['loading']}>
      <p className='highlight'>{msg}</p>
      <Loader />
    </div>
  );
}
