"use client";

import Link from "next/link";
import { useState } from "react";
import UserAvatarDisplay from "../../../../components/UserAvatarDisplay";
import SignoutButton from "./signoutButton";
import styles from "./userStatusMenu.module.css";

export default function UserStatusMenu({
  avatarUrl,
  userName,
}: {
  avatarUrl?: string;
  userName: string;
}) {
  const [CollapsedMenu, setCollapsedMenu] = useState(false);

  return (
    <div>
      <div className={styles.icon}>
        <UserAvatarDisplay
          sizePx={64}
          userAvatarUrl={avatarUrl}
        ></UserAvatarDisplay>
        <p>{userName}</p>
      </div>
      <Link href={"./account"}>个人中心</Link>
      <SignoutButton></SignoutButton>
    </div>
  );
}
