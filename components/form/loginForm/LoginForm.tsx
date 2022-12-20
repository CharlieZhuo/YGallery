"use client";
import { Formik, FormikHelpers } from "formik";
import styles from "../Form.module.scss";
import * as Yup from "yup";
import FieldInFormik from "../fieldInFormik/FieldInFormik";
import SubmitButton from "../button/submitButton";

const contactValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("邮箱不能为空")
    .email("输入值不是有效的邮箱地址"),
  password: Yup.string().required("请输入密码"),
});

export default function LoginForm({
  onSubmit,
}: {
  onSubmit: (
    values: {
      email: string;
      password: string;
    },
    formikHelpers: FormikHelpers<{
      email: string;
      password: string;
    }>
  ) => void | Promise<any>;
}) {
  return (
    <form className={styles.form}>
      <h1 className={styles.formTitle}>欢迎登陆</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={contactValidationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <>
            <FieldInFormik
              formik={formik}
              id="email"
              label="Email"
              inputType="email"
            ></FieldInFormik>
            <FieldInFormik
              formik={formik}
              id="password"
              label="Password"
              inputType="password"
            ></FieldInFormik>

            {/* <HCaptcha
              ref={captchaRef}
              sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
              onVerify={(token) => {
                setCaptchaToken(token);
              }}
            ></HCaptcha> */}
            <SubmitButton
              type={"submit"}
              disabled={formik.isSubmitting}
              onClick={(e) => {
                e.preventDefault();
                formik.submitForm();
              }}
            >
              Log in
            </SubmitButton>
          </>
        )}
      </Formik>
    </form>
  );
}
