import styles from "./card.module.css";
import * as strapilib from "../lib/strapiLib";
import Image from "next/image";
import Link from "next/link";
type post = strapilib.PostResponse["data"];
export default function Card({
  post,
  assetEndpoint,
}: {
  post: post;
  assetEndpoint: string;
}) {
  const url = post?.attributes?.Images?.data![0].attributes?.url!;
  const width = post?.attributes?.Images?.data![0].attributes?.width!;
  const height = post?.attributes?.Images?.data![0].attributes?.height!;

  return (
    <li>
      <Link href={`/post/${post?.id}`} passHref>
        <a className={styles.container}>
          <Image
            src={`${assetEndpoint}${url}`}
            // width={width}
            // height={height}
            layout="fill"
            sizes="600px"
            objectFit="contain"
          ></Image>
          <p>{post?.attributes?.title}</p>
        </a>
      </Link>
    </li>
  );
}
