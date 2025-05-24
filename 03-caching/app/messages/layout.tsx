import styles from './layout.module.css';

// default next14 cache: 'force-cache', next15 cache: 'no-store'
export default async function MessagesLayout({ children }: { children: React.ReactNode }) {
  const response = await fetch('http://localhost:8080/messages', {
    // headers: { 'X-ID': 'layout' }, // requests with the identical config will be memoized
    next: { revalidate: 5 } // caches request and only re-fires every 5s
  });
  const msgs = await response.json();

  return (
    <div className={styles['message-layout']}>
      <h1>Important Messages</h1>
      <p>
        <span className='highlight'>{msgs.length}</span> messages found
      </p>
      <hr />
      {children}
    </div>
  );
}
