'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import burgerImg from '@/assets/meals/burger.jpg';
import curryImg from '@/assets/meals/curry.jpg';
import dumplingsImg from '@/assets/meals/dumplings.jpg';
import macncheeseImg from '@/assets/meals/macncheese.jpg';
import pizzaImg from '@/assets/meals/pizza.jpg';
import schnitzelImg from '@/assets/meals/schnitzel.jpg';
import tomatoSaladImg from '@/assets/meals/tomato-salad.jpg';
import styles from './Slideshow.module.css';

const images = [
  { src: burgerImg,      alt: 'A delicious, juicy burger' },
  { src: curryImg,       alt: 'A delicious, spicy curry'  },
  { src: dumplingsImg,   alt: 'Steamed dumplings'         },
  { src: macncheeseImg,  alt: 'Mac and cheese'            },
  { src: pizzaImg,       alt: 'A delicious pizza'         },
  { src: schnitzelImg,   alt: 'A delicious schnitzel'     },
  { src: tomatoSaladImg, alt: 'A delicious tomato salad'  },
];

export default function Slideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          className={index === activeIndex ? styles.active : ''}
        />
      ))}
    </div>
  );
}
