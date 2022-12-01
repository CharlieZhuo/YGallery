import { User } from "@supabase/auth-helpers-nextjs";

import UserStatusMenu from "./userStatusMenu";
import {
  getUserAvatarUrl,
  getUserProfile,
} from "../../../lib/getUserProfileAvatar";

export default async function UserStatusData({ user }: { user: User }) {
  const [avatarUrl, profile] = await Promise.all([
    getUserAvatarUrl(user.id),
    getUserProfile(user.id),
  ]);

  return (
    <UserStatusMenu
      avatarUrl={avatarUrl}
      userName={profile?.username || user.email || "用户"}
    ></UserStatusMenu>
  );
}
