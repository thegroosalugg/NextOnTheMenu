import { redirect } from 'next/navigation';
import { revalidateTag } from 'next/cache';
import MessageForm from '@/components/shared/MessageForm';

export default function MessagesNew() {
  async function createMessage(formData: FormData) {
    'use server';

    const message = formData.get('message') || new Date().toISOString() + ' Message';
    const response = await fetch('http://localhost:8080/new-message', {
       method: 'POST',
         body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      revalidateTag('msg'); // *6 programatically revalidate all linked tags
      redirect('/cache-api');
    }
  }

  return <MessageForm action={createMessage} />;
}
