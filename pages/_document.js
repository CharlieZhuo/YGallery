import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="zh-Hans-CN">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SZKP3XYDBS"
        ></script>

        <script
          id={"gtag"}
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-SZKP3XYDBS");`,
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
