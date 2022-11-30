import { createSCSupabaseClient } from "../../../../util/supabase-server";
import ProfileSetupForm from "./ProfileSetupForm";

export default async function Account() {
  const supabase = createSCSupabaseClient();
  const user = supabase.auth.getUser();
  const { data, error } = await supabase
    .from("profiles")
    .select()
    .maybeSingle();
  if (error) throw error;
  if (!data) {
    return <ProfileSetupForm></ProfileSetupForm>;
  } else return <div>Account</div>;
}
