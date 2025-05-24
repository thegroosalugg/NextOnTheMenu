import styles from './layout.module.css';

export default async function MessagesLayout({ children }: { children: React.ReactNode }) {
  const response = await fetch('http://localhost:8080/messages', {
    // headers: { 'X-ID': 'layout' }, // *1 requests with the identical config will be memoized
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
