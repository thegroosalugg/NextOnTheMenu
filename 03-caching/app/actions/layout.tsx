import MessagesLayout from '@/components/shared/MessagesLayout';
import { getMessages } from '@/lib/messages';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const msgs = await getMessages();

  return (
    <MessagesLayout
      header='Using various Form hooks and actions'
       count={msgs.length}
       navTo='/actions'
    >
      {children}
    </MessagesLayout>
  );
}
