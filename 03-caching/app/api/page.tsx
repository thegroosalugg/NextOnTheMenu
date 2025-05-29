import { unstable_noStore } from 'next/cache';
import MessagesList from '@/components/shared/MessagesList';

// export const revalidate = 3; // *3 revalidate all requests in whole file (PROD ONLY)
// export const dynamic = 'force-dynamic'; // *4 no-store - discards cache for whole file (PROD ONLY)

// **COMBINE (*4 force-dynamic | *5 unstable_noStore) + *2 next { revalidate } IN PROD
// ensures requests are revalidated on navigation - otherwise they refetch on refresh only

// default next14 cache: 'force-cache', next15 cache: 'no-store' (DEV ONLY)
export default async function MessagesPage() {
  unstable_noStore(); // *5 no-store - discards cache for this component only - still unstable

  const response = await fetch('http://localhost:8080/messages', {
    // headers: { 'X-ID': 'layout' }, // *1 requests with the identical config will be memoized
    next: {
      revalidate: 3, // *2 caches request and only re-fires every n secs
      tags: ['msg'] // *6 create custom tags that can be revalidated on call
      },
    // cache: 'force-cache' // **dev: 'no-store', build: 'force-cache'
  });

  const msgs = await response.json();

  return <MessagesList {...{ msgs }} />;
}
