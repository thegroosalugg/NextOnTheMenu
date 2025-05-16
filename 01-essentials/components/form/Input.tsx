import styles from './Input.module.css';

export default function Input({
   control,
      rows,
      type = 'text',
  children,
}: {
   control: string;
     rows?: number;
     type?: 'text' | 'number' | 'email' | 'password';
  children: React.ReactNode;
}) {
  let input = <input type={type} id={control} name={control} />;

  if (rows) {
    input = <textarea id={control} name={control} rows={rows} />;
  }

  return (
    <p className={styles['control']}>
      <label htmlFor={control}>{children}</label>
      {input}
    </p>
  );
}
