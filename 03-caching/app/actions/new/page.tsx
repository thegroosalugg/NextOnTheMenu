'use client';
import styles from './page.module.css';
import Input from '@/components/form/Input';
import Submit from '@/components/form/Submit';
import { useActionState } from 'react';
import { createMessage } from './action';

type FormState = Record<string, string>;

export default function MessagesNew() {
  // accepts a server action function and an initial state
  // => passes state & formdata to server action function
  const [state, formAction] = useActionState<FormState, FormData>(createMessage, {});
  console.log('state', state);

  return (
    <form className={styles['messages-new']} action={formAction}>
      <Input control='message' rows={4} errors={state}>
        Your Message
      </Input>
      <Submit />
    </form>
  );
}
