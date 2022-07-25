import { RefObject, useEffect, useRef, useState } from "react";
import { usePointerEvents } from "../lib/hook/usePointerEvents";
import styles from "./gallery.module.css";

interface propType {
  imgs:
    | {
        src: string;
        height: number;
        width: number;
        title: string;
      }[]
    | undefined;
  seriesName?: string;
  publishDate?: string;
  keyFrameEffects?: any;
  imperativeHandle?: RefObject<any>;
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
      transform: `translate(0,0px) scale(0.2,0.2)`,
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
      transform: `translate(0,0px) scale(0.2,0.2)`,
    },
  ],
};

const duration = 1000;
export default function Gallery({ imgs, seriesName, publishDate }: propType) {
  const [active, setActive] = useState<number>(0);
  const [target, setTarget] = useState<number>(0);

  const listRef = useRef<HTMLUListElement>(null);
  const overlayUIRef = useRef<HTMLDivElement>(null);

  const liElements = useLiElements(listRef);

  useEffect(() => {
    if (imgs && liElements) {
      if (active !== target) {
        //play enter and leave animation on new active Index
        playAnimation(liElements, target, active, (t) => {
          setActive(target);
        });
      }
      //hide irrelevent imgs
      liElements
        .filter((e, index) => {
          return index !== active && index !== target;
        })
        .forEach((ele) => {
          ele.animate([{ transform: `translate(-110vw,0px)`, offset: 1 }], {
            fill: "both",
          });
        });
    }
  }, [liElements, active, target]);

  const [inDetail, setInDetail] = useState(false);

  const [Pos, setPos] = useState([0, 0]);
  const [initialPos, setInitialPos] = useState([0, 0]);
  usePointerEvents(liElements?.at(active), {
    onDown(e) {
      setInitialPos([e.clientX, e.clientY]);
    },
    onMove(e) {
      const liEle = liElements?.at(active);
      if (liEle && inDetail) {
        setPos([Pos[0] + e.movementX, Pos[1] + e.movementY]);
        const translate = `translate(${Pos[0]}px,${Pos[1]}px)`;
        // liEle.style.transform = `${translate}`;
        liEle.animate([{ transform: translate, offset: 1 }], {
          duration: 20,
          fill: "forwards",
        });
      }
    },
    onUp(e) {
      if (e.clientX === initialPos[0] && e.clientY === initialPos[1]) {
        playEnlargeAnimation();
      }
    },
    onCancel(e) {},
  });

  useEffect(() => {
    const handler = (ev: { code: any }) => {
      // console.log(ev.code);
      // console.log(`active:${active},inDetail:${inDetail}`);
      switch (ev.code) {
        case `ArrowRight`: {
          if (
            imgs &&
            active < imgs.length - 1 &&
            active === target &&
            !inDetail
          ) {
            setTarget(active + 1);
          }
          break;
        }

        case `ArrowLeft`: {
          if (imgs && active > 0 && active === target && !inDetail) {
            console.log("left");
            setTarget(active - 1);
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
  }, [active, target, inDetail]);

  return (
    <>
      <div
        style={{ opacity: inDetail ? 0 : 1 }}
        ref={overlayUIRef}
        className={styles.overlayUI}
      >
        <header className={styles.header}>
          <p>
            {active + 1} / {imgs?.length}
          </p>
          <div></div>
          <div className={styles.headerButtons}>
            <button>
              <a href={imgs?.at(active)?.src} download>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className={styles.download}
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </button>
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
                window.history.back();
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
            <button
              className={styles.slideButton + " " + styles.next}
              onClick={(e) => {
                if (imgs && active < imgs.length - 1 && !inDetail)
                  setTarget(active + 1);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            <button
              className={styles.slideButton + " " + styles.prior}
              onClick={(e) => {
                if (imgs && active > 0 && !inDetail) setTarget(active - 1);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          </>
        ) : (
          <></>
        )}

        <footer className={styles.footer}>
          <h1 className={styles.seriesName}>{seriesName}</h1>
          <p>发布于 {publishDate}</p>
        </footer>
      </div>

      <main className={styles.main}>
        <ul className={styles.mainList} ref={listRef}>
          {imgs?.map((img, index) => {
            return (
              <li
                key={index}
                style={{ cursor: inDetail ? "zoom-out" : "zoom-in" }}
              >
                <img src={img.src} alt={img.title} className={styles.img}></img>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
  function playEnlargeAnimation() {
    setPos([0, 0]);
    if (liElements && imgs && target === active) {
      const imgElement = liElements[active].querySelector("img");
      if (!inDetail) {
        console.log(`enlarging`);
        if (imgElement) {
          const rect = imgElement.getBoundingClientRect();
          console.log(rect);
          console.log(`enlargeScale:${imgs[active].width / rect.width}`);
          imgElement.style.transform = `scale(${
            imgs[active].width / rect.width
          })`;
          setInDetail(true);
        }
      } else {
        console.log("shrinking");
        liElements[active].animate(
          { transform: "translate(0,0)" },
          { duration: 200, fill: "forwards" }
        );
        if (imgElement) {
          imgElement.style.transform = `scale(1)`;
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
