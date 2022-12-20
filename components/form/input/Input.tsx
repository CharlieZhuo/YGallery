"use client";
import classNames from "classnames";
import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from "react";

import styles from "./Input.module.scss";

export interface InputPropType {
  id: string;
  hasError: boolean;
  isDisabled: boolean;
  inputType?: HTMLInputTypeAttribute;

  /** Value of the field */
  value: string | number | readonly string[] | undefined;
  /** Name of the field */
  name: string;
  /** Change event handler */
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  /** Blur event handler */
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
}

export default function Input({
  id,
  inputType,
  hasError,
  isDisabled,
  ...rest
}: InputPropType) {
  return (
    <input
      type={inputType}
      id={id}
      className={classNames(styles.input, {
        [styles.inputWithError]: hasError,
      })}
      disabled={isDisabled}
      {...rest}
    ></input>
  );
}
