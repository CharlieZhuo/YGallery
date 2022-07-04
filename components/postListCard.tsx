import styles from "./postListCard.module.css";
import * as strapilib from "../lib/strapiLib";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
type post = strapilib.PostResponse["data"];
export default function PostListCard({
  id,
  src,
  alt,
  title,
  priority,
  quantity,
}: {
  id: string;
  src: string;
  alt: string;
  title: string;
  priority: boolean;
  quantity: number;
}) {
  const [loaded, setLoaded] = useState(priority);

  return (
    <li>
      <Link href={`/post/${id}`} passHref>
        <a className={styles.container}>
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
    </li>
  );
}
