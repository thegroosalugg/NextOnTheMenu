import styles from './Header.module.css';
import Svg from '../ui/icon/Svg';
import NavLink from './NavLink';
import { logout } from '@/lib/actions';

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink href='/'>
        <Svg icon='Shield' />
        <span>Auth</span>
      </NavLink>
      <nav>
        <NavLink href='/training'>Training</NavLink>
        <form action={logout}>
          <button>Logout</button>
        </form>
      </nav>
    </header>
  );
}
