import { FormError } from './form.types';
import styles from './Input.module.css';

export default function Input({
   control,
      rows,
      type = 'text',
    errors = {},
  children,
}: {
   control: string;
     rows?: number;
     type?: 'text' | 'number' | 'email' | 'password';
   errors?: FormError;
  children: React.ReactNode;
}) {
  const error = errors[control];
  const classes = `${styles['control']} ${error ? styles['error'] : ''}`;
  let input = <input type={type} id={control} name={control} />;

  if (rows) {
    input = <textarea id={control} name={control} rows={rows} />;
  }

  return (
    <p className={classes}>
      <label htmlFor={control}>{children} {error && error}</label>
      {input}
    </p>
  );
}
