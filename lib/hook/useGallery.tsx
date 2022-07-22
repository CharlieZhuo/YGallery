import { RefObject, useEffect, useImperativeHandle, useState } from "react";

interface propType<eleType> {
  allElements: eleType[] | undefined;
  activeIndex: number;
  detailView: boolean;
  callbacks: {
    onAnimationFinished: (oldIndex: number, newIndex: number) => void;
  };
  keyFrameEffects: any;
  imperativeHandle: RefObject<any>;
}

export type imperativeHandleType = {
  goNext: () => void;
  goLast: () => void;
  goToIndex: (newIndex: number) => void;
};

export default function useGallery<eleType extends HTMLElement>({
  allElements,
  activeIndex,
  detailView,
  callbacks,
  keyFrameEffects,
  imperativeHandle,
}: propType<eleType>) {
  useImperativeHandle(
    imperativeHandle,
    () => {
      return {
        goNext: () => {
          callbacks.onAnimationFinished(activeIndex, activeIndex + 1);
        },
        goLast: () => {
          callbacks.onAnimationFinished(activeIndex, activeIndex - 1);
        },
        goToIndex: (newIndex: number) => {
          callbacks.onAnimationFinished(activeIndex, newIndex);
        },
      };
    },
    []
  );

  const [pointer, setPointer] = useState<number>(0);

  useEffect(() => {
    if (allElements) {
      if (!pointer) {
        allElements
          .filter((e, index) => {
            return index !== activeIndex;
          })
          .forEach((e) => {
            e.style.transform = `translate(-110vw,0px)`;
          });
      }
      if (pointer !== activeIndex && keyFrameEffects) {
        //play enter animation on new active Index
        const enterElement = allElements[activeIndex];
        enterElement.style.transform = "translate(0,0)";
        const enterAni = enterElement.animate(keyFrameEffects.enter, {
          duration: 2000,
          fill: "both",
        });

        const lk = { ...keyFrameEffects.leave };
        const leaveElement = allElements[pointer];
        leaveElement.style.transform = `translate(0,0)`;
        const leaveAni = leaveElement.animate(keyFrameEffects.leave, {
          duration: 2000,
          fill: "both",
        });

        //make all irelevent element disappear
        allElements
          .filter((e, index) => {
            return index !== activeIndex && index !== pointer;
          })
          .forEach((e) => {
            e.style.transform = `translate(-110vw,0px)`;
          });

        enterAni.play();
        leaveAni.play();
        Promise.all([enterAni.finished, leaveAni.finished]).then((e) => {
          callbacks.onAnimationFinished(pointer, activeIndex);
          console.log("playback Finished");
        });
      }
      setPointer(activeIndex);
    }
  }, [activeIndex, allElements, keyFrameEffects]);

  useEffect(() => {
    if (allElements) {
      const img = allElements[activeIndex].querySelector("img");
      if (img) {
        if (detailView) {
          const rect = img.getBoundingClientRect();
          // console.log("setting");
          img.style.transform = `scale(${img.naturalWidth / rect.width})`;
        } else {
          img.style.transform = `scale(1,1)`;
        }
      }
    }
  }, [detailView, activeIndex, allElements]);
}
