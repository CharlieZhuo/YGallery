"use client";

import { useEffect } from "react";
import supabase from "../util/supabase-browser";
import { useRouter } from "next/navigation";
export default function AuthChangeListener({ token }: { token?: string }) {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      //token different from that from last req.
      if (session?.access_token !== token) {
        console.log(`token change,refreshing route...`);
        router.refresh();
      }
    });
  }, [token]);
  return <></>;
}
