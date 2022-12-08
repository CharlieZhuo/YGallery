"use client";

import { MutableRefObject, useEffect, useRef, useState } from "react";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

import supabaseBrowser from "../../../../util/supabase-browser";
import AvatarEditor from "./AvatarEditor";
import AvatarInserter from "./AvatarInserter";

import styles from "./AvatarUploader.module.css";

export default function AvatarUploader({ user }: { user: User }) {
  const router = useRouter();

  const previewElement = useRef<HTMLImageElement | null>(null);

  const [FileToUpload, setFileToUpload] = useState<Blob | null>(null);

  const FileURL = useURL(FileToUpload);

  const [Errors, setErrors] = useState("");
  const [Submitting, setSubmitting] = useState(false);

  const onCancel = () => {
    setFileToUpload(null);
  };
  const onConfirm = () => {
    setSubmitting(true);
    const imgElement = previewElement.current;
    if (imgElement && imgElement.src !== "") {
      if (FileToUpload) {
        supabaseBrowser.storage
          .from("avatars")
          .upload(`${user.id}/avatar`, FileToUpload, {
            cacheControl: "3600",
            upsert: true,
          })
          .then(({ data, error }) => {
            if (error) {
              setErrors(error.message);
              console.error(`提交头像时发生了错误`);
              console.dir(error);
              setSubmitting(false);
            } else {
              router.refresh();
              router.push("/account");
            }
          });
      }
    }
  };

  const [Editing, setEditing] = useState(false);

  usePreview(FileURL, previewElement, Editing);

  return (
    <>
      {!FileToUpload ? (
        <AvatarInserter
          onNewInsert={(file) => {
            setFileToUpload(file);
          }}
        ></AvatarInserter>
      ) : Editing ? (
        <AvatarEditor
          url={FileURL}
          onComplete={(newFile) => {
            setFileToUpload(newFile);
            setEditing(false);
          }}
          onCancel={() => {
            setEditing(false);
          }}
        ></AvatarEditor>
      ) : (
        <div className={styles.flex}>
          <div className={styles.previewContainer}>
            <img className={styles.preview} ref={previewElement} />
          </div>
          <div className={styles.buttons}>
            <button onClick={() => setEditing(true)}>编辑</button>
            <button onClick={onCancel}>清除</button>
            <button onClick={onConfirm} disabled={Submitting}>
              上传
            </button>
          </div>
        </div>
      )}

      <p>{Errors}</p>
    </>
  );
}

function usePreview(
  url: string | null,
  imageElementRef: MutableRefObject<HTMLImageElement | null>,
  ...otherDependency: any[]
) {
  useEffect(() => {
    if (url) {
      const imgElement = imageElementRef.current;
      if (imgElement) {
        imgElement.src = url;
      }
    }
  }, [url, ...otherDependency]);
}

function useURL(blob: Blob | null) {
  const [GeneratedURL, setGeneratedURL] = useState<string | null>(null);
  useEffect(() => {
    if (blob) {
      const url = URL.createObjectURL(blob);
      setGeneratedURL(url);
      return () => {
        //clean up last file's url before generate new file's url
        if (GeneratedURL) URL.revokeObjectURL(GeneratedURL);
      };
    }
  }, [blob]);
  return GeneratedURL;
}
