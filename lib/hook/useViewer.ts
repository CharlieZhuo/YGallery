import { useEffect, useState } from "react";
import { usePointerEvents } from "./usePointerEvents";

type KeyframeEffectGenerator = (
  windowWidth: number,
  direction: "left" | "right"
) => { [property: string]: string | number | null | undefined }[];

export default function useViewer<eleType extends HTMLElement>({
  selectedElement,
  nextElement,
  priorElement,
  callbacks,
}: {
  selectedElement: eleType;
  nextElement: eleType | null;
  priorElement: eleType | null;
  callbacks: {
    onSwipeLeft: () => void;
    onSwipeRight: () => void;
  };
}) {
  const duration = 1000;

  const getEnterAnimationKeyframe: KeyframeEffectGenerator = (
    width,
    direction
  ) => {
    return [
      {
        offset: 0,
        opacity: 1,
        transform: `translate(${
          direction === "left" ? "-" : ""
        }${width}px,0px)`,
      },
      {
        offset: 1,
        opacity: 1,
        transform: `translate(0px,0px) scale(1)`,
      },
    ];
  };

  const getLeaveAnimationKeyframe: KeyframeEffectGenerator = (
    width,
    direction
  ) => {
    return [
      {
        offset: 0,
        opacity: 1,
        transform: `translate(0px,0px) scale(1)`,
      },
      {
        offset: 1,
        opacity: 0,
        transform: `translate(${
          width * (direction === "left" ? -1 : 1)
        }px,0px) scale(0.2,0.2)`,
      },
    ];
  };

  //return value between 0-1
  function getAnimationPositionFromPointerPosition(
    px: number,
    percentageOfWindow: number
  ) {
    let offset = percentageOfWindow / 100;
    if (offset < 0) offset = 0;
    else if (offset > 1) offset = 1;
    return offset;
  }

  function getAnimation(
    element: eleType | null,
    direction: "left" | "right",
    type: "leave" | "enter"
  ): Animation | null {
    let animation = null;
    if (element) {
      const ani = element
        .getAnimations()
        .find((a) => a.id === `SwipeViewer${direction}${type}`);
      if (ani) {
        return ani;
      } else {
        if (type === "enter") {
          animation = element.animate(
            getEnterAnimationKeyframe(window.innerWidth, direction),
            { duration, fill: `both` }
          );
        } else {
          animation = element.animate(
            getLeaveAnimationKeyframe(window.innerWidth, direction),
            { duration, fill: `both` }
          );
        }
        // if (type === "enter") animation.currentTime = 0;
        animation.id = `SwipeViewer${direction}${type}`;
        animation.pause();
      }
    }
    return animation;
  }

  selectedElement.style.zIndex = `0`;
  if (nextElement) nextElement.style.zIndex = `1`;
  if (priorElement) priorElement.style.zIndex = `1`;

  let priorAnimation = getAnimation(priorElement, "left", "enter");
  let nextAnimation = getAnimation(nextElement, "right", "enter");
  let LeftAnimation = getAnimation(selectedElement, "left", "leave");
  let rightAnimation = getAnimation(selectedElement, "right", "leave");

  //movement smaller or equal this value will be treated as click.
  const clickThreshold = 0;

  const swipeThresholdPercentage = 20;

  const [xPox, setXPox] = useState(0);

  usePointerEvents(selectedElement, {
    onDown(e) {},
    onMove(e) {
      setXPox(xPox + e.movementX);

      const currentPosition = getAnimationPositionFromPointerPosition(
        Math.abs(xPox),
        (Math.abs(xPox) / window.innerWidth) * 100
      );

      LeftAnimation?.pause();
      rightAnimation?.pause();
      nextAnimation?.pause();
      priorAnimation?.pause();

      console.log(currentPosition);

      if (xPox < 0) {
        if (nextAnimation) {
          nextAnimation.currentTime = duration * currentPosition;
        }
        if (priorAnimation) priorAnimation.currentTime = 0;
        LeftAnimation!.currentTime = duration * currentPosition;
        rightAnimation!.currentTime = 0;
      } else {
        if (priorAnimation)
          priorAnimation.currentTime = duration * currentPosition;
        if (nextAnimation) {
          nextAnimation.currentTime = 0;
        }
        rightAnimation!.currentTime = duration * currentPosition;
        LeftAnimation!.currentTime = 0;
      }
    },
    onUp(e) {
      setXPox(0);
      if (Math.abs(xPox) <= clickThreshold) {
        console.log("clicked");
      } else if (
        Math.abs(xPox) <=
        (window.innerWidth * swipeThresholdPercentage) / 100
      ) {
        //smallSwipe
        if (xPox > 0) {
          console.log(rightAnimation);
          if (priorAnimation) {
            priorAnimation.playbackRate = -1;
            priorAnimation.play();
          }
          rightAnimation!.playbackRate = -1;
          rightAnimation!.play();
        } else {
          if (nextAnimation) {
            nextAnimation.playbackRate = -1;
            nextAnimation.play();
          }
          LeftAnimation!.playbackRate = -1;
          LeftAnimation!.play();
        }
      } else {
        if (xPox > 0) {
          console.log("swipe right triggerd.");

          if (priorElement && priorAnimation && rightAnimation) {
            priorAnimation.playbackRate = 1;
            priorAnimation.play();
            rightAnimation.playbackRate = 1;
            rightAnimation.play();
            rightAnimation.onfinish = (e) => {
              callbacks.onSwipeRight();
            };
          }
          //no prior element ,return to normal position.
          else {
            console.log("no prior element,returning to origin position");
            rightAnimation!.playbackRate = -1;
            rightAnimation!.play();
          }
        } else {
          console.log("swipe left triggered");
          console.log(nextAnimation);
          console.log(LeftAnimation);
          if (nextElement && nextAnimation && LeftAnimation) {
            console.log(`playing animation`);
            nextAnimation.playbackRate = 1;
            nextAnimation.play();
            LeftAnimation.playbackRate = 1;
            LeftAnimation.play();
            LeftAnimation.onfinish = (e) => {
              callbacks.onSwipeLeft();
            };
          }
          //no next element,return to normal position.
          else {
            console.log(`no next element,returning to origin position`);
            LeftAnimation!.playbackRate = -1;
            LeftAnimation!.play();
          }
        }
      }
    },
    onCancel(e) {},
  });
}
