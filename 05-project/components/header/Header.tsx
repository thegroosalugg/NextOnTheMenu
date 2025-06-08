import Svg from '../ui/icon/Svg';
import NavLink from './NavLink';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex items-center justify-between gap-1 overflow-x-scroll p-2'>
      <nav className='flex items-center gap-2 font-mono'>
        {/* [&>ul_li:first-child] CSS selector to Tailwind example */}
        <Link href='/' className='flex items-center font-sans [&_svg]:mb-1'>
          <Svg icon='ShoppingBag' size={20} />
          <span className='-ml-0.5 text-accent'>Shopify</span>
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
