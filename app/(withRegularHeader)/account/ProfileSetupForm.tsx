"use client";
import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import supabaseBrowser from "../../../util/supabase-browser";

import { Database } from "../../../types/supabase";

import styles from "../../../styles/loginRegister.module.css";
import LoginInput from "../../../components/inputs/LoginInput";
import { useRouter } from "next/navigation";

const ValidationSchema = Yup.object().shape({
  username: Yup.string().required("用户名不能为空"),
  description: Yup.string().min(3, "请输入三个字以上"),
  website: Yup.string().url("必须为带http://的有效url"),
});

const initialValues: Omit<
  Database["public"]["Tables"]["Profiles"]["Insert"],
  "id" | "updated_at"
> = {
  username: "",
  description: "",
  website: "",
};

export default function ProfileSetupForm({ userId }: { userId: string }) {
  const [responseError, setResponseError] = useState("");

  const router = useRouter();

  return (
    <div>
      <h2>欢迎，请介绍一下你自己吧</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={(value, helper) => {
          setResponseError("");
          supabaseBrowser
            .from("Profiles")
            .upsert({
              id: userId,
              username: value.username,
              description: value.description,
              website: value.website,
            })
            .then(({ error }) => {
              if (error) {
                setResponseError(error.message);
                console.error(`提交用户介绍时遇到了错误:`);
                console.dir(error);
                helper.setSubmitting(false);
              } else {
                router.refresh();
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
              id={"username"}
              label={"用户名"}
              inputType={"text"}
              requiredMark={true}
            />
            <LoginInput
              formik={formik}
              id={"description"}
              label={"介绍"}
              inputType={"text"}
            />
            <LoginInput
              formik={formik}
              id={"website"}
              label={"个人网站"}
              inputType={"url"}
            />

            <p className={styles.formError}>{responseError}</p>

            <button
              className={styles.button}
              type={"submit"}
              disabled={formik.isSubmitting}
            >
              确认
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
