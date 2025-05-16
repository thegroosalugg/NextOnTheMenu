import Input from '@/components/form/Input';
import styles from './page.module.css';
import ImagePicker from '@/components/form/ImagePicker';

export default function MealsShare() {
  return (
    <div className={styles['meals-share']}>
      <header>
        <h1>
          Share your <span className='highlight'>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <form className={styles['form']}>
        <ImagePicker />
        <div className={styles['row']}>
          <Input control='name'>Your name</Input>
          <Input control='email'>Your email</Input>
        </div>
        <Input control='title'>Title</Input>
        <Input control='summary'>Short Summary</Input>
        <Input control='instructions' rows={10}>
          Instructions
        </Input>
        <button>Share Meal</button>
      </form>
    </div>
  );
}
