"use client";

import { useDropzone } from "react-dropzone";
import { useEffect, useRef } from "react";

import styles from "./AvatarUploader.module.css";

export default function AvatarUploader() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    noDragEventsBubbling: true,
    accept: { "image/*": [".jpeg", ".png"] },
    maxFiles: 1,
  });

  const previewElement = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const firstFile = acceptedFiles.at(0);
    if (firstFile) {
      const url = URL.createObjectURL(firstFile);
      const imgElement = previewElement.current;
      if (imgElement) {
        imgElement.onload = (e) => {
          URL.revokeObjectURL(imgElement.src);
        };
        imgElement.src = url;
      }
    }
  }, [acceptedFiles]);

  //   const { data, error } = await supabaseBrowser.storage
  //     .from("avatars")
  //     .upload("public/avatar1.png", avatarFile, {
  //       cacheControl: "3600",
  //       upsert: false,
  //     });

  return (
    <>
      <div
        {...getRootProps({ className: styles.container })}
        style={{ height: `128px` }}
      >
        <input {...getInputProps()} />
        <p>拖放图片至此或单击选择文件</p>
      </div>
      {acceptedFiles.length > 0 && (
        <img ref={previewElement} style={{ width: `128px`, height: `128px` }} />
      )}
    </>
  );
}
