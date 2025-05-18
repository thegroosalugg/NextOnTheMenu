'use client';
import { useEffect, useState } from 'react';
import styles from './ImagePicker.module.css';
import Image from 'next/image';

const fileTypes = ['image/png', 'image/jpeg', 'image/jpg'];

export default function ImagePicker({ formErr, count }: { formErr: string, count: number }) {
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const classes = `${styles['image-picker']} ${error ? styles['error'] : ''}`;

  useEffect(() => {
    if (formErr) {
      setImage('');
      setError(formErr);
    }
  }, [formErr, count]); // submit count

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    let errMsg;

    if (!file)                               errMsg = 'No file selected';
    else if (!fileTypes.includes(file.type)) errMsg = 'Must be jpg, jpeg or png';
    else if (file.size > 1024 * 1024)        errMsg = 'File size over 1mb';

    if (errMsg) {
      e.target.value = ''; // remove invalid file
      setError(errMsg);
      setImage('');
    } else if (file) {
      setError('');
      // Creates a temporary local URL to preview the file
      setImage(URL.createObjectURL(file)); // URL is a global browser API.

      // *Alternative approach - using FileReader()
      // const fileReader = new FileReader();
      // *onload is a callback that is called at the end of an operation
      // *onload has no default value. You must set its value as a function to call
      // fileReader.onload = () => setImage(fileReader.result as string);
      // *readAsDataURL does not return anything, hence it can execute onload callback instead
      // fileReader.readAsDataURL(file);
    }
  }

  return (
    <label htmlFor='image' className={classes}>
      <input
            type='file'
              id='image'
            name='image'
          accept={fileTypes.join(', ')}
        onChange={changeHandler}
      />
      {image ? (
        <Image src={image} alt='user select image' fill sizes='100%' />
      ) : error ? (
        error
      ) : (
        'No image selected'
      )}
    </label>
  );
}
