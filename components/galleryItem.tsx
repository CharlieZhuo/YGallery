import { imgType } from "./gallery";
import styles from "./gallery.module.css";
import Image from "next/image";
import { useState } from "react";

export default function GalleryItem({
  img,
  inDetail,
  priority,
}: {
  img: imgType;
  inDetail: boolean;
  priority: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <li style={{ cursor: inDetail ? "zoom-out" : "zoom-in" }}>
      <div
        className={styles.loadingEffect}
        style={{
          opacity: loaded ? "0" : "1",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <line x1="12" y1="2" x2="12" y2="6"></line>
          <line x1="12" y1="18" x2="12" y2="22"></line>
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
          <line x1="2" y1="12" x2="6" y2="12"></line>
          <line x1="18" y1="12" x2="22" y2="12"></line>
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
        </svg>
      </div>
      <Image
        src={img.src}
        width={img.width}
        height={img.height}
        priority={priority}
        layout={"intrinsic"}
        quality={100}
        className={styles.img}
        objectFit={"contain"}
        onLoadingComplete={(p) => {
          setLoaded(true);
        }}
      ></Image>
    </li>
  );
}
