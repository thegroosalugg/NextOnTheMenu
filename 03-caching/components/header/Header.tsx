import Link from 'next/link';
import styles from './Header.module.css';
import NavLink from './NavLink';

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink href='/'>Caching</NavLink>
      <nav>
        <NavLink href='/'>Link 1</NavLink>
        <NavLink href='/'>Link 2</NavLink>
      </nav>
    </header>
  );
}
