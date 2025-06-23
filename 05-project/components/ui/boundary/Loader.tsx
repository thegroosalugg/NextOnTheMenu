import styles from "./Loader.module.css";

interface LoaderProps {
   size?: "xs" | "sm";
  color?: "bg" | "white";
}

export default function Loader({ size, color }: LoaderProps) {
  let classes = styles["loader"];
  if (size)  classes += ` ${styles[size]}`;
  if (color) classes += ` ${styles[color]}`;

  return (
    <div className={classes}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
