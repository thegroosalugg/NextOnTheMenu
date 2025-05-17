'use server'; // creates server action that ensures this function is only called on server
// when exported, all functions will be treated as server actions
// when called inside an FC, use server lives inside the function
import Meal from '@/models/Meal';

const lengths = {
          name: 2,
         email: 6,
         title: 10,
       summary: 20,
  instructions: 100
};

const validate = (formData: FormData) => {
  const data = Array.from(formData.entries()); // create 2d array from FormData
  const errors = data.flatMap(([key, value]) => {
    if (value instanceof File) {
      if (value.size > 0) return []; // ignore files
      return [[key, 'Image required']]; // file required
    }
    const sanitized = value.replaceAll(/\s+/g, ' ').trim(); // flatten whitespaces & trim
    const minLength = lengths[key as keyof typeof lengths];
    // 2d array will be flattended
    if (sanitized.length < minLength) return [[key, `requires ${minLength} chars`]];
    return []; // valid k/v's flattended to nothing
  });
  return errors.length > 0 ? Object.fromEntries(errors) : null; // returns null when valid
};

export async function shareMeal(formData: FormData) {
  const errors = validate(formData);
  if (errors) return { ...errors, ok: false }
  // const data = Object.fromEntries(formData.entries());
  // const meal = new Meal(data);
  return { ok: true };
}
