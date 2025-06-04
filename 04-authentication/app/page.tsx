import styles from "./page.module.css";
import Input from "@/components/form/Input";
import Submit from "@/components/form/Submit";
import Svg from "@/components/ui/icon/Svg";

export default function Home() {
  return (
    <form className={styles['home']}>
      <header>
        <h2>Login</h2>
        <Svg icon='Key' size={40} light />
      </header>
      <Input control='email'>Your Email</Input>
      <Input control='password'>Your Password</Input>
      <Submit />
    </form>
  );
}
