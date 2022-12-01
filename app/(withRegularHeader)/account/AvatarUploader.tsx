"use client";

import { useDropzone } from "react-dropzone";
import { useEffect, useRef, useState } from "react";

import { User } from "@supabase/supabase-js";

import styles from "./AvatarUploader.module.css";
import supabaseBrowser from "../../../util/supabase-browser";
import { useRouter } from "next/navigation";

export default function AvatarUploader({ user }: { user: User }) {
  // const [AcceptNewImage, setAcceptNewImage] = useState(true);

  const router = useRouter();

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    noDragEventsBubbling: true,
    accept: { "image/*": [".jpeg", ".png"] },
    maxFiles: 1,
    // disabled: !AcceptNewImage,
  });

  const previewElement = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const latestFile = acceptedFiles.at(-1);
    if (latestFile) {
      const url = URL.createObjectURL(latestFile);
      const imgElement = previewElement.current;
      if (imgElement) {
        imgElement.onload = (e) => {
          // imgElement.style.aspectRatio = `${imgElement.naturalWidth} / ${imgElement.naturalHeight}`;
          URL.revokeObjectURL(imgElement.src);
        };
        imgElement.src = url;
      }
    }
  }, [acceptedFiles]);

  const onCancel = () => {
    const imgElement = previewElement.current;
    if (imgElement) {
      imgElement.src = "";
    }
  };
  const [Errors, setErrors] = useState("");
  const [Submitting, setSubmitting] = useState(false);

  const onConfirm = () => {
    setSubmitting(true);
    const imgElement = previewElement.current;
    if (imgElement && imgElement.src !== "") {
      const latestFile = acceptedFiles.at(-1);
      if (latestFile) {
        supabaseBrowser.storage
          .from("avatars")
          .upload(`${user.id}/avatar`, latestFile, {
            cacheControl: "3600",
            upsert: false,
          })
          .then(({ data, error }) => {
            if (error) {
              setErrors(error.message);
              console.error(`提交头像时发生了错误`);
              console.dir(error);
            } else {
              router.refresh();
            }
          });
      }
    }
  };

  return (
    <>
      <div
        {...getRootProps({ className: styles.container })}
        style={{
          height: `128px`,
        }}
      >
        <input {...getInputProps()} />
        <p>拖放图片至此或单击选择文件</p>
      </div>
      {acceptedFiles.length > 0 && (
        <img className={styles.preview} ref={previewElement} />
      )}
      <button onClick={onCancel}>取消</button>
      <button onClick={onConfirm} disabled={Submitting}>
        提交
      </button>
      <p>{Errors}</p>
    </>
  );
}
