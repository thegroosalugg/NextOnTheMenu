import styles from './Loader.module.css';

export default function Loader({ size }: { size?: 'xs' | 'sm' }) {
  let classes = styles['loader'];
  if (size) classes += ` ${styles[size]}`;

  return (
    <div className={classes}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
