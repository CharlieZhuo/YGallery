import { Formik } from "formik";
import * as Yup from "yup";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

import styles from "../../styles/LoginRegister.module.css";
import supabaseBrowser from "../../util/supabase-browser";
import FormInput from "../../components/form/FormInput";

const contactValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required("邮箱不能为空")
    .email("输入值不是有效的邮箱地址"),
  password: Yup.string().required("请输入密码"),
});

export default function PasswordLogin() {
  const router = useRouter();

  const [SignInError, setSignInError] = useState("");

  const captchaRef = useRef<HCaptcha | null>(null);
  const [captchaToken, setCaptchaToken] = useState("");

  return (
    <main>
      <h1 className={styles.title}>欢迎</h1>

      <div className={styles.container}>
        {/* form */}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={contactValidationSchema}
          onSubmit={(value, helper) => {
            setSignInError("");
            supabaseBrowser.auth
              .signInWithPassword({
                email: value.email,
                password: value.password,
                options: {
                  captchaToken: captchaToken,
                },
              })
              .then(({ data, error }) => {
                if (error) {
                  setSignInError(error.message);
                } else {
                  router.push("/");
                }
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
              <FormInput
                formik={formik}
                id={"email"}
                label={"邮箱"}
                inputType={"email"}
              />
              <FormInput
                formik={formik}
                id={"password"}
                label={"密码"}
                inputType={"password"}
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
                登录
              </button>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
}
