import { createSCSupabaseClient } from "../../../util/supabase-server";
import SignoutButton from "./signoutButton";

import { User } from "@supabase/auth-helpers-nextjs";
import UserStatusMenu from "./userStatusMenu";

export default async function UserStatusData({ user }: { user: User }) {
  const avatarURLPromise = getUserAvatarUrl(user.id);
  const profilePromise = getUserProfile(user.id);

  const [url, profile] = await Promise.all([avatarURLPromise, profilePromise]);
  return (
    <UserStatusMenu
      avatarUrl={url}
      userName={profile?.username || user.email || "用户"}
    ></UserStatusMenu>
  );
}

async function getUserAvatarUrl(userId?: string) {
  const supabase = createSCSupabaseClient();

  const { data: userAvatarFolder, error } = await supabase.storage
    .from("user-Avatar")
    .list(`${userId}`);

  if (userAvatarFolder) {
    const fileObject = userAvatarFolder.at(0);
    if (fileObject) {
      return supabase.storage
        .from("user-Avatar")
        .getPublicUrl(`${userId}/${fileObject.name}`).data.publicUrl;
    }
  }
  return undefined;
}
async function getUserProfile(userId: string) {
  const supabase = createSCSupabaseClient();
  const { data, error } = await supabase
    .from("Profiles")
    .select("*")
    .eq("id", userId)
    .maybeSingle();
  if (data && !error) {
    return data;
  } else return null;
}
