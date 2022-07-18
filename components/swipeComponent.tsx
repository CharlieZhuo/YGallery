import useViewer from "../lib/hook/useViewer";

export default function SwipeComponent<eleType extends HTMLElement>({
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
  useViewer({
    selectedElement,
    nextElement,
    priorElement,
    callbacks: callbacks,
  });
  return <></>;
}
