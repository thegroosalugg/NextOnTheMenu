import Image from 'next/image';
import styles from './Header.module.css';
import NavLink from './NavLink';

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink href='/'>
        <Image src='/icon.png' alt='a server' width={25} height={25} />
        <span>Cache</span>
      </NavLink>
      <nav>
        <NavLink href='/api'>API</NavLink>
        <NavLink href='/db'>DB</NavLink>
        <NavLink href='/actions'>Actions</NavLink>
      </nav>
    </header>
  );
}
