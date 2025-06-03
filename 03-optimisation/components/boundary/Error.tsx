import styles from './Error.module.css';

export default function ErrorComponent({ title, msg }: { title: string; msg: string }) {
  return (
    <div className={styles['error']}>
      <h1 className='highlight'>{title}</h1>
      <p>{msg}</p>
    </div>
  );
}
