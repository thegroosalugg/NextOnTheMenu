import ImagePicker from '@/components/form/ImagePicker';
import styles from './page.module.css';
import { uploadImage } from '@/lib/cloudinary';
import Submit from '@/components/form/Submit';

export default function Images() {
  async function serverAction(formData: FormData) {
    'use server';
    const image = formData.get('image');
    if (image instanceof File) {
      const imgURL = await uploadImage(image);
      console.log(imgURL);
    }
  }

  return (
    <div className={styles['images']}>
      <h1>Upload an Image</h1>
      <form action={serverAction}>
        <ImagePicker />
        <Submit />
      </form>
    </div>
  );
}
