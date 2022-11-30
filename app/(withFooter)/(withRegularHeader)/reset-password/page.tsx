"use client";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import HCaptcha from "@hcaptcha/react-hcaptcha";

import LoginInput from "../../../../components/inputs/LoginInput";
import supabaseBrowser from "../../../../util/supabase-browser";

import styles from "../../../../styles/LoginRegister.module.css";

const contactValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("邮箱不能为空")
    .email("输入值不是有效的邮箱地址"),
});

export default function ResetPassword() {
  const [SignInError, setSignInError] = useState("");

  const router = useRouter();

  const captchaRef = useRef<HCaptcha | null>(null);
  const [captchaToken, setCaptchaToken] = useState("");

  return (
    <main>
      <h1 className={styles.title}>重置密码</h1>

      <div className={styles.container}>
        {/* form */}
        <Formik
          initialValues={{ email: "" }}
          validationSchema={contactValidationSchema}
          onSubmit={(value, helper) => {
            setSignInError("");
            supabaseBrowser.auth
              .resetPasswordForEmail(value.email, {
                captchaToken: captchaToken,
              })
              .then(({ data, error }) => {
                if (error) {
                  setSignInError(error.message);
                } else router.push("/");
                helper.setSubmitting(false);
                const captcha = captchaRef.current;
                if (captcha) {
                  captcha.resetCaptcha();
                }
              });
          }}
        >
          {(formik) => (
            <form
              autoComplete="on"
              onSubmit={formik.handleSubmit}
              className={styles.form}
            >
              <LoginInput
                formik={formik}
                id={"email"}
                label={"邮箱"}
                inputType={"email"}
              />

              <p className={styles.formError}>{SignInError}</p>

              <HCaptcha
                ref={captchaRef}
                sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
                onVerify={(token) => {
                  setCaptchaToken(token);
                }}
              ></HCaptcha>
              <button
                className={styles.button}
                type={"submit"}
                disabled={formik.isSubmitting}
              >
                发送重置链接
              </button>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
}
