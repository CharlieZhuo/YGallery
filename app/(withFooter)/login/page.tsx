"use client";

import PasswordLogin from "./loginForm";
import SupabaseAuthUI from "./supabaseAuthUI";
export default function AuthComponent() {
  return (
    <>
      <SupabaseAuthUI></SupabaseAuthUI>
      <PasswordLogin></PasswordLogin>
    </>
  );
}
