import styles from './page.module.css';
import { uploadImage } from '@/lib/cloudinary';
import { addImage, getImages } from '@/lib/sql_db';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import ImagePicker from '@/components/form/ImagePicker';
import Submit from '@/components/form/Submit';
import ImagesList from '@/components/shared/ImagesList';

export default function Images() {
  const images = getImages();

  async function serverAction(formData: FormData) {
    'use server';
    const image = formData.get('image');
    if (image instanceof File) {
      const imgURL = await uploadImage(image);
      addImage(imgURL);
      revalidatePath('/images');
      redirect('/images');
    }
  }

  return (
    <div className={styles['images']}>
      <h1>Upload an Image</h1>
      <form action={serverAction}>
        <ImagePicker />
        <Submit />
      </form>
      <ImagesList {...{ images }} />
    </div>
  );
}
