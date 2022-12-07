"use client";
import Cropper from "cropperjs";
import { useEffect, useRef, useState } from "react";

import styles from "./AvatarEditor.module.css";

export default function AvatarEditor({
  url,
  onComplete,
  onCancel,
}: {
  url: string | null;
  onComplete: (newFile: Blob) => void;
  onCancel?: () => void;
}) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const cropperRef = useRef<Cropper | null>(null);

  const [AspectRatio, setAspectRatio] = useState(1);

  const outputContainerRef = useRef<HTMLDivElement | null>(null);

  const onSelectionChange = () => {
    const cropper = cropperRef.current;
    if (cropper) {
      const selection = cropper.getCropperSelection();
      if (selection) {
        selection.$toCanvas().then((v) => {
          const outputContainer = outputContainerRef.current;
          if (outputContainer) {
            outputContainer.replaceChildren(v);
          }
        });
      }
    }
  };

  useEffect(() => {
    if (url) {
      const imgElement = imgRef.current;

      if (imgElement) {
        imgElement.onload = (e) => {
          setAspectRatio(imgElement.naturalWidth / imgElement.naturalHeight);

          const cropper = new Cropper(imgElement, {
            container: `#previewContainer`,
          });

          const cropperImage = cropper.getCropperImage();
          if (cropperImage) {
            cropperImage.translatable = false;
            cropperImage.scalable = false;
            cropperImage.skewable = false;
            cropperImage.rotatable = false;
          }

          const selection = cropper.getCropperSelection();
          if (selection) {
            selection.aspectRatio = 1;
            selection.addEventListener("change", onSelectionChange);
            selection.$toCanvas().then((v) => {
              const outputContainer = outputContainerRef.current;
              if (outputContainer) {
                outputContainer.replaceChildren(v);
              }
            });
          }
          cropperRef.current = cropper;
        };
        imgElement.src = url;
      }
    }
  }, [url]);

  return (
    <div className={styles.flex}>
      <div
        className={styles.previewContainer}
        style={{
          aspectRatio: AspectRatio,
        }}
        id="previewContainer"
      >
        <img className={styles.preview} ref={imgRef} />
      </div>
      <div className={styles.restUI}>
        <div ref={outputContainerRef} className={styles.outputPreview} />
        <button
          onClick={() => {
            const cropper = cropperRef.current;
            if (cropper) {
              const selection = cropper.getCropperSelection();
              if (selection) {
                selection.$toCanvas().then((canvas) => {
                  canvas.toBlob(
                    (b) => {
                      if (b) {
                        console.log(b);
                        onComplete(b);
                      }
                    },
                    "image/jpeg",
                    0.95
                  );
                });
              }
            }
          }}
        >
          应用
        </button>
        <button
          onClick={() => {
            onCancel && onCancel();
          }}
        >
          取消
        </button>
      </div>
    </div>
  );
}
