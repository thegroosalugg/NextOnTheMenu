// import { unstable_noStore } from 'next/cache';
import MessagesList from '@/components/shared/MessagesList';
import { getMessages } from '@/lib/sql_db';

export const dynamic = 'force-dynamic';
// as with API: Combine dynamic | unstable_noStore with revalidate to refetch on navigation

export default async function MessagesPage() {
  // unstable_noStore();
  const msgs = await getMessages();

  return <MessagesList {...{ msgs }} />;
}
