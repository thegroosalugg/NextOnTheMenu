import Image from 'next/image';
import styles from './Header.module.css';
import NavLink from './NavLink';

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink href='/'>
        <Image src='/icon.png' alt='a server' width={25} height={25} />
        <span>Optimisation</span>
      </NavLink>
      <nav>
        <NavLink href='/cache-api'>API</NavLink>
        <NavLink href='/cache-db'>DB</NavLink>
        <NavLink href='/actions'>Actions</NavLink>
        <NavLink href='/images'>Images</NavLink>
      </nav>
    </header>
  );
}
