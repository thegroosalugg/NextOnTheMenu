'use client';
import { useFormStatus } from 'react-dom';
import styles from './Submit.module.css';

export default function Submit() {
  const status = useFormStatus(); // must be used in an FC thats a form child

  return (
    <button type="submit" className={styles['submit']} disabled={status.pending}>
      {status.pending ? 'Sending...' : 'Send'}
    </button>
  );
}
