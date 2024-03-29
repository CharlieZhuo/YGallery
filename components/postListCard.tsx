import styles from "./postListCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
type PostListCardPropType = {
  id: string;
  src: string;
  alt: string;
  title: string;
  priority: boolean;
  quantity: number;
  aspectRatio: number;
  style?: CSSProperties;
  sizeVw: number;
};
export default function PostListCard({
  id,
  src,
  alt,
  title,
  priority,
  quantity,
  aspectRatio,
  style,
  sizeVw,
}: PostListCardPropType) {
  const router = useRouter();

  const [animationPlayed, setAnimationPlayed] = useState(priority);

  const containerRef = useRef<HTMLAnchorElement>(null);
  const [animation, setAnimation] = useState<Animation>();
  useEffect(() => {
    const element = containerRef.current;

    if (element) {
      const ani = element.animate(
        [
          {
            transform: `translate(0,2rem)`,
            opacity: `0.85`,
            offset: 0,
          },
          {
            transform: `translate(0,0)`,
            opacity: `1`,
            offset: 1,
          },
        ],
        { duration: 500, easing: `ease-out`, fill: "both" }
      );
      ani.pause();
      if (animationPlayed) ani.finish();
      setAnimation(ani);
    }
  }, []);
  useEffect(() => {
    const element = containerRef.current;

    if (element && animation) {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            if (!animationPlayed) {
              animation.play();
              setAnimationPlayed(true);
            }
          }
        },
        {
          threshold: 0.3,
        }
      );
      intersectionObserver.observe(element);
      return () => {
        intersectionObserver.disconnect();
      };
    }
  }, [animationPlayed, animation]);

  return (
    <Link href={`/post/${id}`} passHref>
      <a
        id={`card${id}`}
        ref={containerRef}
        className={styles.container}
        style={{ aspectRatio: `${aspectRatio}`, ...style }}
        onClick={(e) => {
          let currentRoute = router.asPath;
          if (currentRoute.includes("#"))
            currentRoute = currentRoute.substring(0, currentRoute.indexOf("#"));
          console.log(currentRoute);
          window.sessionStorage.setItem(
            "enterRoute",
            `${currentRoute}#card${id}`
          );
        }}
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          sizes={`${sizeVw}vw`}
          objectFit="contain"
          priority={priority}
        ></Image>
        <p className={styles.title}>{title}</p>
        {quantity > 1 ? (
          <p className={styles.quantityBadge}>{quantity}+</p>
        ) : (
          ""
        )}
      </a>
    </Link>
  );
}
