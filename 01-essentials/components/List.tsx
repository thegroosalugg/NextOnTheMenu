import React from 'react';
import styles from './List.module.css';

export default function List<T>({
     items,
     keyFn,
  children,
}: {
     items: T[];
     keyFn: (item: T) => string;
  children: (item: T) => React.ReactNode;
}) {
  return (
    <ul className={styles['list']}>
      {items.map((item) => (
        <li key={keyFn(item)}>
          {children(item)}
        </li>
      ))}
    </ul>
  );
}
