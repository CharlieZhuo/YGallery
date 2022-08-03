import { useRouter } from "next/router";
import { useEffect } from "react";

export function useFragmentScrollPosition(...dependency: any[]) {
  const path = useRouter().asPath;
  const hashIndex = path.indexOf("#");
  let fragment: string | null = null;
  if (hashIndex !== -1 && hashIndex !== path.length - 1)
    fragment = path.substring(hashIndex + 1);

  useEffect(() => {
    if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({
          behavior: "auto",
        });
      }
    }
  }, [fragment, dependency]);
}
