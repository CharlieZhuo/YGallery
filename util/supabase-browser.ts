import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../types/supabase";

import "client-only";

export default createBrowserSupabaseClient<Database>();
