import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import NavLink from './NavLink';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <Image src='/logo.png' alt='a newspaper' width='30' height='28' />
        <h1>The Looking Glass</h1>
      </Link>
      <nav>
        <NavLink href='/news'>News</NavLink>
      </nav>
    </header>
  );
}
