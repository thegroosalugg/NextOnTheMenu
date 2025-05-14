'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({
      href,
  children,
}: {
      href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
  const isActive =
    path === href ||
    (path.startsWith('/meals/') && path !== '/meals/share' && href === '/meals')
      ? 'highlight'
      : '';

  return (
    <Link href={href} className={isActive}>
      {children}
    </Link>
  );
}
