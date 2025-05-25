import NavLink from '@/components/header/NavLink';
import styles from './layout.module.css';
import { getMessages } from '@/lib/messages';

export default async function MessagesLayout({ children }: { children: React.ReactNode }) {
  const msgs = await getMessages() as { id: string; text: string }[];

  return (
    <div className={styles['messages-layout']}>
      <h1>Using various Form hooks and actions</h1>
      <p>
        <strong className='highlight'>{msgs.length}</strong> messages found
      </p>
      <nav>
        <NavLink href='/actions/new'>New</NavLink>
        <NavLink href='/actions'>All</NavLink>
      </nav>
      <hr />
      {children}
    </div>
  );
}
