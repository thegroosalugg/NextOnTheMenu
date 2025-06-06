'use client';
import styles from './AuthForm.module.css';
import { useState } from 'react';
import { signUp, login } from '@/lib/actions';
import { MappedObject } from '@/models/shared-types';
import Input from '@/components/form/Input';
import Submit from '@/components/form/Submit';
import Svg from '@/components/ui/icon/Svg';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [errors,   setErrors] = useState<MappedObject>({});
  const [pending, setPending] = useState(false);

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (pending) return;
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const res = await (isLogin ? login(formData) : signUp(formData));
    setErrors(res);
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
