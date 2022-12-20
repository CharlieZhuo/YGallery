"use client";
import styles from "./InputError.module.scss";
export default function InputError({ children }: { children?: string }) {
  return <p className={styles.errorMessage}>{children}</p>;
}
