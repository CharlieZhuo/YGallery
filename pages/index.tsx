import type { GetStaticProps } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import PostListCard from "../components/postListCard";
import * as api from "../lib/strapiLib";
import { useEffect, useRef } from "react";
import { checkAndSetEV } from "../lib/strapiUtil";
import { PhotoAlbum } from "react-photo-album";

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
        key: p.id,
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
            quantity={p.attributes?.Images?.data?.length ?? 1}
            aspectRatio={
              p?.attributes?.Images?.data![0].attributes?.width! /
              p?.attributes?.Images?.data![0].attributes?.height!
            }
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
          {/*  css grid layout with  repeat(auto-fit, minmax(300px, 1fr))  */}
          {/* <ul className={styles.mainList}>
            {images?.map((i) => (
              <li key={i.key}>{i.card}</li>
            ))}
          </ul> */}

          <PhotoAlbum
            layout="masonry"
            photos={postList.data!.map((p, index) => {
              return {
                height: p?.attributes?.Images?.data![0].attributes?.height!,
                width: p?.attributes?.Images?.data![0].attributes?.width!,
                src: `${assetEndpoint}${p?.attributes?.Images?.data![0]
                  .attributes?.url!}`,
                alt: p?.attributes?.Images?.data![0].attributes
                  ?.alternativeText!,
                title: p?.attributes?.title!,
                id: p.id!,
                priority: index === 0,
                key: p.id,
                quantity: p.attributes?.Images?.data?.length ?? 1,
                aspectRatio:
                  p?.attributes?.Images?.data![0].attributes?.width! /
                  p?.attributes?.Images?.data![0].attributes?.height!,
              };
            })}
            columns={(containerWidth) => {
              if (containerWidth < 500) return 1;
              if (containerWidth < 1000) return 2;
              return 3;
            }}
            renderPhoto={(prop) => {
              return (
                <PostListCard
                  {...prop.photo}
                  // src={prop.photo.src}
                  // alt={prop.photo.alt}
                  // id={prop.photo.id}
                  // priority={prop.photo.priority}
                  // quantity={prop.photo.quantity}
                  // title={prop.photo.title}
                ></PostListCard>
              );
            }}
            renderColumnContainer={(props) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: `column`,
                    alignItems: `flex-start`,
                    width: ` calc((100% - 15px) / 2)`,
                    justifyContent: `flex-start`,
                    gap: `${props.layoutOptions.spacing}px`,
                  }}
                >
                  {props.children}
                </div>
              );
            }}
          ></PhotoAlbum>
        </main>

        <footer className={styles.footer}>
          <div>
            <p className={styles.footertitle}>悠画廊</p>
            <Link href={"/about"}>关于</Link>
            <Link href={"/contact"}>联系</Link>
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
  const allposts = await api.getPosts({
    populate: "*",
    sort: "publishedAt:desc",
  });
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
