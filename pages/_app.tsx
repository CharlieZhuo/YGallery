import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

type AppPropsWithLayout = AppProps & {
  Component: { getLayout: (page: ReactElement) => ReactNode };
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component?.getLayout || ((page: any) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
