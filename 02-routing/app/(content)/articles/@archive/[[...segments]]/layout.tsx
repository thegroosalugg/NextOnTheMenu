import News from '@/models/News';
import styles from './layout.module.css';
import NavLink from '@/components/header/NavLink';

const getYears = News.getYears(); // request hoisted, before component loads

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const years = await getYears;

  return (
    <div className={styles['articles-archive']}>
      <h1>List of Archives</h1>
      <nav>
        {years.map(({ year }) => (
          <NavLink key={year} href={`/articles/${year}`}>
            {year}
          </NavLink>
        ))}
      </nav>
      <main>{children}</main>
    </div>
  );
}
