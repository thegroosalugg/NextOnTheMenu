'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './ImagePicker.module.css';
import Image from 'next/image';

const fileTypes = ['image/png', 'image/jpeg', 'image/jpg'];

export default function ImagePicker({ formErr, count }: { formErr?: string, count?: number }) {
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const input = useRef<HTMLInputElement | null>(null);
  const classes = `${styles['image-picker']} ${error ? styles['error'] : ''}`;
  const removeFile = () => { if (input.current) input.current.value = ''; };

  useEffect(() => {
    if (formErr) {
      setImage('');
      setError(formErr);
      removeFile();
    }
  }, [formErr, count]);

  function changeHandler() {
    const file = input.current?.files?.[0];
    let errMsg;

         if (!file)                          errMsg = 'No file selected';
    else if (!fileTypes.includes(file.type)) errMsg = 'Must be jpg, jpeg or png';
    else if (file.size > 1024 * 1024)        errMsg = 'File size over 1mb';

    if (errMsg) {
      removeFile();
      setError(errMsg);
      setImage('');
    } else if (file) {
      setError('');
      setImage(URL.createObjectURL(file));
    }
  }

  return (
    <label htmlFor='image' className={classes}>
      <input
             ref={input}
            type='file'
              id='image'
            name='image'
          accept={fileTypes.join(', ')}
        onChange={changeHandler}
      />
      {image ? (
        <Image src={image} alt='user select image' fill sizes='100%' />
      ) : (
        <span>{error ? error : 'No image selected'}</span>
      )}
    </label>
  );
}
