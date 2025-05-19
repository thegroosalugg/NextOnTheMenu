import styles from './List.module.css';

export default function List<T>({
     items,
       row,
     keyFn,
  children,
}: {
     items: T[];
      row?: boolean;
     keyFn: (item: T) => string;
  children: (item: T) => React.ReactNode;
}) {
  let classes = styles['list'];
  if (row) classes += ` ${styles['row']}`;
  
  return (
    <ul className={classes}>
      {items.map((item) => (
        <li key={keyFn(item)}>
          {children(item)}
        </li>
      ))}
    </ul>
  );
}
