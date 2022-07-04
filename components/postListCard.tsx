import styles from "./postListCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function PostListCard({
  id,
  src,
  alt,
  title,
  priority,
  quantity,
  aspectRatio,
}: {
  id: string;
  src: string;
  alt: string;
  title: string;
  priority: boolean;
  quantity: number;
  aspectRatio: number;
}) {
  const [loaded, setLoaded] = useState(priority);

  return (
    <Link href={`/post/${id}`} passHref>
      <a className={styles.container} style={{ aspectRatio: `${aspectRatio}` }}>
        <Image
          src={src}
          alt={alt}
          layout="fill"
          sizes="600px"
          objectFit="contain"
          priority={priority}
          style={{ opacity: loaded ? 1 : 0 }}
          onLoad={(e) => {
            setLoaded(true);
          }}
        ></Image>
        <p className={styles.title}>{title}</p>
        {quantity > 1 ? (
          <p className={styles.quantityBadge}>{quantity}+</p>
        ) : (
          ""
        )}
      </a>
    </Link>
  );
}
