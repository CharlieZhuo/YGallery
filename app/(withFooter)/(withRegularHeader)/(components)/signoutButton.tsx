"use client";
import { useRouter } from "next/navigation";
import supabaseBrowser from "../../../../util/supabase-browser";

export default function SignoutButton() {
  const router = useRouter();
  return (
    <button
      onClick={(e) => {
        supabaseBrowser.auth.signOut().then(() => {
          router.refresh();
        });
      }}
    >
      退出登录
    </button>
  );
}
