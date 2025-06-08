import Svg from '../ui/icon/Svg';
import NavLink from './NavLink';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex items-center justify-between gap-1 overflow-x-scroll p-2'>
      <nav className='flex items-center gap-2 font-mono'>
        {/* [&>ul_li:first-child] CSS selector to Tailwind example */}
        <Link href='/' className='flex items-center font-sans'>
          <Svg icon='ShoppingBag' />
          <span className='-ml-0.25 text-accent'>Shopify</span>
        </Link>
        <NavLink href='/'>Link</NavLink>
        <NavLink href='/'>Link</NavLink>
        <NavLink href='/'>Link</NavLink>
        <NavLink href='/'>Link</NavLink>
      </nav>
      <button className='flex items-center text-accent'>
        Cart
        <Svg icon='ShoppingCart' />
      </button>
    </header>
  );
}
