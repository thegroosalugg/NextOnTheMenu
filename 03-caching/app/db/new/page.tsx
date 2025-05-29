import { redirect } from 'next/navigation';
import { addMessage } from '@/lib/messages';
import { revalidateTag } from 'next/cache';
import MessageForm from '@/components/shared/MessageForm';

export default function MessagesNew() {
  async function createMessage(formData: FormData) {
    'use server';

    const message =
      (formData.get('message') as string) || new Date().toISOString() + ' Message';
    await addMessage(message);
    revalidateTag('msg');
    redirect('/db');
  }

  return <MessageForm action={createMessage} />;
}
