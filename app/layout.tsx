import Link from "next/link";
import React, { ReactNode } from "react";
import { createSCSupabaseClient } from "../util/supabase-server";
import AuthChangeListener from "./authChangeListener";

import "./global.css";

import styles from "./footer.module.css";

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = createSCSupabaseClient();
  const tokenFromReq = (await supabase.auth.getSession()).data.session
    ?.access_token;
  return (
    <html lang="zh-hans">
      <head></head>
      <body>
        <AuthChangeListener token={tokenFromReq}></AuthChangeListener>
        <main>{children}</main>
        <footer className={styles.footer}>
          <div>
            <p className={styles.footertitle}>悠悠画廊</p>{" "}
            <Link href={"/about"}>关于</Link>
            <Link href={"/contact"}>联系</Link>
          </div>
          <p className={styles.copyright}>© 2022 悠悠画廊 版权所有</p>
        </footer>
      </body>
    </html>
  );
}
