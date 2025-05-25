import Input from '@/components/form/Input';
import styles from './page.module.css';
import { redirect } from 'next/navigation';
import { addMessage } from '@/lib/messages';
import { revalidateTag } from 'next/cache';
import Submit from '@/components/form/Submit';

export default function MessagesNew() {
  async function createMessage(formData: FormData) {
    'use server';

    const message =
      (formData.get('message') as string) || new Date().toISOString() + ' Message';
    addMessage(message);
    revalidateTag('msg');
    redirect('/db');
  }

  return (
    <form className={styles['messages-new']} action={createMessage}>
      <Input control='message' rows={4}>
        Your Message
      </Input>
      <Submit />
    </form>
  );
}
