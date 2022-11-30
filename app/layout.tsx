import React, { ReactElement } from "react";
import { createSCSupabaseClient } from "../util/supabase-server";
import AuthChangeListener from "./authChangeListener";

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: ReactElement;
}) {
  const supabase = createSCSupabaseClient();
  const tokenFromReq = (await supabase.auth.getSession()).data.session
    ?.access_token;
  return (
    <html lang="zh-hans">
      <head></head>
      <body>
        <AuthChangeListener token={tokenFromReq}></AuthChangeListener>
        {children}
      </body>
    </html>
  );
}
