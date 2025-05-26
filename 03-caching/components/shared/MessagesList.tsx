import type { Message } from '@/lib/messages';
import styles from './MessagesList.module.css';

export default function MessagesList({ msgs }: { msgs: Message[] }) {
  if (msgs.length === 0) {
    return <p>No messages found</p>;
  }

  return (
    <ol className={styles['messages-list']}>
      {msgs.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ol>
  );
}
