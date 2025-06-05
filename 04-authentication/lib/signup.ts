'use server';

import type { FormError } from "@/components/form/form.types";

const sanitize = (str: string) => str.replace(/\s+/g, ' ').trim().toLowerCase();

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
  Array.from(formData.entries()).reduce<FormError>((errors, [k, v]) => {
    const error = validators[k as FormEntry](v.toString());
    if (error) errors[k] = error;
    return errors;
  }, {});

export const signUp = async (formData: FormData) => {
  const errors = validateForm(formData);

  if (Object.keys(errors).length > 0) return errors;

  const data = Object.fromEntries(formData.entries());
  const { email, password } = data;
  console.log(email, password);

  return { valid: 'true' };
};
