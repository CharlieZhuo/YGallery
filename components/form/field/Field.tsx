"use client";
import Input, { InputPropType } from "../input/Input";
import InputError from "../inputError/InputError";
import Label from "../label/Label";

import styles from "./Field.module.scss";

export interface FieldProp extends InputPropType {
  labelText: string;
  errorMessage?: string;
  hasError: boolean;
}

export default function Field({
  labelText,
  errorMessage,
  hasError,
  ...inputProp
}: FieldProp) {
  return (
    <section className={styles.container}>
      <Label id={inputProp.id}>{labelText}</Label>
      <Input {...inputProp} hasError={hasError}></Input>
      <InputError>{hasError ? errorMessage : ""}</InputError>
    </section>
  );
}
