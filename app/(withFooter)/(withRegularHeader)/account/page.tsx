import { createSCSupabaseClient } from "../../../../util/supabase-server";
import ProfileSetupForm from "./ProfileSetupForm";

import UserAvatarDisplay from "../../../../components/UserAvatarDisplay";
import { redirect } from "next/navigation";
import AvatarEditor from "./AvatarEditor";

export default async function Account() {
  const supabase = createSCSupabaseClient();
  const user = await supabase.auth.getUser();

  if (user.error || !user.data) {
    redirect("/login");
  }
  const { data, error } = await supabase
    .from("Profiles")
    .select()
    .eq("id", user.data.user.id)
    .maybeSingle();
  if (error) throw error;
  if (!data) {
    return <ProfileSetupForm userId={user.data.user.id}></ProfileSetupForm>;
  } else
    return (
      <main>
        <h2>欢迎，{data.username}</h2>

        <AvatarEditor user={user.data.user}></AvatarEditor>
      </main>
    );
}
