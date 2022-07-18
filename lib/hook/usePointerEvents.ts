import { RefObject, useEffect, useState } from "react";

//For adding pointer event callback on the node pointed to by the ref parameter.
export function usePointerEvents<refType extends HTMLElement>(
  ref: refType | undefined,
  callbacks: {
    onDown: (e: PointerEvent) => void;
    onMove: (e: PointerEvent) => void;
    onUp: (e: PointerEvent) => void;
    onCancel: (e: PointerEvent) => void;
  }
) {
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    if (ref) {
      ref.onpointerdown = (e) => {
        setMoving(true);
        callbacks.onDown(e);
        ref.setPointerCapture(e.pointerId);
      };
      ref.onpointermove = (e) => {
        //if primary button is not pressed anymore
        if (moving && e.buttons % 2 !== 1) {
          setMoving(false);
          callbacks.onUp(e);
          ref.releasePointerCapture(e.pointerId);
        }
        if (moving) {
          callbacks.onMove(e);
        }
      };
      ref.onpointerup = (e) => {
        setMoving(false);
        callbacks.onUp(e);
        ref.releasePointerCapture(e.pointerId);
      };
      ref.onpointercancel = (e) => {
        setMoving(false);
        callbacks.onCancel(e);
        ref.releasePointerCapture(e.pointerId);
      };

      ref.onblur = (e) => {
        setMoving(false);
      };
      //To prevent triggering unwanted pointer cancel events.
      ref.ondragstart = (e) => {
        e.preventDefault();
      };
    }
    return () => {
      if (ref) {
        ref.onpointerdown = null;
        ref.onpointercancel = null;
        ref.onpointerup = null;
        ref.onpointermove = null;

        ref.onblur = null;
      }
    };
  }, [ref, callbacks, moving]);
}
