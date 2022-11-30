"use client";
import {
  Auth,
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-react";
import { useRouter } from "next/navigation";

import supabaseBrowser from "../../../util/supabase-browser";

export default function SupabaseAuthUI() {
  const router = useRouter();

  supabaseBrowser.auth.onAuthStateChange((ev, session) => {
    if (ev === "SIGNED_IN") {
      router.push("/");
    }
  });
  return (
    <Auth supabaseClient={supabaseBrowser} appearance={{ theme: ThemeSupa }} />
  );
}
