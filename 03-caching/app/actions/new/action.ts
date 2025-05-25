'use server';

import { addMessage } from '@/lib/messages';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

// receives prevState & formData automatically from useActionState
export async function createMessage(prevState: Record<string, string>, formData: FormData) {
  const message = formData.get('message') as string;
  console.log('prevState', prevState);

  const error = message.trim() ? null : 'missing';
  if (error) return { message: error }; // { controlName: errorMsg } format for <Input />
  addMessage(message);
  revalidateTag('msg');
  redirect('/actions');
}
