'use server';

import type { MappedObject } from "@/models/shared-types";
import { redirect } from "next/navigation";
import { hashPassword, verifyPassword } from "./password";
import { createAuthSession } from "./auth";
import User from "@/models/user";

// not relevant here but its a nice function to have for future reference
// const sanitize = (str: string) => str.replace(/\s+/g, ' ').trim().toLowerCase();

const validateEmail = (email: string) => {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!pattern.test(email)) return 'is invalid';
};

const validatePassword = (password: string) => {
  const pattern = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]+$/;
  if (password.length < 8)     return 'requires min 8 chars'
  if (!pattern.test(password)) return 'contains invalid chars';
};

const validators = {
     email: validateEmail,
  password: validatePassword,
};

type FormEntry = keyof typeof validators;

const validateForm = (formData: FormData) =>
  Array.from(formData.entries()).reduce<MappedObject>((errors, [k, v]) => {
    const error = validators[k as FormEntry](v.toString());
    if (error) errors[k] = error;
    return errors;
  }, {});

export const signUp = async (formData: FormData) => {
  const errors = validateForm(formData);

  if (Object.keys(errors).length > 0) return errors;

  const data = Object.fromEntries(formData.entries()) as MappedObject;
  const { email, password } = data;
  const sanitized = email.trim().toLowerCase();
  const hashedPw = hashPassword(password);

  try {
    new User({ email: sanitized, password: hashedPw }).save();
    const user = User.findByEmail(sanitized);
    await createAuthSession(user.id);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('UNIQUE')) return { email: 'is already in use' };
    }
    console.log(error);
  }

  redirect('/training');
};

export const login = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries()) as MappedObject;
  const { email, password } = data;
  const user = User.findByEmail(email.trim().toLowerCase());
  const isMatch = verifyPassword(user.password, password);

  if (isMatch) {
    await createAuthSession(user.id);
    redirect('/training');
  } else {
    return { email: "doesn't match", password: "doesn't match" };
  }
};
