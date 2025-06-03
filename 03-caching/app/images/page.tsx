import ImagePicker from '@/components/form/ImagePicker';
import styles from './page.module.css';
import { uploadImage } from '@/lib/cloudinary';
import { addImage, getImages } from '@/lib/sql_db';
import Submit from '@/components/form/Submit';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

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
      <ul>
        {images.map(({ id, url }) => (
          <li key={id}>
            {/* <Image src={url} alt='user image' fill sizes="100%" /> */}
            {/* Next <Image/> styles under the hood */}
            <img
              src={url}
              alt='user image'
              style={{
                 position: 'absolute',
                      top: 0,
                     left: 0,
                    width: '100%',
                   height: '100%',
                objectFit: 'cover',
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
