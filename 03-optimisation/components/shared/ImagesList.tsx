'use client'; // required for <Image/> loader
import Image, { ImageLoaderProps } from 'next/image';
import styles from './ImagesList.module.css';

export default function ImagesList({ images }: { images: { id: string, url: string }[] }) {
  function imageLoader(config: ImageLoaderProps) {
    const { src, quality } = config;
    const transformations = `/upload/w_200,q_${quality}`; // fetch transformed image
    return src.split('/upload').join(transformations);
  }

  return (
    <ul className={styles['images-list']}>
      {images.map(({ id, url }) => (
        <li key={id}>
          <Image
              loader={imageLoader} // runs before src loaded
                 src={url}
                 alt='user image'
                fill
               sizes='100%'
             quality={50} // compression level/100.
             // Passed to imageLoader(), allows handling of img dynamically
            priority
          />
          {/* Next <Image/> styles under the hood */}
          {/* <img
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
          /> */}
        </li>
      ))}
    </ul>
  );
}
