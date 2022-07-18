import * as api from "../../lib/strapiLib";
import { checkAndSetEV } from "../../lib/strapiUtil";

import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

import styles from "../../styles/Post.module.css";
import { usePointerEvents } from "../../lib/hook/usePointerEvents";

export default function Post({
  post,
  assetEndpoint,
}: {
  post: api.PostResponse;
  assetEndpoint: string;
}) {
  const enterAnimation = new KeyframeEffect(
    null,
    [
      {
        offset: 0,
        transform: `translate(-800px,0px) scale(0.2,0.2)`,
      },
    ],
    2000
  );

  const leaveAnimation = new KeyframeEffect(
    null,
    [
      {
        offset: 0,
        opacity: 1,
      },
    ],
    2000
  );

  function getNaturalKeyframe(
    index: number,
    totalNumber: number,
    selected: number,
    windowWidth: number
  ): { [property: string]: string | number | null | undefined } {
    let transform = `translate(${
      (index - selected) * windowWidth * 0.5
    }px,0px)`;

    let opacity = index === selected ? `1` : `0`;
    let display = "hidden";
    return { transform, opacity, display };
  }

  //movement smaller or equal this value will be treated as click.
  const clickThreshold = 0;

  const swipeThresholdPercentage = 20;

  const animationThreshold = 50;

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
        itemArray.forEach((ele, index) => {
          const initialKeyframe = getNaturalKeyframe(
            index,
            itemArray.length,
            selected,
            window.innerWidth
          );

          console.log(JSON.stringify(initialKeyframe));
          const initialAnimation = ele.animate(
            [{ ...initialKeyframe, offset: 1 }],
            { fill: "forwards", duration: 10 }
          );
          initialAnimation.finish();
          initialAnimation.commitStyles();
        });
      }
    }, [post]);
    return items;
  }
  const listItems = useListItems();
  console.log(JSON.stringify(listItems?.length));

  const selectedElement = listItems?.at(selected);

  const [xPox, setXPox] = useState(0);
  usePointerEvents(selectedElement, {
    onDown(e) {},
    onMove(e) {
      setXPox(xPox + e.movementX);
      selectedElement?.style.cursor &&
        (selectedElement.style.cursor = "grabbing");
      const animation = selectedElement?.animate(
        [
          {
            transform: `translate(${xPox}px,0px)`,
            offset: 1,
          },
        ],
        { duration: 100, fill: "forwards" }
      );
      if (Math.abs(xPox) > animationThreshold) {
      } else {
        const animation = selectedElement?.animate(
          [
            {
              transform: `translate(${xPox}px,0px)`,
              offset: 1,
            },
          ],
          { duration: 100, fill: "forwards" }
        );
      }
    },
    onUp(e) {
      selectedElement?.style.cursor && (selectedElement.style.cursor = "grab");

      if (Math.abs(xPox) <= clickThreshold) {
        console.log("clicked");
      } else if (
        Math.abs(xPox) <=
        (window.innerWidth * swipeThresholdPercentage) / 100
      ) {
        setXPox(0);
        const animation = selectedElement?.animate(
          [
            {
              transform: `translate(0px,0px)`,
            },
          ],
          { duration: 200, fill: "forwards", easing: "ease-out" }
        );
      } else {
        if (xPox > 0) {
          console.log("swipe right triggerd.");
        } else {
          console.log("swipe left triggered");
          if (selected < numOfImage - 1)
            setSelected((v) => {
              return v + 1;
            });
        }
      }
    },
    onCancel(e) {},
  });

  const images = post.data?.attributes?.Images?.data;
  if (images)
    return (
      <>
        <Head>
          {" "}
          <title>{`${post.data?.attributes?.title} - 悠画廊`}</title>
        </Head>
        <div className={styles.container}>
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
        </div>
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
