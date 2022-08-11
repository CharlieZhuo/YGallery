import Link from "next/link";
import { useRouter } from "next/router";
import { RefObject, useEffect, useRef, useState } from "react";
import usePointerHandlers, {
  handlerType,
} from "../lib/hook/usePointerHandlers";
import { neightbourPostType } from "../pages/post/[id]";
import styles from "./gallery.module.css";
import GalleryItem from "./galleryItem";

interface propType {
  imgs: imgType[] | undefined;
  likeCount: number | undefined;
  seriesName?: string;
  postId?: string;
  publishDate?: string;
  keyFrameEffects?: any;
  imperativeHandle?: RefObject<any>;
  nextPost: neightbourPostType | null;
  previousPost: neightbourPostType | null;
}
export interface imgType {
  src: string;
  height: number;
  width: number;
  title: string;
}

export type imperativeHandleType = {
  goNext: () => void;
  goLast: () => void;
  goToIndex: (newIndex: number) => void;
};

const kfe = {
  enterLeft: [
    {
      offset: 0,
      opacity: 0,
      transform: `translate(0vw,0px)`,
    },
    {
      offset: 1,
      opacity: 1,
      transform: `translate(0px,0px) `,
    },
  ],
  enterRight: [
    {
      offset: 0,
      opacity: 0,
      transform: `translate(0px,0px)`,
    },
    {
      offset: 1,
      opacity: 1,
      transform: `translate(0px,0px)`,
    },
  ],

  leaveLeft: [
    {
      offset: 0,
      opacity: 1,
      transform: `translate(0px,0px) scale(1)`,
    },
    {
      offset: 1,
      opacity: 0,
      transform: `translate(-100vw,0px) scale(0.2,0.2)`,
    },
  ],
  leaveRight: [
    {
      offset: 0,
      opacity: 1,
      transform: `translate(0px,0px) scale(1)`,
    },
    {
      offset: 1,
      opacity: 0,
      transform: `translate(100vw,0px) scale(0.2,0.2)`,
    },
  ],
};

const duration = 600;

const enlargeDuration = 400;

const swipeThreshold = 30;

export default function Gallery({
  imgs,
  seriesName,
  postId,
  publishDate,
  nextPost,
  previousPost,
  likeCount,
}: propType) {
  //Index of image being viewed.
  const [activeIndex, setActive] = useState<number>(0);
  //Index of image to be viewed.
  const [targetIndex, setTarget] = useState<number>(0);

  const listRef = useRef<HTMLUListElement>(null);
  const overlayUIRef = useRef<HTMLDivElement>(null);

  const liElements = useLiElements(listRef);

  const router = useRouter();

  useEffect(() => {
    if (imgs && liElements) {
      if (activeIndex !== targetIndex) {
        //play enter and leave animation on new active Index
        playAnimation(liElements, targetIndex, activeIndex, (t) => {
          setActive(targetIndex);
        });
      }
      //hide irrelevent imgs
      liElements
        .filter((e, index) => {
          return index !== activeIndex && index !== targetIndex;
        })
        .forEach((ele) => {
          ele.animate([{ transform: `translate(-110vw,0px)`, offset: 1 }], {
            fill: "both",
          });
        });
    }
  }, [liElements, activeIndex, targetIndex, imgs]);

  const [inDetail, setInDetail] = useState(false);

  const [initialPos, setInitialPos] = useState<[number, number]>([0, 0]);
  const [cumulativeTranslate, setCumulativeTranslate] = useState<
    [number, number]
  >([0, 0]);

  const initialPosHandler: handlerType = {
    onDown(e) {
      setInitialPos([e.clientX, e.clientY]);
      console.debug(`initialPos:${initialPos}`);
    },
  };
  const enlargeClickHandler: handlerType = {
    onUp: (e) => {
      //same position as down position,toggle detail view
      if (e.clientX === initialPos[0] && e.clientY === initialPos[1]) {
        setCumulativeTranslate([0, 0]);
        playEnlargeAnimation();
      }
    },
  };

  const pageSwipeHandler: handlerType = {
    onMove: (e) => {
      //swipe page change
      if (
        Math.abs(e.clientX - initialPos[0]) > swipeThreshold &&
        !inDetail &&
        imgs
      ) {
        setCumulativeTranslate([0, 0]);
        if (e.clientX < initialPos[0] && activeIndex < imgs.length - 1) {
          setTarget(activeIndex + 1);
        } else if (e.clientX > initialPos[0] && activeIndex > 0)
          setTarget(activeIndex - 1);
      }
    },
  };

  const detailViewPanHandler: handlerType = {
    onMove: (e) => {
      const liEle = liElements?.at(activeIndex);
      if (liEle && inDetail) {
        const translate = `translate(${
          cumulativeTranslate[0] + e.clientX - (initialPos?.at(0) ?? 0)
        }px,${
          cumulativeTranslate[1] + e.clientY - (initialPos?.at(1) ?? 0)
        }px)`;
        console.debug(translate);
        const ani = liEle.animate([{ transform: translate, offset: 1 }], {
          duration: 50,
          fill: "forwards",
        });
        ani.play();
      }
    },
    onUp: (e) => {
      if (initialPos) {
        //set new cumulative position
        if (inDetail) {
          setCumulativeTranslate([
            e.clientX - initialPos[0] + cumulativeTranslate[0],
            e.clientY - initialPos[1] + cumulativeTranslate[1],
          ]);
        }
      }
    },
  };

  usePointerHandlers(
    liElements?.at(activeIndex),
    initialPosHandler,
    enlargeClickHandler,
    pageSwipeHandler,
    detailViewPanHandler
  );

  function useKeyboard() {
    useEffect(() => {
      const handler = (ev: { code: any }) => {
        console.debug(`keycode:${ev.code}`);
        switch (ev.code) {
          case `ArrowRight`: {
            if (
              imgs &&
              activeIndex < imgs.length - 1 &&
              activeIndex === targetIndex &&
              !inDetail
            ) {
              setTarget(activeIndex + 1);
            }
            break;
          }

          case `ArrowLeft`: {
            if (
              imgs &&
              activeIndex > 0 &&
              activeIndex === targetIndex &&
              !inDetail
            ) {
              setTarget(activeIndex - 1);
            }
            break;
          }
          case `Escape`: {
            if (inDetail) {
              playEnlargeAnimation();
            }
          }
          default:
            break;
        }
      };
      window.addEventListener("keydown", handler);
      return () => {
        window.removeEventListener("keydown", handler);
      };
    }, [activeIndex, targetIndex, inDetail, imgs]);
  }

  useKeyboard();

  return (
    <>
      <div
        style={{ opacity: inDetail ? 0 : 1 }}
        ref={overlayUIRef}
        className={styles.overlayUI}
      >
        <header className={styles.header}>
          <p>
            {activeIndex + 1} / {imgs?.length}
          </p>
          <div></div>
          <div className={styles.headerButtons}>
            <button
              onClick={(e) => {
                playEnlargeAnimation();
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </button>
            <button
              onClick={(e) => {
                const enterRoute = window.sessionStorage.getItem("enterRoute");
                if (enterRoute) {
                  router.push(enterRoute, undefined, { scroll: false });
                } else router.push("/");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={styles.close}
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </header>
        {imgs && imgs.length > 1 ? (
          <>
            {activeIndex < imgs.length - 1 ? (
              <button
                className={styles.slideButton + " " + styles.next}
                onClick={(e) => {
                  if (imgs && activeIndex < imgs.length - 1 && !inDetail)
                    setTarget(activeIndex + 1);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            ) : (
              <></>
            )}

            {activeIndex > 0 ? (
              <button
                className={styles.slideButton + " " + styles.prior}
                onClick={(e) => {
                  if (imgs && activeIndex > 0 && !inDetail)
                    setTarget(activeIndex - 1);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}

        <footer className={styles.footer}>
          <div className={styles.nextLink + " " + styles.link}>
            {nextPost ? (
              <Link href={`./${nextPost.id}`}>
                <a>
                  <p className={styles.linkTitle}>{nextPost.title}</p>
                  <p>下一组图</p>
                </a>
              </Link>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.currentSeriesInfo}>
            <h1 className={styles.seriesName}>{seriesName}</h1>
            <p className={styles.date}>发布于 {publishDate}</p>

            <button
              onClick={(e) => {
                fetch("./api/like", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: postId,
                }).catch((e) =>
                  console.log(`some error happened:${JSON.stringify(e)}`)
                );
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <p className={styles.likeCount}>{likeCount ?? 0}</p>
          </div>

          <div className={styles.previousLink + " " + styles.link}>
            {previousPost ? (
              <Link href={`./${previousPost.id}`}>
                <a>
                  <p className={styles.linkTitle}>{previousPost.title}</p>
                  <p>上一组图</p>
                </a>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </footer>
      </div>

      <main className={styles.main}>
        <ul className={styles.mainList} ref={listRef}>
          {imgs?.map((img, index) => {
            return (
              <GalleryItem
                key={JSON.stringify(img)}
                img={img}
                inDetail={inDetail}
                priority={index === 0}
              ></GalleryItem>
            );
          })}
        </ul>
      </main>
    </>
  );
  function playEnlargeAnimation() {
    if (liElements && imgs && targetIndex === activeIndex) {
      const spanElement = liElements[activeIndex].querySelector("span");
      if (!inDetail) {
        console.debug(`enlarging`);
        if (spanElement) {
          const rect = spanElement.getBoundingClientRect();
          console.debug(`bounding element rect:${rect}`);
          console.debug(`enlargeScale:${imgs[activeIndex].width / rect.width}`);
          spanElement.animate(
            [
              {
                transform: `scale(${imgs[activeIndex].width / rect.width}`,
              },
            ],
            { duration: enlargeDuration, fill: "forwards", easing: "ease-out" }
          );
          setInDetail(true);
        }
      } else {
        console.debug("shrinking");
        liElements[activeIndex].animate([{ transform: "translate(0,0)" }], {
          duration: enlargeDuration,
          fill: "forwards",
          easing: "ease-out",
        });
        if (spanElement) {
          spanElement.animate(
            [
              {
                transform: `scale(1)`,
              },
            ],
            { duration: 200, easing: "ease-out", fill: "forwards" }
          );
        }
        setInDetail(false);
      }
    }
  }

  function useLiElements(listRef: RefObject<HTMLUListElement>) {
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
    }, [imgs]);
    return items;
  }
}
function playAnimation(
  liElements: HTMLLIElement[],
  target: number,
  active: number,
  onAnimationComplete: (reachedTarget: number) => void
) {
  const enterElement = liElements[target];
  enterElement.style.zIndex = `1`;
  const enterAni = enterElement.animate(
    target > active ? kfe.enterRight : kfe.enterLeft,
    {
      duration,
      fill: "both",
      easing: "ease-out",
    }
  );

  const leaveElement = liElements[active];
  leaveElement.style.transform = `translate(0,0)`;
  const leaveAni = leaveElement.animate(
    target > active ? kfe.leaveLeft : kfe.leaveRight,
    {
      duration,
      fill: "both",
      easing: "ease-out",
    }
  );

  enterAni.play();
  leaveAni.play();
  // enterAni.commitStyles();
  // leaveAni.commitStyles();
  Promise.all([enterAni.finished, leaveAni.finished]).then((e) => {
    console.log("playback Finished");
    onAnimationComplete(target);
  });
}

function hasNextImage(): boolean {
  return false;
}
function hasPreviousImage(): boolean {
  return false;
}
