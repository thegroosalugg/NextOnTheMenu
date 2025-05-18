'use client'; // required to pass event to function
import styles from './page.module.css';
import { useState } from 'react';
import Input from '@/components/form/Input';
import ImagePicker from '@/components/form/ImagePicker';
import { shareMeal } from '@/lib/shareMeal';
import { redirect } from 'next/navigation';

export default function MealsShare() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [count,   setCount] = useState(0);
  // Next Server actions pass formData directly to function => no submitHandler needed
  // BUT: React 19 now resets forms onSubmit, losing client's formData even when form invalid
  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // therefore must use client to prevent this event
    const formData = new FormData(e.currentTarget); // get formData manually
    const response = await shareMeal(formData); // call server action, pass formData manually
    setErrors(response);
    setCount(n => n += 1); // trigger <ImagePicker /> effect
    if (response.ok) redirect('/meals');
  };

  return (
    <div className={styles['meals-share']}>
      <header>
        <h1>
          Share your <span className='highlight'>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      {/* if React 19 didn't reset forms onSubmission, you could call action */}
      {/* <form className={styles['form']} action={shareMeal}> */}
      <form className={styles['form']} onSubmit={submitHandler}>
        <ImagePicker {...{ formErr: errors['image'], count }} />
        <div className={styles['row']}>
          <Input {...{ control: 'name',         errors }}>  Your name  </Input>
          <Input {...{ control: 'email',        errors }}>  Your email </Input>
        </div>
        <Input   {...{ control: 'title',        errors }}>    Title    </Input>
        <Input   {...{ control: 'summary',      errors }}>Short Summary</Input>
        <Input   {...{ control: 'instructions', errors, rows: 10 }}>
          Instructions
        </Input>
        <button>Share Meal</button>
      </form>
    </div>
  );
}
