import * as api from "../../lib/strapiLib";
import { checkAndSetEV } from "../../lib/strapiUtil";

import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

import styles from "../../styles/Post.module.css";
import SwipeComponent from "../../components/swipeComponent";
import { useRouter } from "next/router";

export default function Post({
  post,
  assetEndpoint,
}: {
  post: api.PostResponse;
  assetEndpoint: string;
}) {
  const loop = false;
  const listRef = useRef<HTMLUListElement>(null);

  const [selected, setSelected] = useState(0);

  const numOfImage = post.data?.attributes?.Images?.data?.length ?? 0;

  function useListItems() {
    const [items, setItems] = useState<Array<HTMLLIElement>>();
    useEffect(() => {
      const list = listRef.current;
      if (list) {
        const collection = list.getElementsByTagName("li");
        const itemArray = [];
        for (let i = 0; i != collection.length; ++i) {
          const item = collection.item(i);
          item && itemArray.push(item);
        }
        setItems(itemArray);
      }
    }, [post]);
    return items;
  }
  const listItems = useListItems();

  let selectedElement = null;
  let priorElement = null;
  let nextElement = null;
  if (listItems) {
    selectedElement = listItems[selected];
    if (selected < listItems.length - 1) {
      nextElement = listItems[selected + 1];
    }
    if (selected > 0) {
      priorElement = listItems[selected - 1];
    }
  }

  const images = post.data?.attributes?.Images?.data;
  if (images)
    return (
      <>
        <Head>
          {" "}
          <title>{`${post.data?.attributes?.title} - 悠画廊`}</title>
        </Head>
        <header className={styles.header}>
          <p>
            {selected + 1} / {images.length}
          </p>

          <div className={styles.buttons}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={styles.close}
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={styles.download}
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </div>
        </header>
        <main className={styles.main}>
          <ul className={styles.mainList} ref={listRef}>
            {" "}
            {post.data?.attributes?.Images?.data?.map((img, index) => {
              const url = img.attributes?.url!;
              // const width = img.attributes?.width!;
              // const height = img.attributes?.height!;

              return (
                <li key={img.id}>
                  <img
                    src={`${assetEndpoint}${url}`}
                    alt={img.attributes?.alternativeText}
                    className={styles.img}
                  ></img>
                </li>
              );
            })}
          </ul>
          {selectedElement ? (
            <SwipeComponent
              selectedElement={selectedElement}
              nextElement={nextElement}
              priorElement={priorElement}
              callbacks={{
                onSwipeLeft() {
                  if (selected < numOfImage - 1)
                    setSelected((v) => {
                      return v + 1;
                    });
                },
                onSwipeRight() {
                  if (selected > 0)
                    setSelected((v) => {
                      return v - 1;
                    });
                },
              }}
            ></SwipeComponent>
          ) : (
            <></>
          )}
        </main>

        <footer className={styles.footer}>
          <h1 className={styles.title}>{post.data?.attributes?.title}</h1>
          <p className={styles.discription}>
            {post.data?.attributes?.discription}{" "}
            <span className={styles.time}>
              发表于{post.data?.attributes?.createdAt}
            </span>
          </p>
        </footer>

        {/* <footer className={styles.footer}>
            <ul className={styles.thumbnailList} ref={listRef}>
              {" "}
              {post.data?.attributes?.Images?.data?.map((img, index) => {
                const url = img.attributes?.url!;
                const width = img.attributes?.width!;
                const height = img.attributes?.height!;

                return (
                  <li
                    className={`${styles.thumbnail} ${
                      img.id === selected ? styles.focus : ""
                    }`}
                    key={img.id}
                  >
                    <img
                      src={`${assetEndpoint}${url}`}
                      alt={img.attributes?.alternativeText}
                      className={styles.img}
                    ></img>
                  </li>
                );
              })}
            </ul>
          </footer> */}
      </>
    );
}
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  if (typeof id === "string") {
    const response = await fetch(
      `${process.env.STRAPI_ENDPOINT!}/posts/${id}?populate=*`,
      {
        headers: { Authorization: `bearer ${process.env.STRAPI_ACCESS_TOKEN}` },
      }
    );

    if (response.status === 200)
      return {
        props: {
          post: await response.json(),
          assetEndpoint: process.env.STRAPI_ENDPOINT_ASSET,
        },
      };
    else {
      console.log(
        `Error code:${response.status} ,Error:${JSON.stringify(
          await response.json()
        )}`
      );
    }
  }
  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  checkAndSetEV(api.defaults);
  const response = await api.getPosts();
  if (response.status === 200 && response.data.data) {
    const paths = response.data.data
      .filter((p) => typeof p.id === "string")
      .map((p) => {
        return { params: { id: p.id } };
      });
    return {
      paths: paths,
      fallback: "blocking", // See the "fallback" section below
    };
  } else
    throw Error(
      `Can't get paths from CMS.Error code:${
        response.status
      },Error object:${JSON.stringify(response.data)} `
    );
};
