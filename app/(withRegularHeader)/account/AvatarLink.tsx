"use client";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import UserAvatarDisplay from "../../../components/UserAvatarDisplay";

export default function AvatarLink({
  avatarUrl,
  user,
}: {
  avatarUrl?: string;
  user: User;
}) {
  return (
    <div>
      <Link href={"/account/avatar"}>
        {" "}
        <UserAvatarDisplay
          sizePx={64}
          userAvatarUrl={avatarUrl}
          onClick={(e) => {}}
        ></UserAvatarDisplay>
      </Link>
    </div>
  );
}
