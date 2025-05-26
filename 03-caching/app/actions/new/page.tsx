'use client';
import { useActionState } from 'react';
import { createMessage } from './action';
import MessageForm from '@/components/shared/MessageForm';

type FormState = Record<string, string>;

export default function MessagesNew() {
  // accepts a server action function and an initial state
  // => passes state & formdata to server action function
  const [state, formAction] = useActionState<FormState, FormData>(createMessage, {});
  console.log('state', state);

  return <MessageForm action={formAction} errors={state} />;
}
