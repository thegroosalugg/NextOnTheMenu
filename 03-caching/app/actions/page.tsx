// import { unstable_noStore } from 'next/cache';
import styles from './page.module.css';
import { getMessages } from '@/lib/messages';

export const dynamic = 'force-dynamic';
// as with API: Combine dynamic | unstable_noStore with revalidate to refetch on navigation

export default async function MessagesPage() {
  // unstable_noStore();
  const msgs = await getMessages() as { id: string; text: string }[];

  if (msgs.length === 0) {
    return <p>No messages found</p>;
  }

  return (
    <ol className={styles['messages']}>
      {msgs.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ol>
  );
}
