import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <Image src='/icon.png' alt='a buffet' width='40' height='40' />
        <h1>FoodHouse</h1>
      </Link>
      <nav>
        <Link href='/meals'>Meals</Link>
        <Link href='/meals/share'>Share</Link>
        <Link href='/community'>Community</Link>
      </nav>
    </header>
  );
}
