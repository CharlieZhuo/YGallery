import type { GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import PostListCard from "../components/postListCard";
import * as api from "../lib/strapiLib";
import { useEffect, useRef } from "react";
import { checkAndSetEV } from "../lib/strapiUtil";

const Home = ({
  postList,
  assetEndpoint,
  catagories,
}: {
  postList: api.PostListResponse;
  assetEndpoint: string;
  catagories: api.CatagoryListResponse;
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

  if (postList) {
    const images = postList.data?.map((p, index) => {
      return {
        aspectRatio:
          p?.attributes?.Images?.data![0].attributes?.width! /
          p?.attributes?.Images?.data![0].attributes?.height!,
        card: (
          <PostListCard
            src={`${assetEndpoint}${p?.attributes?.Images?.data![0].attributes
              ?.url!}`}
            alt={p?.attributes?.Images?.data![0].attributes?.alternativeText!}
            title={p?.attributes?.title!}
            id={p.id!}
            priority={index === 0}
            key={p.id}
          ></PostListCard>
        ),
      };
    });

    const catagoriesItems = (
      <ul className={styles.links}>
        {catagories.data?.map((c) => {
          return (
            <li key={c.id}>
              <Link href={`/catagory/${c.attributes?.url}`}>
                {c.attributes?.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>悠画廊</h1> {catagoriesItems}
        </header>
        <Head>
          <title>悠画廊</title>
          <meta name="description" content="一个中国画爱好者的网站" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <p className={styles.intro}>中国画爱好者</p>
          {/* <MultiFlexList
            gap={30}
            maxColumns={3}
            minColumnWidthInPx={300}
            content={images!}
          ></MultiFlexList> */}
          <ul className={styles.mainList}>{images?.map((i) => i.card)}</ul>
        </main>

        <footer className={styles.footer}>
          <div>
            <p className={styles.footertitle}>悠画廊</p>
            <Link href={"/"}>关于</Link>
            <Link href={"/"}>联系</Link>
          </div>
          <p className={styles.copyright}>© 2022 悠画廊 版权所有</p>
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
  }
};
export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  checkAndSetEV(api.defaults);
  const allposts = await api.getPosts({ populate: "*" });
  const catagories = await api.getCatagories({ sort: "id" });
  if (allposts.status === 200 && catagories.status === 200)
    return {
      props: {
        postList: allposts.data,
        assetEndpoint: process.env.STRAPI_ENDPOINT_ASSET,
        catagories: catagories.data,
      },
    };
  else {
    console.log(
      `Error code:${allposts.status} ,Error:${JSON.stringify(allposts.data)}`
    );
    return { props: {} };
  }
};
