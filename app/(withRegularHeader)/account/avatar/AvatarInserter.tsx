"use client";
import { useEffect } from "react";
import { useDropzone } from "react-dropzone";

import styles from "./AvatarUploader.module.css";

export default function AvatarInserter({
  onNewInsert,
}: {
  onNewInsert: (newInsert: File) => void;
}) {
  const { acceptedFiles, getRootProps, getInputProps, fileRejections } =
    useDropzone({
      noDragEventsBubbling: true,
      accept: { "image/*": [".jpeg", ".png"] },
      maxFiles: 1,

      // disabled: !AcceptNewImage,
    });

  useEffect(() => {
    const lastFile = acceptedFiles.at(-1);
    if (lastFile) onNewInsert(lastFile);
  }, [acceptedFiles]);
  return (
    <div {...getRootProps({ className: styles.upload })}>
      <input {...getInputProps()} />
      <p>拖放图片至此或单击选择文件</p>
    </div>
  );
}
