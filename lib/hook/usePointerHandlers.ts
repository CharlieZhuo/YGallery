import { useEffect, useState } from "react";

export type handlerType = {
  onDown?: (e: PointerEvent) => void;
  onMove?: (e: PointerEvent) => void;
  onUp?: (e: PointerEvent) => void;
  onCancel?: (e: PointerEvent) => void;
};

export default function usePointerHandlers<ElementType extends HTMLElement>(
  ref: ElementType | undefined,
  ...handlers: handlerType[]
) {
  const [moving, setMoving] = useState(false);
  useEffect(() => {
    function onDownHandler(e: PointerEvent) {
      console.debug("pointerDown");
      setMoving(true);
      handlers.forEach((h) => {
        h.onDown && h.onDown(e);
      });
      const currentTarget = e.currentTarget as ElementType;
      currentTarget.setPointerCapture(e.pointerId);
    }

    function onMoveHandler(e: PointerEvent) {
      //if primary button is not pressed anymore
      if (moving && e.buttons % 2 !== 1) {
        onUpHandler(e);
      }
      if (moving) {
        handlers.forEach((h) => {
          h.onMove && h.onMove(e);
        });
      }
    }

    function onUpHandler(e: PointerEvent) {
      console.debug("pointerUp");
      setMoving(false);
      handlers.forEach((h) => {
        h.onUp && h.onUp(e);
      });
      const currentTarget = e.currentTarget as ElementType;
      currentTarget.releasePointerCapture(e.pointerId);
    }

    function onCancelHandler(e: PointerEvent) {
      console.debug(`pointer:${e.pointerId} canceled`);
      setMoving(false);
      handlers.forEach((h) => {
        h.onCancel && h.onCancel(e);
      });
      const currentTarget = e.currentTarget as ElementType;
      currentTarget.releasePointerCapture(e.pointerId);
    }
    function blurHandler(e: FocusEvent) {
      setMoving(false);
    }
    function dragStartHandler(e: DragEvent) {
      e.preventDefault();
    }
    function clickHandler(e: MouseEvent) {
      e.preventDefault();
    }

    if (ref) {
      console.debug("Adding pointer events handlers");
      ref.addEventListener("pointerdown", onDownHandler);
      ref.addEventListener("pointermove", onMoveHandler);
      ref.addEventListener("pointerup", onUpHandler);
      ref.addEventListener("pointercancel", onCancelHandler);
      ref.addEventListener("blur", blurHandler);
      ref.addEventListener("dragstart", dragStartHandler);
      ref.addEventListener("click", clickHandler);
    }
    return () => {
      if (ref) {
        ref.removeEventListener("pointerdown", onDownHandler);
        ref.removeEventListener("pointermove", onMoveHandler);
        ref.removeEventListener("pointerup", onUpHandler);
        ref.removeEventListener("pointercancel", onCancelHandler);
        ref.removeEventListener("blur", blurHandler);
        ref.removeEventListener("dragstart", dragStartHandler);
        ref.removeEventListener("click", clickHandler);
      }
    };
  }, [handlers]);
}
