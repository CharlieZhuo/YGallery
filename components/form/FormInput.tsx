"use client";
import classNames from "classnames";
import { ErrorMessage, FormikProps } from "formik";
import { HTMLInputTypeAttribute } from "react";

import styles from "./FromInput.module.css";

/**
 * Type:type parameter of FormikProps
 * Key:formik field key
 *
 * formik:formik object
 * id:formik field key.Should be present as property name in initialValues.
 * label:text for <label> element.
 * inputType:type attribute for <input> element.
 * requiredMard:If true,label text will be followed by '*'.
 * 
 * Example:
 *  <Formik
          initialValues={{ email: "", password: "" }}>
            {(formik) => (
            <form
              onSubmit={formik.handleSubmit}
            >
              <FormInput
                formik={formik}
                id={"email"}
                label={"邮箱"}
                inputType={"email"}
              />
            </form>)}
    </formik>
 */
export interface FormInputPropType<Type, Key extends keyof Type & string> {
  formik: FormikProps<Type>;
  id: Key;
  label: string;
  inputType?: HTMLInputTypeAttribute;
  requiredMark?: boolean;
}

/**
 * Input element for formik form.
 */
export default function FormInput<Type, Key extends keyof Type & string>({
  formik,
  id,
  label,
  inputType,
  requiredMark,
}: FormInputPropType<Type, Key>) {
  return (
    <section className={styles.section}>
      <label className={styles.label} htmlFor={id}>
        {`${label}${requiredMark === true ? "*" : ""}`}
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
