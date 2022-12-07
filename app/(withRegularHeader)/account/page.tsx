import { createSCSupabaseClient } from "../../../util/supabase-server";
import ProfileSetupForm from "./ProfileSetupForm";

import { redirect } from "next/navigation";
import AvatarLink from "./AvatarLink";
import {
  getUserAvatarUrl,
  getUserProfile,
} from "../../../lib/getUserProfileAvatar";

export default async function Account() {
  const supabase = createSCSupabaseClient();
  const user = await supabase.auth.getUser();

  if (user.error || !user.data) {
    redirect("/login");
  }

  const [profile, url] = await Promise.all([
    getUserProfile(user.data.user.id),
    getUserAvatarUrl(user.data.user.id),
  ]);

  if (!profile) {
    return <ProfileSetupForm userId={user.data.user.id}></ProfileSetupForm>;
  } else
    return (
      <main>
        <h2>欢迎，{profile.username}</h2>

        <AvatarLink avatarUrl={url} user={user.data.user}></AvatarLink>
      </main>
    );
}
