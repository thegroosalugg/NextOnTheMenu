import Image from 'next/image';
import styles from './ImageBoxed.module.css';

interface ImageProps {
        src: string;
        alt: string;
  maxWidth?: number | '100%';
    height?: number;
     round?: number;
}

export default function ImageBoxed({
      src,
      alt,
  maxWidth = '100%',
    height = 240,
     round = 0,
}: ImageProps) {
  return (
    <div className={styles['image-boxed']} style={{ maxWidth, height }}>
      <Image
        {...{ src, alt }}
            fill
           sizes='100%'
           style={{ borderRadius: round }}
        priority
      />
    </div>
  );
}
