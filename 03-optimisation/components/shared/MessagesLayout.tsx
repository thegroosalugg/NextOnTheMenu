import NavLink from '../header/NavLink';
import styles from './MessagesLayout.module.css';

export default function MessagesLayout({
    header,
     count,
     navTo,
  children,
}: {
    header: string;
     count: number;
     navTo: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles['messages-layout']}>
      <h1>{header}</h1>
      <p>
        <strong className='highlight'>{count}</strong> messages found
      </p>
      <nav>
        <NavLink href={`${navTo}/new`}>New</NavLink>
        <NavLink href={navTo}>All</NavLink>
      </nav>
      <hr />
      {children}
    </div>
  );
}
