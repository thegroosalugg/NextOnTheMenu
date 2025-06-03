import MessagesLayout from '@/components/shared/MessagesLayout';
import { getMessages } from '@/lib/sql_db';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const msgs = await getMessages();

  return (
    <MessagesLayout
      header='Caching with an internal DB'
       count={msgs.length}
       navTo='/db'
    >
      {children}
    </MessagesLayout>
  );
}
