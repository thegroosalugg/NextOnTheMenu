import NavLink from '@/components/header/NavLink';
import styles from './layout.module.css';

export default async function MessagesLayout({ children }: { children: React.ReactNode }) {
  const response = await fetch('http://localhost:8080/messages', {
    // headers: { 'X-ID': 'layout' }, // *1 requests with the identical config will be memoized
  });
  const msgs = await response.json();

  return (
    <div className={styles['messages-layout']}>
      <h1>Fetching from an API</h1>
      <p>
        <strong className='highlight'>{msgs.length}</strong> messages found
      </p>
      <nav>
        <NavLink href='/api/new'>New</NavLink>
        <NavLink href='/api'>All</NavLink>
      </nav>
      <hr />
      {children}
    </div>
  );
}
