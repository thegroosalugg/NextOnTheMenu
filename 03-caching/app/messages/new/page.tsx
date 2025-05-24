import Input from '@/components/form/Input';
import styles from './page.module.css';
import { redirect } from 'next/navigation';
import { revalidateTag } from 'next/cache';

export default function MessagesNew() {
  async function createMessage(formData: FormData) {
    'use server';

    const message = formData.get('message');
    console.log(message);
    revalidateTag('msg'); // *6 programatically revalidate all linked tags
    redirect('/messages');
  }

  return (
    <form className={styles['messages-new']} action={createMessage}>
      <Input control='message' rows={4}>
        Your Message
      </Input>
      <button>Send</button>
    </form>
  );
}
