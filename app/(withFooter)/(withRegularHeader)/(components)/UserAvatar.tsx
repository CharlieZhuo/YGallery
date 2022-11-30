import { createSCSupabaseClient } from "../../../../util/supabase-server";

import Image from "next/image";

import { User as UserIcon } from "react-feather";
import { User } from "@supabase/auth-helpers-nextjs";
import SignoutButton from "./signoutButton";
import { useEffect, useState } from "react";

export default async function UserAvatar({ user }: { user: User }) {
  const url = await getUserAvatarUrl(user.id);

  const avatarElement = renderAvatarElement(url, user.email || "unknown");

  return (
    <div>
      <p>{user.email}</p>
      {avatarElement}
      <SignoutButton></SignoutButton>
    </div>
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
  return null;
}

function renderAvatarElement(userAvatarUrl: string | null, username: string) {
  if (userAvatarUrl) {
    return (
      <Image
        src={userAvatarUrl}
        alt={`Avatar of user:${username}`}
        width={64}
        height={64}
      ></Image>
    );
  } else
    return (
      <span>
        <UserIcon width={64} height={64}></UserIcon>
      </span>
    );
}
