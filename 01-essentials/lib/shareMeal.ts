'use server'; // creates server action that ensures this function is only called on server
// when exported, all functions will be treated as server actions
// when called inside an FC, use server lives inside the function
import Meal from '@/models/Meal';
import slugify from 'slugify';

const lengths = {
          name: 2,
         email: 6,
         title: 10,
       summary: 20,
  instructions: 100,
         image: 1
};

const validate = (formData: FormData) => {
  const data = Array.from(formData.entries()); // create 2d array from FormData
  const errorsArray = data.flatMap(([key, value]) => {
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

  const errors = Object.fromEntries(errorsArray); // to object
  const missingFields = Object.keys(lengths).filter(field => !formData.has(field));
  for (const field of missingFields) {
    errors[field] = 'is required'; // add missing fields to errors object
  }
  return Object.keys(errors).length > 0 ? errors : null; // returns null when valid
};

const saveFile = (name: string, file: File) => {
  const date = new Date().toISOString().replace(/[.:]/g, '-');
  const slug = slugify(`${name}-${date}`, { lower: true });
  const ext = file.name.split('.').pop();
  const fileName = `${slug}.${ext}`;
  const image = `/images/${fileName}`;
  return { slug, image };
};

export async function shareMeal(formData: FormData) {
  const errors = validate(formData);
  if (errors) return { ...errors, ok: false };

  const data: Record<string, string> = {};
  const file = formData.get('image');
  if (!(file instanceof File)) return { image: 'Image is missing', ok: false };

  for (const [key, value] of formData.entries()) {
    if (!(value instanceof File)) data[key] = value.toString();
  }

  const { name, email, title, summary, instructions } = data;
  const { slug, image } = saveFile(title, file);

  const meal = new Meal({
          creator: name,
    creator_email: email,
            title,
          summary,
     instructions,
             slug,
            image,
  });
  console.log(meal);
  return { ok: true };
}
