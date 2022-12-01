"use client";
import { User } from "@supabase/supabase-js";
import { useState } from "react";
import UserAvatarDisplay from "../../../components/UserAvatarDisplay";
import AvatarUploader from "./AvatarUploader";

export default function AvatarEditor({
  avatarUrl,
  user,
}: {
  avatarUrl?: string;
  user: User;
}) {
  const [EditorOpen, setEditorOpen] = useState(false);

  return (
    <div>
      {" "}
      <UserAvatarDisplay
        sizePx={64}
        userAvatarUrl={avatarUrl}
        onClick={(e) => {
          setEditorOpen(true);
        }}
      ></UserAvatarDisplay>
      {EditorOpen && <AvatarUploader user={user}></AvatarUploader>}
    </div>
  );
}
