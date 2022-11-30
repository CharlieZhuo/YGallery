import classNames from "classnames";
import { ErrorMessage, FormikProps } from "formik";
import { HTMLInputTypeAttribute } from "react";

import styles from "../../styles/LoginRegister.module.css";

export default function LoginInput({
  label,
  id,
  formik,
  inputType,
}: {
  label: string;
  id: string;
  formik: FormikProps<any>;
  inputType?: HTMLInputTypeAttribute;
}) {
  return (
    <section className={styles.section}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        type={inputType}
        id={id}
        className={classNames(styles.input, {
          [styles.inputWithError]: formik.errors[id] && formik.touched[id],
        })}
        disabled={formik.isSubmitting}
        {...formik.getFieldProps(id)}
      ></input>
      <ErrorMessage name={id}>
        {(msg) => <p className={styles.errorMessage}>{msg}</p>}
      </ErrorMessage>
    </section>
  );
}
