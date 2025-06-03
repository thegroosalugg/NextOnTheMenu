import Image from 'next/image';
import styles from './ImageBoxed.module.css';

interface ImageProps {
        src: string;
        alt: string;
  maxWidth?: number | '100%';
    height?: number;
   rounded?: boolean;
}

export default function ImageBoxed({
      src,
      alt,
  maxWidth = '100%',
    height = 240,
   rounded,
}: ImageProps) {
  let classes = styles['image-boxed'];
  if (rounded) classes += ` ${styles['rounded']}`;

  return (
    <div className={classes} style={{ maxWidth, height }}>
      <Image {...{ src, alt }} fill sizes='100%' priority />
    </div>
  );
}
