import styles from './page.module.css';

export default async function MessagesPage() {
  const response = await fetch('http://localhost:8080/messages', {
    // headers: { 'X-ID': 'page' },
    next: { revalidate: 5 }
  });
  const msgs: { id: string; text: string }[] = await response.json();

  if (msgs.length === 0) {
    return <p>No messages found</p>;
  }

  return (
    <ol className={styles['messages']}>
      {msgs.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ol>
  );
}
