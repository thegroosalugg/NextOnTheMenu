import type { Message } from '@/lib/messages';
import styles from './MessagesList.module.css';

export default function MessagesList({ msgs }: { msgs: Message[] }) {
  if (msgs.length === 0) {
    return <p>No messages found</p>;
  }

  return (
    <ol className={styles['messages-list']}>
      {msgs.map(({ id, text, liked }, i) => (
        <li key={id}>
          <span>{i + 1}</span>
          <p>{text}</p>
          <svg
                  viewBox='0 0 24 24'
                    width='24'
                    height='24'
                      fill={liked ? 'currentColor' : 'none'}
                    stroke='currentColor'
               strokeWidth='2'
             strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z' />
          </svg>
        </li>
      ))}
    </ol>
  );
}
