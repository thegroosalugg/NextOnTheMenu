import Svg from '../ui/icon/Svg';
import NavLink from './NavLink';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex items-center justify-between gap-1 overflow-x-scroll p-2'>
      <nav className='flex items-center gap-1 font-mono'>
        <Link href='/' className='flex items-center font-sans'>
          <Svg icon='Shield' />
          <span>Shopify</span>
        </Link>
        <NavLink href='/'>Link</NavLink>
        <NavLink href='/'>Link</NavLink>
        <NavLink href='/'>Link</NavLink>
        <NavLink href='/'>Link</NavLink>
      </nav>
      <button>
        Cart
      </button>
    </header>
  );
}
