import Input from '../form/Input';
import Submit from '../form/Submit';
import styles from './MessageForm.module.css';

export default function MessageForm({
  action,
  errors = {},
}: {
   action: ((formData: FormData) => Promise<void>) | ((payload: FormData) => void);
  errors?: Record<string, string>
}) {
  return (
    <form className={styles['message-form']} action={action}>
      <Input control='message' rows={4} errors={errors}>
        Your Message
      </Input>
      <Submit />
    </form>
  );
}
