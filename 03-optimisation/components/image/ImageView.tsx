'use client';
import Image from 'next/image';
import styles from './ImageView.module.css';
import { useEffect, useState } from 'react';

interface ImageProps {
        src: string;
        alt: string;
  priority?: boolean;
}

export default function ImageView({ src, alt, priority }: ImageProps) {
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    const handleResize = () => setWidth(screen.width - 24); // minus padding on both sides
    handleResize();

    window.addEventListener('resize', handleResize); // allow resize on orientation flip
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles['image-view']}>
      {width && (
        <Image
          { ...{ priority, src, alt }}
          width={0} // skips lazy sizing
         height={0}
          sizes='100vw' // tells next how big to make image
          style={{ width, height: 'auto' }}
        />
      )}
    </div>
  );
}
