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
  let classes = 'transition-all hover:text-shadow-md text-shadow-sky-500';
  if (path.startsWith(href) && href.length > 1) classes += ' text-sky-600';

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
