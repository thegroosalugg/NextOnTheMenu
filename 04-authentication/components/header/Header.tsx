import Svg from '../ui/icon/Svg';
import styles from './Header.module.css';
import NavLink from './NavLink';

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink href='/'>
        <Svg icon='Shield' />
        <span>Auth</span>
      </NavLink>
      <nav>
        <NavLink href='/training'>Training</NavLink>
      </nav>
    </header>
  );
}
