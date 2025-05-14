import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import NavLink from './NavLink';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <Image src='/logo.png' alt='a buffet' width='40' height='40' />
        <h1>FoodHouse</h1>
      </Link>
      <nav>
        <NavLink href='/meals'>Meals</NavLink>
        <NavLink href='/meals/share'>Share</NavLink>
        <NavLink href='/community'>Community</NavLink>
      </nav>
    </header>
  );
}
