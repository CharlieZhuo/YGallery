import styles from "./indexCard.module.css";
import * as strapilib from "../lib/strapiLib";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
type post = strapilib.PostResponse["data"];
export default function IndexCard({
  post,
  assetEndpoint,
}: {
  post: post;
  assetEndpoint: string;
}) {
  const url = post?.attributes?.Images?.data![0].attributes?.url!;
  const width = post?.attributes?.Images?.data![0].attributes?.width!;
  const height = post?.attributes?.Images?.data![0].attributes?.height!;
  const [loaded, setLoaded] = useState(false);

  const ref = useRef(null);
  return (
    <li>
      <Link href={`/post/${post?.id}`} passHref>
        <a className={styles.container}>
          <Image
            src={`${assetEndpoint}${url}`}
            alt={post?.attributes?.Images?.data![0].attributes?.alternativeText}
            // width={width}
            // height={height}
            layout="fill"
            sizes="600px"
            objectFit="contain"
            style={{ opacity: loaded ? 1 : 0 }}
            onLoad={(e) => {
              setLoaded(true);
            }}
          ></Image>
          <p>{post?.attributes?.title}</p>
        </a>
      </Link>
    </li>
  );
}
