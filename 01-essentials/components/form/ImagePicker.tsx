'use client';
import { useState } from 'react';
import styles from './ImagePicker.module.css';
import Image from 'next/image';

export default function ImagePicker() {
  const [image, setImage] = useState('');

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file?.type.startsWith('image/')) {
      setImage('');
      return;
    }
    setImage(URL.createObjectURL(file)); // URL is a global browser API.
    // Creates a temporary local URL to preview the file

    // *Alternative approach - using FileReader()
    // const fileReader = new FileReader();
    // *onload is a callback that is called at the end of an operation
    // *onload has no default value. You must set its value as a function to call
    // fileReader.onload = () => setImage(fileReader.result as string);
    // *readAsDataURL does not return anything, hence it can execute onload callback instead
    // fileReader.readAsDataURL(file);
  }

  return (
    <label htmlFor='image' className={styles['image-picker']}>
      <input
            type='file'
              id='image'
            name='image'
          accept='image/png, image/jpeg, image/jpg'
        onChange={changeHandler}
      />
      {image ? (
        <Image src={image} alt='user select image' fill sizes='100%' />
      ) : (
        'No image selected'
      )}
    </label>
  );
}
