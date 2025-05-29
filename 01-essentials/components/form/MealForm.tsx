'use client';
import styles from './MealForm.module.css';
import { useState } from 'react';
import Input from '@/components/form/Input';
import ImagePicker from '@/components/form/ImagePicker';
import { shareMeal } from '@/lib/shareMeal';
import { redirect } from 'next/navigation';

export default function MealForm() {
  const [errors,   setErrors] = useState<Record<string, string>>({});
  const [count,     setCount] = useState(0);
  const [pending, setPending] = useState(false);
  // Next Server actions pass formData directly to function => no submitHandler needed
  // BUT: React 19 now resets forms onSubmit, losing client's formData even when form invalid
  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // therefore must use client to prevent this event
    if (pending) return;
    setPending(true);
    const form = e.currentTarget;
    const formData = new FormData(form); // get formData manually
    const response = await shareMeal(formData); // call server action, pass formData manually
    setErrors(response);
    setCount((n) => (n += 1)); // trigger <ImagePicker /> effect
    setPending(false);
    if (response.ok) {
      form.reset();
      redirect('/meals');
    }
  }

  return (
    // *Alternative server action trigger - however React 19 resets forms onSubmit, which needs blocking
    // <form className={styles['form']} action={shareMeal}>
    <form className={styles['form']} onSubmit={submitHandler}>
      <ImagePicker {...{ formErr: errors['image'], count }} />
      <div className={styles['row']}>
        <Input {...{ control: 'name',         errors }}>  Your name  </Input>
        <Input {...{ control: 'email',        errors }}>  Your email </Input>
      </div>
      <Input   {...{ control: 'title',        errors }}>   Title     </Input>
      <Input   {...{ control: 'summary',      errors }}>Short Summary</Input>
      <Input   {...{ control: 'instructions', errors, rows: 10 }}>Instructions</Input>
      <button disabled={pending}>{pending ? 'Sending...' : 'Share Meal'}</button>
    </form>
  );
}
