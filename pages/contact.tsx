import CommonLayout from "../components/commonLayout";
import styles from "../styles/Contact.module.css";
import Image from "next/image";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

import * as api from "../lib/strapiLib";

export interface contactMessage {
  name: string;
  email: string;
  message: string;
}

type resultType =
  | {
      status: 200;
      data: api.FeedbackResponse;
    }
  | {
      status: 400;
      data: Error;
    }
  | {
      status: 401;
      data: Error;
    }
  | {
      status: 403;
      data: Error;
    }
  | {
      status: 404;
      data: Error;
    }
  | {
      status: 500;
      data: Error;
    }
  | null;

export const contactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("称呼不能为空")
    .min(2, "称呼长度至少2个字符")
    .max(20, "称呼长度最多20个字符"),
  email: Yup.string()
    .required("邮箱不能为空")
    .email("输入值不是有效的邮箱地址"),
  message: Yup.string()
    .required("消息不能为空")
    .min(10, "消息长度至少10个字符")
    .max(400, "消息长度最多400个字符"),
});

const form = (
  <Formik
    initialValues={{ name: "", email: "", message: "" }}
    validationSchema={contactValidationSchema}
    onSubmit={(value, helper) => {
      fetch("./api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      })
        .then((r) => r.json())
        .then((j) => console.log(j))
        .catch((e) => console.log(`some error happened:${JSON.stringify(e)}`));
    }}
  >
    {(formik) => (
      <form
        autoComplete="on"
        onSubmit={formik.handleSubmit}
        className={styles.form}
      >
        <section>
          <label htmlFor="name">您的称呼</label>
          <input
            type="text"
            id="name"
            className={
              formik.errors.name && formik.touched.name
                ? styles.inputWithError
                : ""
            }
            {...formik.getFieldProps("name")}
          ></input>
          <ErrorMessage name="name">
            {(msg) => <p className={styles.errorMessage}>{msg}</p>}
          </ErrorMessage>
        </section>
        <section>
          <label htmlFor="email">您的电子邮箱</label>
          <input
            type="email"
            id="email"
            className={
              formik.errors.email && formik.touched.email
                ? styles.inputWithError
                : ""
            }
            {...formik.getFieldProps("email")}
          ></input>
          <ErrorMessage name="email">
            {(msg) => <p className={styles.errorMessage}>{msg}</p>}
          </ErrorMessage>
        </section>
        <section>
          <label htmlFor="message">您的留言</label>
          <textarea
            id="message"
            cols={60}
            autoComplete={"off"}
            rows={10}
            className={
              formik.errors.message && formik.touched.message
                ? styles.inputWithError
                : ""
            }
            {...formik.getFieldProps("message")}
          ></textarea>
          <ErrorMessage name="message">
            {(msg) => <p className={styles.errorMessage}>{msg}</p>}
          </ErrorMessage>
        </section>
        <button type={"submit"} disabled={formik.isSubmitting}>
          提交
        </button>
      </form>
    )}
  </Formik>
);
export default function Contact() {
  const [result, setResult] = useState<resultType>(null);
  return (
    <main>
      <h1 className={styles.title}>想要联系？</h1>
      <p className={styles.subtitle}>我乐意收到您的反馈</p>
      <div className={styles.container}>
        {form}
        {/* <Image src={""}></Image> */}
      </div>
    </main>
  );
}
Contact.getLayout = (page: any) => <CommonLayout>{page} </CommonLayout>;
