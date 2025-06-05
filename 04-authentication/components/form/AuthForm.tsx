'use client';
import styles from './AuthForm.module.css';
import Input from '@/components/form/Input';
import Submit from '@/components/form/Submit';
import Svg from '@/components/ui/icon/Svg';
import { signUp } from '@/lib/signup';
import { useState } from 'react';
import { FormError } from './form.types';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [errors,   setErrors] = useState<FormError>({});
  const [pending, setPending] = useState(false);

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const res = await signUp(formData);
    setErrors(res);
    if (res.valid) {
      console.log(res);
    }
    setPending(false);
  }

  return (
    <form className={styles['auth-form']} onSubmit={submitHandler}>
      <header onClick={() => setIsLogin(!isLogin)}>
        <h2>{isLogin ? 'Login' : 'SignUp'}</h2>
        <Svg icon='Key' size={40} invert />
      </header>
      <Input {...{ control: 'email',    type: 'email',    errors }}>Your Email</Input>
      <Input {...{ control: 'password', type: 'password', errors }}>Your Password</Input>
      <Submit />
    </form>
  );
}
