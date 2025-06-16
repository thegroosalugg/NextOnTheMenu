'use client';
import styles from './Modal.module.css';
import { useRouter } from 'next/navigation';

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  // allows to navigate back programatically. Link doesn't reset parallel modal to null
  return (
    <>
      <div className={styles['backdrop']} onClick={router.back} />
      <dialog open className={styles['modal']}>
        {children}
      </dialog>
    </>
  );
}
