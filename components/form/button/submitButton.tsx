import styles from "./SubmitButtonProp.module.scss";

export interface SubmitButtonProp
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export default function SubmitButton({ children, ...rest }: SubmitButtonProp) {
  return (
    <button className={styles.button} {...rest}>
      <div className={styles.overlay}>{children}</div>
    </button>
  );
}
