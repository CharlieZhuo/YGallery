import type { GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import IndexCard from "../components/indexCard";
import * as api from "../lib/strapiLib";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { checkAndSetEV } from "../lib/strapiUtil";

const Home = ({
  postList,
  assetEndpoint,
}: {
  postList: api.PostListResponse;
  assetEndpoint: string;
}) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const callback = function (e: any) {
      backdropRef.current?.style.setProperty(
        "--yvalue",
        `${window.scrollY / 2}px`
      );
    };
    if (backdropRef) {
      window.addEventListener("scroll", callback);
    }
    return () => {
      window.removeEventListener("scroll", callback);
    };
  });

  if (postList)
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <section>
            <h1>悠画廊</h1>{" "}
            <ul className={styles.links}>
              <li>
                <Link href={"/"}>花</Link>
              </li>
              <li>
                <Link href={"/"}>鸟</Link>
              </li>
              <li>
                <Link href={"/"}>山水</Link>
              </li>
              <li>
                <Link href={"/"}>关于</Link>
              </li>
              <li>
                <Link href={"/contact"}>联系</Link>
              </li>
            </ul>
          </section>

          <p>中国画爱好者</p>
        </header>
        <Head>
          <title>悠画廊</title>
          <meta name="description" content="一个中国画爱好者的网站" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          {" "}
          <ul>
            {postList.data?.map((p) => (
              <IndexCard
                post={p}
                assetEndpoint={assetEndpoint}
                key={p.id}
              ></IndexCard>
            ))}
          </ul>
        </main>

        <footer className={styles.footer}>
          <div>
            <p className={styles.footertitle}>悠画廊</p>
            <Link href={"/"}>关于</Link>
            <Link href={"/"}>联系</Link>
          </div>
          <p className={styles.copyright}>© 2022 网站所有者 版权所有</p>
        </footer>
        {/* <div className={styles.backdrop} ref={backdropRef}>
          <Image
            src={"/mmexport1651723454162.colorjpg.jpg"}
            width="128"
            height="128"
            alt={"birdBackdrop"}
          ></Image>
        </div> */}
      </div>
    );
};
export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  checkAndSetEV(api.defaults);
  const allposts = await api.getPosts({ populate: "*" });
  if (allposts.status === 200)
    return {
      props: {
        postList: allposts.data,
        assetEndpoint: process.env.STRAPI_ENDPOINT_ASSET,
      },
    };
  else {
    console.log(
      `Error code:${allposts.status} ,Error:${JSON.stringify(allposts.data)}`
    );
    return { props: {} };
  }
};
