import "server-only";
import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../types/supabase";

export function createSCSupabaseClient() {
  return createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
}
