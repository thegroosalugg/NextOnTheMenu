'use server'; // creates server action that ensures this function is only called on server
// when exported, all functions will be treated as server actions
// when called inside an FC, use server lives inside the function
import fs from 'fs';
import slugify from 'slugify';
import Meal from '@/models/Meal';
import { revalidatePath } from 'next/cache';

const lengths = {
          name: 2,
         email: 6,
         title: 10,
       summary: 15,
  instructions: 50,
         image: 1
};

const sanitize = (str: string) => str.replace(/\s+/g, ' ').trim();

const validate = (formData: FormData) => {
  const data = Array.from(formData.entries()); // create 2d array from FormData
  const errorsArray = data.flatMap(([key, value]) => {
    if (value instanceof File) {
      if (value.size > 0) return []; // ignore files
      return [[key, 'Image required']]; // file required
    }
    const sanitized = sanitize(value); // flatten whitespaces & trim
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

const saveFile = async (name: string, file: File) => {
  const     date = new Date().toISOString().replace(/[.:]/g, '-');
  const     slug = slugify(`${name}-${date}`, { lower: true, strict: true, replacement: '-' });
  const      ext = file.name.split('.').pop(); // strict removes all non alphanumeric chars
  const fileName = `${slug}.${ext}`;
  const    image = `/images/${fileName}`;

  const stream = fs.createWriteStream(`public${image}`); // allows writing to this path
  const bufferedImage = await file.arrayBuffer();
  let error;
  stream.write(Buffer.from(bufferedImage), (err) => error = err);
  return { slug, image, error };
};

export async function shareMeal(formData: FormData) {
  const errors = validate(formData);
  if (errors) return { ...errors, ok: false };

  const data: Record<string, string> = {};
  const file = formData.get('image');
  if (!(file instanceof File)) return { image: 'Image is missing', ok: false };

  for (const [key, value] of formData.entries()) {
    if (!(value instanceof File)) data[key] = sanitize(value.toString());
  }

  const { name, email, title, summary, instructions } = data;
  const { slug, image, error } = await saveFile(title, file);
  if (error) return { image: "Image couldn't be saved", ok: false };

  await new Meal({
          creator: name,
    creator_email: email,
            title,
          summary,
     instructions,
             slug,
            image,
  }).save();

  // add 'layout' as 2nd arg to revalidate nested pages too
  revalidatePath('/meals'); // discards cached pages and rebuilds. Must be on server
  return { ok: true };
}
