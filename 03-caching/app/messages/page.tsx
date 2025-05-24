import { unstable_noStore } from 'next/cache';
import styles from './page.module.css';

// export const revalidate = 5; // *3 revalidate all requests in whole file - works only in prod
// export const dynamic = 'force-dynamic'; // *4 no-store - discards cache for whole file

// **COMBINE (*4 force-dynamic | *5 unstable_noStore) + *2 next { revalidate } IN PROD
// ensures requests are revalidated on navigation - otherwise they refetch on refresh only

// default next14 cache: 'force-cache', next15 cache: 'no-store'
export default async function MessagesPage() {
  unstable_noStore(); // *5 no-store - discards cache for this component only - still unstable
  const response = await fetch('http://localhost:8080/messages', {
    // headers: { 'X-ID': 'layout' }, // *1 requests with the identical config will be memoized
    next: { revalidate: 5 } // *2 caches request and only re-fires every 5s
    // cache: 'force-cache' // dev: 'no-store', build: 'force-cache'
  });
  const msgs: { id: string; text: string }[] = await response.json();

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
