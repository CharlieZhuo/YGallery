import { useState } from "react";
import { usePointerEvents } from "../lib/hook/usePointerEvents";
type viewerPropType = {
  imageElements: HTMLImageElement[];
  callbacks: {
    onSelectedChange: (newActiveIndex: number) => void;
  };
  activeIndex: number;

  //Is first image the next image of last image, etc
  loop: boolean;
};

type KeyframeEffectGenerator = (
  windowWidth: number,
  direction: "left" | "right"
) => { [property: string]: string | number | null | undefined }[];

export default function useViewer({
  imageElements,
  callbacks,
  activeIndex,
  loop,
}: viewerPropType) {
  const duration = 2000;

  const getEnterAnimationKeyframe: KeyframeEffectGenerator = (
    width,
    direction
  ) => {
    return [
      {
        offset: 0,
        transform: `translate(${
          width * (direction === "left" ? -1 : 1)
        }px,0px) scale(0.2,0.2)`,
      },
    ];
  };

  const getLeaveAnimationKeyframe: KeyframeEffectGenerator = (
    width,
    direction
  ) => {
    return [
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
    let offset = (percentageOfWindow / 100) * 0.5;
    if (offset < 0) offset = 0;
    else if (offset > 1) offset = 1;
    return offset;
  }

  //movement smaller or equal this value will be treated as click.
  const clickThreshold = 0;

  const swipeThresholdPercentage = 20;

  const numOfImage = imageElements.length;

  const selectedElement = imageElements[activeIndex];

  let priorElement: HTMLElement | null = null;
  let nextElement: HTMLElement | null = null;

  if (activeIndex > 0) {
    priorElement = imageElements[activeIndex - 1];
  } else if (loop) {
    priorElement = imageElements[imageElements.length - 1];
  }

  if (activeIndex < imageElements.length - 1) {
    nextElement = imageElements[activeIndex + 1];
  } else if (loop) {
    priorElement = imageElements[0];
  }

  const priorElementAnimtaion = priorElement?.animate(
    getEnterAnimationKeyframe(window.innerWidth, "left"),
    duration
  );
  priorElementAnimtaion?.pause();

  const nextElementAnimation = priorElement?.animate(
    getEnterAnimationKeyframe(window.innerWidth, "left"),
    duration
  );
  nextElementAnimation?.pause();

  const leaveLeftAnimation = selectedElement.animate(
    getLeaveAnimationKeyframe(window.innerWidth, "left"),
    duration
  );
  leaveLeftAnimation.pause();

  const leaveRightAnimation = selectedElement.animate(
    getLeaveAnimationKeyframe(window.innerWidth, "right"),
    duration
  );
  leaveRightAnimation.pause();

  const [xPox, setXPox] = useState(0);

  usePointerEvents(selectedElement, {
    onDown(e) {},
    onMove(e) {
      setXPox(xPox + e.movementX);

      const currentPosition = getAnimationPositionFromPointerPosition(
        Math.abs(xPox),
        Math.abs(xPox) / window.innerWidth
      );
      if (xPox < 0) {
        if (nextElementAnimation)
          nextElementAnimation.currentTime = duration * currentPosition;
        leaveLeftAnimation.currentTime = duration * currentPosition;
        leaveRightAnimation.currentTime = 0;
      } else {
        if (priorElementAnimtaion)
          priorElementAnimtaion.currentTime = duration * currentPosition;
        leaveRightAnimation.currentTime = duration * currentPosition;
        leaveLeftAnimation.currentTime = 0;
      }
    },
    onUp(e) {
      if (Math.abs(xPox) <= clickThreshold) {
        console.log("clicked");
      } else if (
        Math.abs(xPox) <=
        (window.innerWidth * swipeThresholdPercentage) / 100
      ) {
        if (xPox > 0) {
          if (priorElementAnimtaion) {
            priorElementAnimtaion.playbackRate = -1;
            priorElementAnimtaion.play();
          }
          leaveRightAnimation.playbackRate = -1;
          leaveRightAnimation.play();
        } else {
          if (nextElementAnimation) {
            nextElementAnimation.playbackRate = -1;
            nextElementAnimation.play();
          }
          leaveLeftAnimation.playbackRate = -1;
          leaveLeftAnimation.play();
        }

        setXPox(0);
      } else {
        if (xPox > 0) {
          console.log("swipe right triggerd.");

          if (priorElementAnimtaion) {
            priorElementAnimtaion.playbackRate = -1;
            priorElementAnimtaion.play();

            leaveRightAnimation.playbackRate = -1;
            leaveRightAnimation.play();
            leaveRightAnimation.onfinish = (e) => {
              let newIndex = activeIndex - 1;
              if (newIndex < 0) newIndex = imageElements.length - 1;
              callbacks.onSelectedChange(newIndex);
            };
          }
          //no prior element ,return to normal position.
          else {
            leaveRightAnimation.playbackRate = -1;
            leaveRightAnimation.play();
          }
        } else {
          console.log("swipe left triggered");
          if (nextElementAnimation) {
            nextElementAnimation.playbackRate = -1;
            nextElementAnimation.play();
            leaveLeftAnimation.playbackRate = -1;
            leaveLeftAnimation.play();
            leaveLeftAnimation.onfinish = (e) => {
              let newIndex = activeIndex + 1;
              if (newIndex > imageElements.length - 1) newIndex = 0;
              callbacks.onSelectedChange(newIndex);
            };
          }
          //no next element,return to normal position.
          else {
            leaveLeftAnimation.playbackRate = -1;
            leaveLeftAnimation.play();
          }
        }
      }
    },
    onCancel(e) {},
  });
}
