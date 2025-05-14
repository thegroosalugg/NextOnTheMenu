import styles from './page.module.css';
import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

const images = [
  { src: mealIcon, alt: 'A delicious meal', text: 'Share & discover recipes' },
  {
     src: communityIcon,
     alt: 'A crowd of people, cooking',
    text: 'Find new friends & like-minded people',
  },
  {
     src: eventsIcon,
     alt: 'A crowd of people at a cooking event',
    text: 'Participate in exclusive events',
  },
];

export default function Community() {
  return (
    <div className={styles['community']}>
      <header>
        <h1>
          One shared passion: <span className='highlight'>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main>
        <h2>Community Perks</h2>
        <ul>
          {images.map(({ src, alt, text }) => (
            <li key={JSON.stringify(src)}>
              <Image src={src} alt={alt} />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
