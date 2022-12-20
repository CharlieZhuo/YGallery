import styles from "./Label.module.scss";

export interface LabelProp {
  id: string;
  children: string;
}

export default function Label({ id, children }: LabelProp) {
  return (
    <label className={styles.label} htmlFor={id}>
      {children}
    </label>
  );
}
